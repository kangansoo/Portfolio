import { useState, useRef } from "react";
import type { ChatMessage } from "@/types";

const SESSION_KEY = "portfolio_chat_history";
const SESSION_ID_KEY = "portfolio_session_id";
const API_URL = import.meta.env.VITE_AGENT_API_URL;

const getOrCreateSessionId = (): string => {
  try {
    const existing = sessionStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;
    const newId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_ID_KEY, newId);
    return newId;
  } catch {
    return crypto.randomUUID();
  }
};

const loadFromSession = (): ChatMessage[] => {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as ChatMessage[];
    return parsed.map((msg) => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));
  } catch {
    return [];
  }
};

const saveToSession = (messages: ChatMessage[]) => {
  try {
    // 빈 content(로딩 플레이스홀더)는 저장하지 않음
    const toSave = messages.filter((msg) => msg.content !== "");
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(toSave));
  } catch {
    // sessionStorage 용량 초과 등 무시
  }
};

const getDelay = (char: string) => {
  if ([".", "!", "?"].includes(char)) return 22 + Math.random() * 14;
  if ([",", "\n", ":"].includes(char)) return 8 + Math.random() * 8;
  if (char === " " && Math.random() < 0.2) return 5 + Math.random() * 5;
  if (Math.random() < 0.03) return 10 + Math.random() * 12;
  return 3 + Math.random() * 3;
};

export const useChatStream = (initialMessages: ChatMessage[]) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = loadFromSession();
    return stored.length > 0 ? stored : initialMessages;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const animFrameRef = useRef<number | null>(null);
  const streamingIdRef = useRef<string | null>(null);

  const typeText = (full: string, messageId: string) => {
    if (animFrameRef.current !== null) clearTimeout(animFrameRef.current);

    let displayed = 0;
    setIsTyping(true);

    const tick = () => {
      if (displayed >= full.length) {
        setIsTyping(false);
        streamingIdRef.current = null;
        // 타이핑 완료 후 세션에 저장
        setMessages((prev) => {
          const completed = prev.map((msg) =>
            msg.id === messageId ? { ...msg, content: full } : msg,
          );
          saveToSession(completed);
          return completed;
        });
        return;
      }

      const chunkSize =
        Math.random() < 0.25
          ? 10 + Math.floor(Math.random() * 6)
          : 5 + Math.floor(Math.random() * 5);
      displayed = Math.min(displayed + chunkSize, full.length);
      const partial = full.slice(0, displayed);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, content: partial } : msg,
        ),
      );

      animFrameRef.current = setTimeout(
        tick,
        getDelay(full[displayed - 1]),
      ) as unknown as number;
    };

    animFrameRef.current = setTimeout(tick, 50) as unknown as number;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    const assistantId = `ai-${Date.now() + 1}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    };

    streamingIdRef.current = assistantId;

    setMessages((prev) => {
      const updated = [...prev, userMessage, assistantPlaceholder];
      // 유저 메시지까지만 저장 (assistant placeholder는 저장 제외)
      saveToSession(updated);
      return updated;
    });

    setIsLoading(true);

    const sessionId = getOrCreateSessionId();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, session_id: sessionId }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) throw new Error(`Network error: ${response.status}`);

      // SSE 형식으로 응답이 오지만 실제 스트리밍이 아니므로 전체 텍스트를 모아서 typeText 적용
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";
      let buffer = "";

      outer: while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          let payload: { chunk?: string; done?: boolean; error?: string };
          try {
            payload = JSON.parse(trimmed.slice(6));
          } catch {
            continue; // malformed JSON 라인은 무시
          }
          if (payload.error) throw new Error(payload.error);
          if (payload.done) break outer;
          if (payload.chunk) fullText += payload.chunk;
        }
      }

      if (fullText) {
        typeText(fullText, assistantId);
      } else {
        streamingIdRef.current = null;
      }
    } catch (err: unknown) {
      const isAbort = err instanceof Error && err.name === "AbortError";
      const errorContent = isAbort
        ? "요청 시간이 초과되었습니다. 다시 시도해주세요."
        : "응답을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

      setMessages((prev) => {
        const updated = prev.map((msg) =>
          msg.id === assistantId ? { ...msg, content: errorContent } : msg,
        );
        saveToSession(updated);
        return updated;
      });
      streamingIdRef.current = null;
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const isActive = isLoading || isTyping;

  return { messages, isLoading, isTyping, isActive, sendMessage };
};
