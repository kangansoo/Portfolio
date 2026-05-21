import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useChatStream } from "@/hooks/useChatStream";
import { useExpandedHeight } from "@/hooks/useExpandedHeight";
import type { ChatState, ChatMessage } from "@/types";

const INITIAL_MESSAGE: ChatMessage = {
  id: "initial",
  role: "assistant",
  content:
    "안녕하세요! 사용자 중심의 가치를 더하는 프론트엔드 개발자 강안수입니다.\n프로젝트, 기술 스택, 경험 등 궁금한 것이 있으면 편하게 물어보세요",
  timestamp: new Date(),
};

const EASE = [0.4, 0, 0.2, 1] as const;
const DEFAULT_HEIGHT = 64;

const AiChat = ({ showLanding = false }: { showLanding?: boolean }) => {
  const [chatState, setChatState] = useState<ChatState>("default");
  const [footerVisible, setFooterVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const isVisible = ready && !footerVisible;
  const [inputValue, setInputValue] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const { height: expandedHeight, bottom: bottomOffset } = useExpandedHeight();
  const { messages, isActive, sendMessage } = useChatStream([INITIAL_MESSAGE]);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (chatState !== "expanded") return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setChatState("default");
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside as EventListener, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside as EventListener);
    };
  }, [chatState]);

  const handleSend = (text: string) => {
    if (!text.trim() || isActive) return;
    setInputValue("");
    if (chatState === "default") setChatState("expanded");
    sendMessage(text);
  };

  if (showLanding) return null;

  return (
    <div
      className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
      style={{ bottom: bottomOffset }}
    >
      <motion.div
        className={isVisible ? "pointer-events-auto" : "pointer-events-none"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <motion.div
          ref={panelRef}
          className="ai-panel relative overflow-hidden flex flex-col"
          style={{
            borderRadius: "20px",
            width: "560px",
            maxWidth: "calc(100vw - 24px)",
          }}
          animate={{
            height: chatState === "expanded" ? expandedHeight : DEFAULT_HEIGHT,
          }}
          initial={false}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {/* 상단 수평 하이라이트 선 */}
          <div className="ai-highlight-top absolute top-0 left-0 right-0 h-px pointer-events-none z-10" />
          {/* 좌측 수직 하이라이트 선 */}
          <div className="ai-highlight-left absolute top-0 left-0 w-px h-full pointer-events-none z-10" />
          {/* 대각선 빛 반사 오버레이 */}
          <div className="ai-overlay-diagonal absolute inset-0 pointer-events-none z-10" style={{ borderRadius: "20px" }} />
          {/* 좌상단 코너 radial */}
          <div
            className="ai-corner-tl absolute top-0 left-0 pointer-events-none z-10"
            style={{ width: "200px", height: "200px", borderRadius: "20px 0 0 0" }}
          />
          {/* 우하단 코너 서브 radial */}
          <div
            className="ai-corner-br absolute bottom-0 right-0 pointer-events-none z-10"
            style={{ width: "140px", height: "140px", borderRadius: "0 0 20px 0" }}
          />

          {/* 확장 상태: 헤더 + 메시지 영역 */}
          <AnimatePresence>
            {chatState === "expanded" && (
              <motion.div
                className="flex flex-col flex-1 min-h-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <ChatHeader onMinimize={() => setChatState("default")} />
                <ChatMessages messages={messages} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 입력창 */}
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            isLoading={isActive}
            isExpanded={chatState === "expanded"}
            showExpand={chatState === "default"}
            onExpand={() => setChatState("expanded")}
            placeholder={
              chatState === "default"
                ? "저에 대해 궁금한 것들을 물어보세요 :)"
                : "메세지를 입력하세요..."
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AiChat;
