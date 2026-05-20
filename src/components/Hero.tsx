import { createTypeStream } from "hangul-typing-animation";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  showLanding: boolean;
}

const Hero = ({ showLanding }: HeroProps) => {
  const typingRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const fullText = "사용자가 체감하는 문제를 기술로 해결하는 개발자입니다.";

  useEffect(() => {
    if (showLanding) return;
    if (animationStarted) return;

    const typeStream = createTypeStream({
      perChar: 40,
      perHangul: 120,
    });

    const runAnimation = async () => {
      setAnimationStarted(true);
      if (typingRef.current) typingRef.current.textContent = "";

      await typeStream(fullText, (typing) => {
        if (typingRef.current) {
          typingRef.current.textContent = typing;
        }
      });
    };

    runAnimation();
  }, [showLanding, animationStarted]);

  return (
    <section
      className="w-full py-12 md:py-30 flex flex-col justify-center items-center text-font-color"
      aria-label="자기소개 섹션"
    >
      <div className="w-[92%] md:w-[60%] flex flex-col items-start">
        {/* FRONTEND DEVELOPER 라벨 */}
        <span className="inline-block text-xs font-semibold text-point bg-point/10 px-3 py-1 rounded-full mb-4 tracking-widest uppercase font-pretendard">
          Frontend Developer
        </span>

        {/* 인사말 — 크고 굵게 */}
        <h1 className="text-3xl md:text-4xl font-extrabold font-nanumsquare text-left mb-5">
          안녕하세요, 강안수입니다.
        </h1>

        {/* 타이핑 애니메이션 — 작고 연하게 */}
        <div className="relative text-left w-full">
          {/* 레이아웃 시프트 방지용 공간 */}
          <div
            className="invisible select-none text-sm md:text-sm leading-relaxed font-nexon"
            aria-hidden="true"
          >
            {fullText}
          </div>
          {/* 실제 보일 애니메이션을 위에서 정의한 공간에 겹쳐서 렌더링 */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start">
            <div
              ref={typingRef}
              className={`inline-block text-sm md:text-base typewriter-cursor leading-relaxed font-nexon text-font-color/60 ${!animationStarted ? "invisible" : "visible"}`}
              aria-live="polite"
              aria-atomic="true"
            >
              {!animationStarted && fullText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
