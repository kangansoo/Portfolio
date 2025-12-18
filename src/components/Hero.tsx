import { createTypeStream } from "hangul-typing-animation"
import { useEffect, useRef, useState } from "react"

interface HeroProps {
  showLanding: boolean
}

const Hero = ({ showLanding }: HeroProps) => {
  const typingRef = useRef<HTMLDivElement>(null)
  const [animationStarted, setAnimationStarted] = useState<boolean>(false)
  const fullText = "기술을 통해 사용자에게 더 나은 가치를 전하는 개발자입니다."

  useEffect(() => {
    if (showLanding) return
    if (animationStarted) return

    const typeStream = createTypeStream({
      perChar: 40,
      perHangul: 120,
    })

    const runAnimation = async () => {
      setAnimationStarted(true)
      if (typingRef.current) typingRef.current.textContent = ""

      await typeStream(fullText, (typing) => {
        if (typingRef.current) {
          typingRef.current.textContent = typing
        }
      })
    }

    runAnimation()
  }, [showLanding, animationStarted])

  return (
    <section 
      className="w-full h-full flex flex-col justify-center items-center text-font-color font-nexon font-normal text-xl"
      aria-label="자기소개 섹션"
    >
      <h1>안녕하세요, 강안수입니다.</h1>
      <div className="mt-4 relative">
        <div 
          ref={typingRef} 
          className={`inline-block typewriter-cursor ${!animationStarted ? "invisible" : "visible"}`}
          aria-live="polite" // 알림의 우선 순위 : polite - 용자가 현재 수행 중인 동작(다른 텍스트 읽기 등)이 끝날 때까지 기다렸다가 변화된 내용을 읽어줌
          aria-atomic="true" // 전체 읽기 : true - 변화된 전체 내용을 읽어줌, false - 변화된 부분만 읽어줌
        >
          {!animationStarted && fullText}
        </div>
      </div>
    </section>
  )
}

export default Hero
