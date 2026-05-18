import { useRef, useEffect } from "react"
import { IoSend } from "react-icons/io5"
import { LuChevronUp } from "react-icons/lu"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: (text: string) => void
  isLoading: boolean
  isExpanded?: boolean
  showExpand?: boolean
  onExpand?: () => void
  placeholder?: string
}

const sendActiveStyle = {
  background: "linear-gradient(135deg, #4875eb 0%, #ae86ff 100%)",
}

const sendInactiveStyle = {
  background: "rgba(180, 185, 210, 0.45)",
}

// 확장 상태 전용 입력 박스 글래스모피즘
const inputBoxStyle = {
  background: "rgba(190, 200, 225, 0.22)",
  backdropFilter: "blur(10px) saturate(160%)",
  WebkitBackdropFilter: "blur(10px) saturate(160%)",
  border: "1px solid rgba(255, 255, 255, 0.45)",
  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 2px 10px rgba(0, 0, 0, 0.05)",
}

const ChatInput = ({
  value,
  onChange,
  onSend,
  isLoading,
  isExpanded = false,
  showExpand = false,
  onExpand,
  placeholder = "메세지를 입력하세요...",
}: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, 108)}px`
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSend = () => {
    if (!value.trim() || isLoading) return
    onSend(value)
  }

  const canSend = value.trim().length > 0 && !isLoading

  const inputRow = (
    <div className="flex items-center gap-2.5">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        disabled={isLoading}
        className="flex-1 resize-none bg-transparent text-sm text-gray-900 placeholder-gray-600 focus:outline-none leading-6 font-pretendard"
        style={{ maxHeight: "108px" }}
        aria-label="메시지 입력"
      />
      {showExpand && (
        <button
          onClick={onExpand}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl transition-colors duration-200 hover:bg-white/40 cursor-pointer"
          aria-label="채팅 최대화"
        >
          <LuChevronUp className="text-gray-400 text-base" />
        </button>
      )}
      <button
        onClick={handleSend}
        disabled={!canSend}
        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
        style={canSend ? sendActiveStyle : sendInactiveStyle}
        aria-label="메시지 전송"
      >
        <IoSend className="text-white text-sm" />
      </button>
    </div>
  )

  if (isExpanded) {
    return (
      <div className="flex flex-col px-4 pb-4 pt-2 flex-shrink-0">
        <div className="rounded-2xl px-4 py-3" style={inputBoxStyle}>
          {inputRow}
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center font-pretendard select-none">
          Enter로 전송 &middot; Shift+Enter로 줄바꿈
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col px-5 py-4 flex-shrink-0">
      {inputRow}
    </div>
  )
}

export default ChatInput
