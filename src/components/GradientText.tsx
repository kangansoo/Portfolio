interface GradientTextProps {
  children: string
  className?: string
  isAnimated?: boolean
}

const GradientText = ({ children, className = "", isAnimated = false }: GradientTextProps) => {
  return (
    <div className={`relative inline-block ${className}`} data-text={children}>
      {/* 배경 텍스트 (그라디언트 테두리) */}
      <div
        className={`
          absolute top-0 left-0 
          bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 
          ${isAnimated ? "bg-[length:400%_400%] animate-pulse" : ""}
          bg-clip-text text-transparent
          [-webkit-text-stroke:3px_transparent]
          pointer-events-none
          ${isAnimated ? "[animation-duration:6s]" : ""}
        `}
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextStroke: "3px transparent",
          backgroundImage: "linear-gradient(45deg, #8b5cf6, #3b82f6, #ec4899)",
          ...(isAnimated && {
            backgroundSize: "400% 400%",
            animation: "gradientMove 6s ease infinite",
          }),
        }}
      >
        {children}
      </div>

      {/* 전경 텍스트 (실제 내용) */}
      <div className="relative z-10 text-white">{children}</div>

      {/* 애니메이션 스타일 */}
      <style>{`
        @keyframes gradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default GradientText
