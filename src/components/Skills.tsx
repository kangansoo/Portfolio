import { forwardRef } from "react"

const Skills = forwardRef<HTMLElement, any>((_, ref) => {
  const skillCategories = [
    {
      title: "Strong",
      items: "JavaScript / React.js / Next.js / Redux / React-Query / TypeScript / HTML5 / CSS / Tailwindcss / Styled Components / Java / WebSocket / i18n",
    },
    {
      title: "Experienced",
      items: "Vue.js / Spring / Python / scikit-learn / Numpy / Pandas / MySQL",
    },
    {
      title: "Etc",
      items: "Figma / Git / Jira / AWS",
    },
  ]

  return (
    <section ref={ref} className="w-full py-10 flex justify-center items-center select-none" aria-labelledby="skills-title">
      <div className="w-[60%] flex flex-col justify-center">
        <h2 id="skills-title" className="font-nanumsquare text-2xl font-bold text-font-color">
          Skills
        </h2>
        <dl className="w-full flex flex-col font-nexon text-font-color/80">
          {skillCategories.map((category) => (
            <div key={category.title} className="mt-6">
              <dt className="font-semibold mb-2 uppercase">{category.title}</dt>
              <dd className="text-sm leading-relaxed tracking-wide">{category.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
})

Skills.displayName = "Skills" // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이

export default Skills
