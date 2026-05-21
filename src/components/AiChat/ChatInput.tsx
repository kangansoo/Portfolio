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
        className="flex-1 resize-none bg-transparent text-sm text-font-body placeholder-font-caption focus:outline-none leading-6 font-pretendard"
        style={{ maxHeight: "108px" }}
        aria-label="메시지 입력"
      />
      {showExpand && (
        <button
          onClick={onExpand}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl transition-colors duration-200 hover:bg-white/40 dark:hover:bg-white/10 cursor-pointer"
          aria-label="채팅 최대화"
        >
          <LuChevronUp className="text-font-caption text-base" />
        </button>
      )}
      <button
        onClick={handleSend}
        disabled={!canSend}
        className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200${canSend ? "" : " ai-send-inactive"}`}
        style={canSend ? sendActiveStyle : undefined}
        aria-label="메시지 전송"
      >
        <IoSend className="text-white text-sm" />
      </button>
    </div>
  )

  if (isExpanded) {
    return (
      <div className="flex flex-col px-4 pb-4 pt-2 flex-shrink-0">
        <div className="ai-input-box rounded-2xl px-4 py-3">
          {inputRow}
        </div>
        <p className="text-xs text-font-caption mt-2 text-center font-pretendard select-none">
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
