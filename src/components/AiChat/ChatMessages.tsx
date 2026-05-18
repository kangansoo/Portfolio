import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ChatMessage as ChatMessageType } from "@/types"
import ChatMessage from "./ChatMessage"

interface ChatMessagesProps {
  messages: ChatMessageType[]
}

const LoadingAvatar = () => (
  <div className="flex items-start">
    <div className="relative flex-shrink-0" style={{ width: "40px", height: "40px" }}>
      <div className="ai-loading-ring" />
      <div className="absolute rounded-full overflow-hidden bg-white z-10" style={{ inset: "2px" }}>
        <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover opacity-100" />
      </div>
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
