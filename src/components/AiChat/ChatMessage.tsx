import { lazy, Suspense } from "react"
import type { Components } from "react-markdown"
import type { ChatMessage as ChatMessageType } from "@/types"

interface ChatMessageProps {
  message: ChatMessageType
}

const userBubbleStyle = {
  background: "linear-gradient(135deg, rgba(84, 122, 227, 1), rgba(102, 131, 227, 1))",
}

// import type only — compile-time, no runtime bundle impact
const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="leading-relaxed mb-2 last:mb-0 font-pretendard">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-font-title">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-font-sub">{children}</em>
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
        <code className="block bg-white/50 dark:bg-black/30 rounded-lg px-3 py-2 my-2 text-xs font-mono text-font-body overflow-x-auto">
          {children}
        </code>
      )
    }
    return (
      <code className="bg-white/50 dark:bg-black/30 rounded px-1.5 py-0.5 text-xs font-mono text-font-body">
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="overflow-x-auto">{children}</pre>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-blue-300 dark:border-blue-500 pl-3 my-2 text-font-caption italic">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => <h1 className="text-base font-bold mb-2 font-pretendard">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-bold mb-1.5 font-pretendard">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold mb-1 font-pretendard">{children}</h3>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-point dark:text-brand-blue underline underline-offset-2 hover:text-brand-purple dark:hover:text-brand-purple transition-colors">
      {children}
    </a>
  ),
  hr: () => <hr className="border-blue-200/50 dark:border-blue-700/50 my-3" />,
}

// react-markdown + remark-gfm lazy load — assistant 답변 수신 시에만 필요
const AssistantBubble = lazy(async () => {
  const [{ default: ReactMarkdown }, { default: remarkGfm }] = await Promise.all([
    import("react-markdown"),
    import("remark-gfm"),
  ])
  return {
    default: ({ content }: { content: string }) => (
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    ),
  }
})

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
      <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white dark:bg-gray-800">
        <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover opacity-100" />
      </div>
      <div className="ai-bubble max-w-[78%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-font-title">
        <Suspense fallback={null}>
          <AssistantBubble content={message.content} />
        </Suspense>
      </div>
    </div>
  )
}

export default ChatMessage
