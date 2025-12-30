import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"

const NewKiz = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "어린이를 위한 종합 뉴스 플랫폼" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.02 ~ 2025.04 (7주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 3명, FE 3명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, PWA" },
  ]

  // 2. 주요 기능 데이터
  const features = [
    { title: "뉴스 추천", desc: "오늘의 핫 토픽 추천 / 개인형 맞춤 추천" },
    { title: "난이도 별 뉴스", desc: "어린이가 이해하기 쉽도록 상/중/하 난이도로 뉴스를 제공" },
    { title: "뉴스 해설", desc: "생성형 AI 챗봇을 활용하여 뉴스 내 단어 해설 및 질문 답변" },
    { title: "스크랩", desc: "관심 기사 스크랩" },
    { title: "객관식 퀴즈", desc: "뉴스 내용 기반 객관식 문제" },
    { title: "실시간 OX 퀴즈 게임", desc: "오늘의 핫 토픽 기사 기반 OX 퀴즈 게임" },
    { title: "기자단", desc: "기사 작성 등을 통한 기자 활동 체험" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles = [
    {
      title: "프로젝트 설계",
      type: "text", 
      tasks: [
        "프로젝트 복잡성 관리 및 코드 모듈화와 유지보수성, 확장성 향상을 위해 FSD 아키텍처 채택",
        "사용자 접근성을 고려한 PWA 기반 설계, 반응형 웹으로 다양한 디바이스 환경 지원",
        "사용자를 고려한 색상 선정, 단순한 구조, 접근성 중심의 UI 설계 및 구현",
      ],
    },
    {
      title: "실시간 OX 퀴즈 게임",
      type: "media",
      hasVideo: true, // 비디오 포함 여부
      videoSrc: "game.mp4",
      imgSrc: "game_min_max_scailing.gif",
      tasks: [
        "재사용성과 확장성을 고려한 추상화",
        "캐릭터 스프라이트 이미지를 프리로딩하여 불필요한 렌더링 문제 해결",
        "Min-Max Scaling으로 다양한 해상도 독립성 및 좌표 일관성 유지",
        "Stomp와 Sock.js를 통한 실시간 통신 안정성과 효율성 확보",
        "캐릭터 움직임 감지, 동적 전송 주기 조절과 보간법을 적용하여 네트워크 부하를 약 60% 절감",
      ],
    },
    {
      title: "카테고리/세부 카테고리 페이지",
      type: "media",
      isMobileSize: true, 
      imgSrc: "category.gif",
      tasks: ["초기 단순 카테고리를 페이지 단위로 개선하여 세부 카테고리 페이지까지 확장"],
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/main.png`} className="w-full h-full object-cover border-b border-gray-300" alt="NewKiz 프로젝트 커버" />
      </header>

      <main className="mt-10 max-w-[50%] w-full flex flex-col mb-20">
        {/* 프로젝트 타이틀 및 기본 정보 */}
        <section aria-labelledby="project-title">
          <h1 id="project-title" className="font-nanumsquare text-3xl font-extrabold text-font-color">
            NewKiz
          </h1>

          <dl className="my-5 flex flex-col gap-3">
            {projectInfo.map((info, idx) => (
              <div key={idx} className="flex flex-row items-center justify-between">
                <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                  {info.icon}
                  <span>{info.label}</span>
                </dt>
                <dd className="flex-1 text-landing-700 text-sm font-nexon">{info.content}</dd>
              </div>
            ))}
            <div className="flex flex-row items-center justify-between">
              <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                <FaGithub /> <span>Git Hub</span>
              </dt>
              <dd className="flex-1 text-landing-700 text-sm font-nexon">
                <button onClick={() => openLink("https://github.com/Aren-t-you-eating/newkiz_readme")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
                  바로 가기
                </button>
              </dd>
            </div>
          </dl>
        </section>

        {/* 상세 내용 섹션 */}
        <section className="my-6" aria-labelledby="detail-content">
          <h2 id="detail-content" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-8 pb-2">
            상세 내용
          </h2>

          <article className="mb-12">
            <h3 className="text-lg font-extrabold text-font-color font-nanumsquare mb-3">프로젝트 소개</h3>
            <p className="text-sm font-nexon text-font-color leading-relaxed">
              다양한 난이도의 뉴스 콘텐츠와 퀴즈, 게임 요소, AI 요약 기능을 통해 아이들이 쉽고 재미있게 뉴스에 접근할 수 있도록 돕고, 문해력 향상과 사회적 관심을 자연스럽게 이끌어내는 어린이 뉴스 통합
              플랫폼
            </p>
          </article>

          <article>
            <h3 className="text-lg font-extrabold text-font-color font-nanumsquare mb-4">주요 기능</h3>
            <ul className="grid grid-cols-1 gap-5 ml-5 text-font-color font-nexon text-sm">
              {features.map((feature, i) => (
                <li key={i} className="list-disc">
                  <strong className="text-font-color">{feature.title}</strong>
                  <p className="mt-1 text-landing-700">{feature.desc}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* 맡은 역할 섹션 */}
        <section className="my-6" aria-labelledby="my-role">
          <h2 id="my-role" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-8 pb-2">
            맡은 역할
          </h2>

          {roles.map((role, i) => (
            <article key={i} className="mb-16">
              <h3 className="font-nanumsquare text-lg font-extrabold text-font-color mb-4">{role.title}</h3>

              <div className={`flex flex-col gap-6 ${role.isMobileSize ? "items-start" : ""}`}>
                {role.type === "media" && (
                  <div className="flex flex-row gap-3 w-full">
                    {role.hasVideo && (
                      <video controls autoPlay muted loop className="flex-1 w-1/3 rounded-sm border border-gray-200">
                        <source src={`${url}/${role.videoSrc}`} type="video/mp4" />
                      </video>
                    )}
                    <figure className={`${role.hasVideo ? "flex-[2] w-2/3" : role.isMobileSize ? "w-1/2" : "w-full"}`}>
                      <img src={`${url}/${role.imgSrc}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 shadow-sm" />
                    </figure>
                  </div>
                )}

                <ul className="ml-5 font-nexon text-sm text-font-color flex flex-col gap-2.5">
                  {role.tasks.map((task, j) => (
                    <li key={j} className="list-disc leading-relaxed">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* 성과 섹션 */}
        <section className="my-6" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-4 pb-2">
            성과
          </h2>
          <ul className="ml-5 font-nexon text-sm text-font-color flex flex-col gap-4">
            <li className="list-disc">프로젝트의 전반적인 설계부터 개발 환경 세팅, 기술 스택 선정, 아키텍처 구성까지 주도하며 개발 과정 리드</li>
            <li className="list-disc">FSD 아키텍처를 적용하여 코드의 모듈화와 유지보수성 향상</li>
            <li className="list-disc">사용자 접근성을 고려한 UI/UX 설계 및 구현을 통해 사용자 친화적 개발</li>
            <li className="list-disc">게임 개발 과정에서 발생한 다양한 문제 상황(실시간 동기화, 예외 처리 등)을 바텀업 방식으로 해결하며 분석적 사고력과 문제 해결 능력 향상</li>
            <li className="list-disc">실시간 통신 및 네트워크 부하 절감을 통해 게임의 안정성 향상</li>
          </ul>
        </section>
      </main>

      <ProjectFooter id={2} />
    </div>
  )
}

export default NewKiz
