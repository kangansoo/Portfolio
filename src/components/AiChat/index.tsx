import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import { useChatStream } from "@/hooks/useChatStream"
import type { ChatState, ChatMessage } from "@/types"

const INITIAL_MESSAGE: ChatMessage = {
  id: "initial",
  role: "assistant",
  content: "안녕하세요! 저는 안수의 포트폴리오 AI입니다.\n프로젝트, 기술 스택, 경험 등 궁금한 것이 있으면 편하게 물어보세요 :)",
  timestamp: new Date(),
}

const EASE = [0.4, 0, 0.2, 1] as const
const DEFAULT_HEIGHT = 64
const EXPANDED_HEIGHT = 680

const panelStyle = {
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.28)",
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 1px 0 0 rgba(255, 255, 255, 0.65),
    inset 0 0 40px 8px rgba(255, 255, 255, 0.06)
  `,
}

const AiChat = ({ showLanding = false }: { showLanding?: boolean }) => {
  const [chatState, setChatState] = useState<ChatState>("default")
  const [footerVisible, setFooterVisible] = useState(false)
  const [ready, setReady] = useState(false)
  const isVisible = ready && !footerVisible
  const [inputValue, setInputValue] = useState("")
  const panelRef = useRef<HTMLDivElement>(null)

  const { messages, isActive, sendMessage } = useChatStream([INITIAL_MESSAGE])

  // 랜딩이 끝난 뒤 짧은 딜레이 후 등장
  useEffect(() => {
    if (showLanding) {
      setReady(false)
      return
    }
    const timer = setTimeout(() => setReady(true), 600)
    return () => clearTimeout(timer)
  }, [showLanding])

  // Footer 도달 시 숨김
  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  // 확장 상태에서 바깥 클릭 시 기본 상태로
  useEffect(() => {
    if (chatState !== "expanded") return
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setChatState("default")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [chatState])

  const handleSend = (text: string) => {
    if (!text.trim() || isActive) return
    setInputValue("")
    if (chatState === "default") setChatState("expanded")
    sendMessage(text)
  }

  return (
    <div className="fixed bottom-7 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        className="pointer-events-auto"
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <motion.div
          ref={panelRef}
          className="relative overflow-hidden flex flex-col"
          style={{
            ...panelStyle,
            borderRadius: "20px",
            width: "560px",
            maxWidth: "calc(100vw - 40px)",
          }}
          animate={{ height: chatState === "expanded" ? EXPANDED_HEIGHT : DEFAULT_HEIGHT }}
          initial={false}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {/* 상단 수평 하이라이트 선 */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
            style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,1) 55%, transparent 95%)" }}
          />
          {/* 좌측 수직 하이라이트 선 */}
          <div
            className="absolute top-0 left-0 w-px h-full pointer-events-none z-10"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 75%)" }}
          />
          {/* 대각선 빛 반사 오버레이 */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 45%, transparent 65%)", borderRadius: "20px" }}
          />
          {/* 좌상단 코너 radial */}
          <div
            className="absolute top-0 left-0 pointer-events-none z-10"
            style={{ width: "200px", height: "200px", background: "radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.1) 35%, transparent 65%)", borderRadius: "20px 0 0 0" }}
          />
          {/* 우하단 코너 서브 radial */}
          <div
            className="absolute bottom-0 right-0 pointer-events-none z-10"
            style={{ width: "140px", height: "140px", background: "radial-gradient(ellipse at 100% 100%, rgba(255,255,255,0.14) 0%, transparent 60%)", borderRadius: "0 0 20px 0" }}
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
            placeholder={chatState === "default" ? "안수에 대해 무엇이든 물어보세요 :)" : "메세지를 입력하세요..."}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AiChat
