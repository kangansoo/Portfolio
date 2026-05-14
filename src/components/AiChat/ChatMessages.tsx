import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ChatMessage as ChatMessageType } from "@/types"
import ChatMessage from "./ChatMessage"

interface ChatMessagesProps {
  messages: ChatMessageType[]
}

const LoadingAvatar = () => (
  <div className="flex items-start">
    <div className="relative flex-shrink-0 w-11 h-11">
      <img src="/images/profile.jpg" alt="profile" className="absolute inset-0 w-full h-full object-cover rounded-full" />
      {/* overflow-hidden 없이 mask만으로 링 처리 — 외곽을 transparent로 페이드해 계단 현상 제거 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, #4875eb, #6366f1, #8b5cf6, #c026d3, #e11d48, #8b5cf6, #4875eb)",
          WebkitMaskImage: "radial-gradient(circle closest-side, transparent 84%, black 88%, transparent 96%)",
          maskImage: "radial-gradient(circle closest-side, transparent 84%, black 88%, transparent 96%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
)

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 min-h-0" role="log" aria-live="polite">
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* 빈 content = 네트워크 대기 → 아바타 테두리 애니메이션만 표시 */}
            {message.role === "assistant" && message.content === "" ? (
              <LoadingAvatar />
            ) : (
              <ChatMessage message={message} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatMessages
