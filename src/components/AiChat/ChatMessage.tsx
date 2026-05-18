import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { ChatMessage as ChatMessageType } from "@/types"

interface ChatMessageProps {
  message: ChatMessageType
}


const aiBubbleStyle = {
  background: "rgba(220, 230, 255, 0.35)",
  border: "1px solid rgba(139, 170, 255, 0.25)",
}

const userBubbleStyle = {
  background: "linear-gradient(135deg, #3560d4 0%, #5e7ee8 100%)",
}

// 마크다운 요소별 스타일
const markdownComponents: React.ComponentProps<typeof ReactMarkdown>["components"] = {
  p: ({ children }) => (
    <p className="leading-relaxed mb-2 last:mb-0 font-pretendard">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-2 last:mb-0 space-y-1 font-pretendard">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-2 last:mb-0 space-y-1 font-pretendard">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-")
    if (isBlock) {
      return (
        <code className="block bg-white/50 rounded-lg px-3 py-2 my-2 text-xs font-mono text-gray-800 overflow-x-auto">
          {children}
        </code>
      )
    }
    return (
      <code className="bg-white/50 rounded px-1.5 py-0.5 text-xs font-mono text-gray-800">
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="overflow-x-auto">{children}</pre>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-blue-300 pl-3 my-2 text-gray-600 italic">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => <h1 className="text-base font-bold mb-2 font-pretendard">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-bold mb-1.5 font-pretendard">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold mb-1 font-pretendard">{children}</h3>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#4875eb] underline underline-offset-2 hover:text-[#ae86ff] transition-colors">
      {children}
    </a>
  ),
  hr: () => <hr className="border-blue-200/50 my-3" />,
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user"

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[78%] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white" style={userBubbleStyle}>
          <p className="leading-relaxed whitespace-pre-wrap font-pretendard">{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-2.5">
      <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
        <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover opacity-100" />
      </div>
      <div className="max-w-[78%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-900" style={aiBubbleStyle}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ChatMessage
