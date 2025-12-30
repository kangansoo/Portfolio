import { forwardRef } from "react"

const Exprience = forwardRef<HTMLElement, any>((_, ref) => {
  const expData = [
    {
      organization: "삼성 청년 SW 아카데미",
      period: "2024.07 ~ 2025.06",
      achievements: [
        { title: "2학기 공통(첫 번째) 프로젝트 우수상", description: "페어프로그래밍을 위한 웹 IDE 및 관리 시스템" },
        { title: "2학기 자율(세 번째) 프로젝트 우수상", description: "소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스" },
      ],
    },
    {
      organization: "LG헬로비전 DX DATA SCHOOL",
      period: "2023.06 ~ 2023.12",
      achievements: [{ title: "최종 프로젝트 대상", description: "프롬프트 엔지니어링을 활용한 개인화 맞춤형 VOD 추천 서비스" }],
    },
  ]

  return (
    <section ref={ref} className="w-full pt-10 pb-20 flex justify-center items-center select-none" aria-labelledby="exp-title">
      <div className="w-[60%] flex flex-col justify-center">
        <h2 id="exp-title" className="font-nanumsquare text-2xl font-bold text-font-color">
          Experience
        </h2>
        <ol className="w-full flex flex-col font-nexon text-font-color/80 mt-5 gap-8">
          {expData.map((exp, index) => (
            <li key={index}>
              <article>
                <header className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-lg text-font-color">{exp.organization}</h3>
                  <time className="text-sm opacity-90">{exp.period}</time>
                </header>

                <ul className="ml-5 flex flex-col gap-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="list-disc marker:text-main-accent">
                      <strong className="block text-sm font-semibold">{item.title}</strong>
                      <p className="text-sm mt-1">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
})

Exprience.displayName = "Exprience"
export default Exprience
