import { useEffect, useRef } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import ProjectFooter from "@/components/ProjectFooter"
import type { ProjectDetailData, RoleProps } from "@/types"
import { layupData } from "@/data/projectDetails/layup"
import { newkizData } from "@/data/projectDetails/newkiz"
import { padingData } from "@/data/projectDetails/pading"
import { konciarData } from "@/data/projectDetails/konciar"

// id → 데이터 매핑. 새 프로젝트 추가 시 이 객체에만 등록한다.
const dataMap: Record<string, ProjectDetailData> = {
  layup: layupData,
  newkiz: newkizData,
  pading: padingData,
  konciar: konciarData,
}

// **...** 마크다운 볼드를 <strong>으로 변환
const renderBold = (text: string) => text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

// 해결 방법용: 볼드 + 첫 ": " 뒤에 줄바꿈 삽입 (LayUp/NewKiz/Pading/Konciar 공통 패턴)
const renderSolution = (text: string) => renderBold(text).replace(/: /, ": <br />")

const ProjectDetail = () => {
  const url = import.meta.env.VITE_S3_URL
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const data = id ? dataMap[id] : undefined

  // 유효하지 않은 id면 홈으로 리다이렉트
  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true })
    }
  }, [data, navigate])

  // 스크롤 앵커: 자기소개에서 넘어와 특정 역할 섹션으로 이동
  const anchorRef = useRef<HTMLElement>(null)
  const scrollAnchor = data?.scrollAnchor

  useEffect(() => {
    if (!scrollAnchor) return
    if (location.state?.scrollTo === scrollAnchor.stateKey && anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState({}, document.title)
    }
  }, [location, scrollAnchor])

  if (!data) return null

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  const uppercase = data.uppercaseTitle ?? true
  const rootClass = `w-full min-h-screen flex flex-col items-center bg-main-bg${data.darkBgOverlay ? " dark:bg-black/10" : ""}`
  const titleClass = `font-nanumsquare text-3xl font-extrabold text-font-title${uppercase ? " uppercase" : ""}`

  // 역할별 미디어 영역(비디오/다중 이미지/단일 이미지) 렌더링
  const renderRoleMedia = (role: RoleProps) => {
    // 1) 비디오 + 이미지 사이드 바이 사이드
    if (role.hasVideo) {
      return (
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <div className="relative flex-1 w-full md:w-1/3">
            <video controls autoPlay muted loop className="w-full rounded-sm border border-gray-200 dark:border-gray-900">
              <source src={`${url}/${role.videoSrc}`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
          </div>
          {role.img && (
            <figure className="relative flex-[2] w-full md:w-2/3">
              <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 dark:border-gray-900 shadow-sm" />
              <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
            </figure>
          )}
        </div>
      )
    }

    // 2) 다중 이미지 (행/열 레이아웃)
    if (role.isMultiImg && role.imgs) {
      return (
        <div className={`flex gap-3 w-full ${role.isCol ? "flex-col" : role.isRow ? "flex-row" : "flex-col md:flex-row"}`}>
          {role.imgs.map((img, idx) => (
            <div key={idx} className={`relative ${role.isCol ? "w-full" : idx === 1 ? "w-1/5" : "flex-1"}`}>
              <img
                src={`${url}/${img}`}
                className="w-full rounded-sm border border-gray-200 dark:border-gray-900 shadow-sm"
                alt={`${role.title} 시연 ${idx + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>
      )
    }

    // 3) 단일 이미지 (모바일 프레임 사이즈 옵션)
    if (role.img) {
      return (
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <figure className={`relative w-full ${role.isMobile ? "max-w-[70%] md:max-w-[40%]" : ""}`}>
            <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 dark:border-gray-900 shadow-sm" />
            <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
          </figure>
        </div>
      )
    }

    return null
  }

  return (
    <div className={rootClass}>
      <header className="relative w-full h-50 overflow-hidden">
        <img src={`${url}${data.headerImage}`} className="w-full h-full object-cover border-b border-gray-300 dark:border-gray-900" alt={data.headerAlt} />
        <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
      </header>

      <main className="mt-10 w-[92%] md:max-w-[80%] lg:max-w-[50%] flex flex-col mb-20">
        {/* 프로젝트 기본 정보 */}
        <section aria-labelledby="project-title">
          <h1 id="project-title" className={titleClass}>
            {data.title}
          </h1>

          <dl className="my-5 flex flex-col gap-3">
            {data.projectInfo.map((info, idx) => (
              <div key={idx} className="flex flex-row items-center justify-between">
                <dt className="flex flex-row items-center w-28 md:w-32 lg:w-40 gap-2 text-font-sub text-sm font-nexon">
                  {info.icon}
                  <span>{info.label}</span>
                </dt>
                <dd className="flex-1 text-font-body text-sm font-nexon">
                  {info.link ? (
                    <button onClick={() => openLink(info.link!)} className="underline underline-offset-4 hover:text-point cursor-pointer transition-colors">
                      {info.content}
                    </button>
                  ) : (
                    info.content
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 상세 내용 */}
        <section className="my-6" aria-labelledby="detail-content">
          <h2 id="detail-content" className="font-nanumsquare text-2xl font-extrabold text-font-title mb-8 pb-2">
            상세 내용
          </h2>

          <article className="mb-12">
            <h3 className="text-lg font-extrabold text-font-title font-nanumsquare mb-3">프로젝트 소개</h3>
            <p className="text-sm font-nexon text-font-body leading-relaxed whitespace-pre-line">{data.intro}</p>
          </article>

          <article>
            <h3 className="text-lg font-extrabold text-font-title font-nanumsquare mb-4">주요 기능</h3>
            <ul className="grid grid-cols-1 gap-5 ml-5 text-font-body font-nexon text-sm">
              {data.features.map((feature, i) => (
                <li key={i} className="list-disc">
                  <strong className="text-font-title">{feature.title}</strong>
                  <p className="mt-1 text-font-body">{feature.desc}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* 맡은 역할 */}
        <section className="my-4" aria-labelledby="my-role">
          <h2 id="my-role" className="font-nanumsquare text-2xl font-extrabold text-font-title mb-4 pb-2">
            맡은 역할
          </h2>

          {data.roles.map((role, i) => {
            const isAnchor = scrollAnchor?.roleTitle === role.title
            return (
              <article key={i} className={`mb-20 ${isAnchor ? "scroll-mt-8" : ""}`} ref={isAnchor ? anchorRef : null}>
                <h2 className="font-nanumsquare text-xl font-extrabold text-font-title mb-2">{role.title}</h2>
                <p className="text-sm text-font-body mb-4 font-nexon">{role.desc}</p>

                <div className={`flex flex-col gap-8 ${role.isMobile ? "items-start" : ""}`}>
                  {renderRoleMedia(role)}

                  <div className="w-full flex flex-col gap-6 font-nexon text-sm text-font-body">
                    <div>
                      <h3 className="font-bold text-font-title mb-2">문제 상황</h3>
                      <ul className="ml-5 flex flex-col gap-2 text-font-body">
                        {(Array.isArray(role.problem) ? role.problem : [role.problem]).map((prob, j) => (
                          <li key={j} className="list-disc leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: renderBold(prob) }} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-font-title mb-2">해결 방법</h3>
                      <ul className="ml-5 flex flex-col gap-2 text-font-body">
                        {role.solution.map((sol, j) => (
                          <li key={j} className="list-disc leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: renderSolution(sol) }} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-font-title mb-2">결과</h3>
                      <ul className="ml-5 flex flex-col gap-2 text-font-body">
                        {(Array.isArray(role.result) ? role.result : [role.result]).map((res, j) => (
                          <li key={j} className="list-disc leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: renderBold(res) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>

        {/* 성과 */}
        <section className="my-6" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="font-nanumsquare text-2xl font-extrabold text-font-title mb-4 pb-2">
            성과
          </h2>
          <ul className="ml-5 font-nexon text-sm text-font-body flex flex-col gap-4">
            {data.achievements.map((achievement, idx) => (
              <li key={idx} className="list-disc leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: renderBold(achievement) }} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <ProjectFooter id={data.footerId} />
    </div>
  )
}

export default ProjectDetail
