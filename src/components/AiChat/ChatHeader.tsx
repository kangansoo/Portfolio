import { HiMinus } from "react-icons/hi"

interface ChatHeaderProps {
  onMinimize: () => void
}

const ChatHeader = ({ onMinimize }: ChatHeaderProps) => {
  return (
    <div className="flex justify-end px-4 pt-3 pb-1 flex-shrink-0">
      <button
        onClick={onMinimize}
        className="flex items-center justify-center w-7 h-7 rounded-lg transition-colors duration-200 hover:bg-white/40 cursor-pointer"
        aria-label="채팅 최소화"
      >
        <HiMinus className="text-gray-500 text-lg" />
      </button>
    </div>
  )
}

export default ChatHeader
