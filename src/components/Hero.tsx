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
    <section className="w-full py-12 md:py-30 flex flex-col justify-center items-center text-font-color font-nexon font-normal" aria-label="자기소개 섹션">
      <h1 className="text-md md:text-xl">안녕하세요, 강안수입니다.</h1>
      <div className="mt-4 relative px-8 text-center">
        {/* 레이아웃 시프트 방지용 공간 */}
        <div className="invisible select-none leading-relaxed" aria-hidden="true">
          {fullText}
        </div>
        {/* 실제 보일 애니메이션을 위에서 정의한 공간에 겹쳐서 렌더링 */}
        <div className="absolute top-0 left-0 w-full h-full px-8 flex flex-col items-center">
          <div
            ref={typingRef}
            className={`inline-block text-md md:text-xl typewriter-cursor leading-relaxed ${!animationStarted ? "invisible" : "visible"}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {!animationStarted && fullText}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
