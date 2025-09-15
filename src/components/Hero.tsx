import { createTypeStream, delay } from "hangul-typing-animation"
import { useEffect, useRef, useState } from "react"

interface HeroProps {
  showLanding: boolean
}

const Hero = ({ showLanding }: HeroProps) => {
  const typingRef = useRef<HTMLDivElement>(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    if (showLanding) return

    const typeStream = createTypeStream({
      perChar: 40,
      perHangul: 120,
    })

    const runAnimation = async () => {
      setAnimationStarted(true)

      await typeStream("신뢰를 기반으로 사용자에게 실질적인 가치를 더하는 개발자입니다.", (typing) => {
        if (typingRef.current) {
          typingRef.current.textContent = typing
        }
      })
    }

    runAnimation()
  }, [])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-font-color font-nexon font-normal text-xl select-none">
      <div>안녕하세요, 강안수입니다.</div>
      <div className="mt-4 relative">
        <div ref={typingRef} className={`inline-block typewriter-cursor ${!animationStarted ? "invisible" : "visible"}`}></div>
      </div>
    </div>
  )
}

export default Hero
