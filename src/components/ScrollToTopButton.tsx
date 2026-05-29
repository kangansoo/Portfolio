import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-8 bottom-24 w-10 h-10 rounded-full bg-point text-white flex items-center justify-center shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer z-50"
      aria-label="맨 위로 이동"
    >
      <FaArrowUp size={14} />
    </button>
  )
}

export default ScrollToTopButton
