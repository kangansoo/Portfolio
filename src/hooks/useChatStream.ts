import { useState, useRef } from "react"
import type { ChatMessage } from "@/types"

const SESSION_KEY = "portfolio_chat_history"
const API_URL = "https://portfolio-functions-368102775723.us-west1.run.app"

const loadFromSession = (): ChatMessage[] => {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY)
    if (!stored) return []
    const parsed = JSON.parse(stored) as ChatMessage[]
    return parsed.map((msg) => ({ ...msg, timestamp: new Date(msg.timestamp) }))
  } catch {
    return []
  }
}

const saveToSession = (messages: ChatMessage[]) => {
  try {
    // 빈 content(로딩 플레이스홀더)는 저장하지 않음
    const toSave = messages.filter((msg) => msg.content !== "")
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(toSave))
  } catch {
    // sessionStorage 용량 초과 등 무시
  }
}

const getDelay = (char: string) => {
  if ([".", "!", "?"].includes(char)) return 60 + Math.random() * 40
  if ([",", "\n", ":"].includes(char)) return 20 + Math.random() * 20
  if (char === " " && Math.random() < 0.3) return 15 + Math.random() * 15
  if (Math.random() < 0.05) return 30 + Math.random() * 40
  return 9 + Math.random() * 7
}

export const useChatStream = (initialMessages: ChatMessage[]) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = loadFromSession()
    return stored.length > 0 ? stored : initialMessages
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const animFrameRef = useRef<number | null>(null)
  const streamingIdRef = useRef<string | null>(null)

  const typeText = (full: string, messageId: string) => {
    if (animFrameRef.current !== null) clearTimeout(animFrameRef.current)

    let displayed = 0
    setIsTyping(true)

    const tick = () => {
      if (displayed >= full.length) {
        setIsTyping(false)
        streamingIdRef.current = null
        // 타이핑 완료 후 세션에 저장
        setMessages((prev) => {
          const completed = prev.map((msg) =>
            msg.id === messageId ? { ...msg, content: full } : msg
          )
          saveToSession(completed)
          return completed
        })
        return
      }

      const chunkSize =
        Math.random() < 0.2
          ? 6 + Math.floor(Math.random() * 3)
          : 3 + Math.floor(Math.random() * 3)
      displayed = Math.min(displayed + chunkSize, full.length)
      const partial = full.slice(0, displayed)

      setMessages((prev) =>
        prev.map((msg) => (msg.id === messageId ? { ...msg, content: partial } : msg))
      )

      animFrameRef.current = setTimeout(tick, getDelay(full[displayed - 1])) as unknown as number
    }

    animFrameRef.current = setTimeout(tick, 50) as unknown as number
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || isTyping) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    }

    const assistantId = `ai-${Date.now() + 1}`
    const assistantPlaceholder: ChatMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }

    streamingIdRef.current = assistantId

    setMessages((prev) => {
      const updated = [...prev, userMessage, assistantPlaceholder]
      // 유저 메시지까지만 저장 (assistant placeholder는 저장 제외)
      saveToSession(updated)
      return updated
    })

    setIsLoading(true)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000)

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
        signal: controller.signal,
      })

      if (!response.ok) throw new Error(`Network error: ${response.status}`)

      const json = await response.json()
      const { text: responseText, error } = json

      if (error) throw new Error(error)

      if (responseText) {
        typeText(responseText, assistantId)
      } else {
        streamingIdRef.current = null
      }
    } catch (err: unknown) {
      const isAbort = err instanceof Error && err.name === "AbortError"
      const errorContent = isAbort
        ? "요청 시간이 초과되었습니다. 다시 시도해주세요."
        : "응답을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."

      setMessages((prev) => {
        const updated = prev.map((msg) =>
          msg.id === assistantId ? { ...msg, content: errorContent } : msg
        )
        saveToSession(updated)
        return updated
      })
      streamingIdRef.current = null
    } finally {
      clearTimeout(timeoutId)
      setIsLoading(false)
    }
  }

  const isActive = isLoading || isTyping

  return { messages, isLoading, isTyping, isActive, sendMessage }
}
