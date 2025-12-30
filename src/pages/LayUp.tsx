import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub, FaInstagram } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"

const LayUp = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.04 ~ 2025.05 (6주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 3명, FE 3명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "Next.js, React, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, Cursor AI" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 자율 프로젝트 우수상" },
  ]

  // 2. 주요 기능 데이터
  const features = [
    { title: "Auto Posting", desc: "템플릿과 주기를 설정해두면 등록된 사업체 정보를 기반으로 AI가 글을 생성해서 자동으로 포스팅" },
    { title: "Manual Posting", desc: "주제만 작성하면 사업체 정보를 기반으로 AI가 글을 생성하고 포스팅" },
    { title: "이미지 드라이브", desc: "모바일과 연동되어 촬영한 이미지를 저장하고 그룹화 가능" },
    { title: "템플릿", desc: "글 흐름, 글 스타일, 이미지 그룹 등을 기반으로 템플릿 생성" },
    { title: "사업체 정보 관리", desc: "등록한 사업체의 정보 관리 기능" },
    { title: "모바일 메뉴 관리", desc: "등록된 사업체(카페, 식당 등)의 메뉴 관리 기능" },
    { title: "리포트", desc: "주 1회 마케팅 성과 리포트, 월 1회 트렌드 리서치 리포트 제공" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles = [
    {
      title: "템플릿",
      img: "template.gif",
      isMobile: false,
      tasks: [
        "템플릿 추가/삭제/수정 기능",
        "React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보",
        "Framer-motion을 활용한 4단계 UI 설계로 몰입감 있는 UX 제공",
        "SSR/CSR 분리 및 코드 스플리팅을 적용하여 초기 로딩 속도 향상",
        "체감 속도 향상을 위한 미리보기 단계에 스트리밍 처리 도입",
        "Redux-Toolkit 기반 전역 상태 관리로 복잡한 템플릿 데이터를 안정적으로 관리",
      ],
    },
    {
      title: "이미지 드라이브",
      img: "drive.gif",
      isMobile: false,
      tasks: [
        "이미지 그룹 생성/삭제/수정 기능",
        "이미지 업로드/삭제/이동 기능",
        "이미지 그룹별 관리 및 가용 이미지 확인",
        "이미지 설명 태그 관리 기능",
        "SSR/CSR 분리 및 코드 스플리팅을 적용하여 초기 로딩 속도 향상",
        "React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보, 무한 스크롤 구현",
        "스켈레톤 UI를 도입하여 데이터 로딩 중에도 사용자에게 부드러운 UX 제공",
      ],
    },
    {
      title: "이미지 드라이브(모바일)",
      img: "mobile_drive.gif",
      isMobile: true,
      tasks: [
        "PWA 기반 설계로 접근성 향상",
        "이미지 그룹 생성/삭제/수정 기능",
        "이미지 업로드/삭제/이동 기능",
        "React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보",
        "스켈레톤 UI를 도입하여 데이터 로딩 중에도 사용자에게 부드러운 UX 제공",
      ],
    },
    {
      title: "메뉴 관리(모바일)",
      img: "mobile_menu.gif",
      isMobile: true,
      tasks: ["메뉴 추가/삭제/수정 기능", "React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보, 무한 스크롤 구현"],
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/Logo.png`} className="w-full h-full object-cover border-b border-gray-300" alt="LAY UP 로고" />
      </header>

      <main className="mt-10 max-w-[50%] w-full flex flex-col mb-20">
        {/* 프로젝트 기본 정보 */}
        <section aria-labelledby="project-title">
          <h1 id="project-title" className="font-nanumsquare text-3xl font-extrabold text-font-color uppercase">
            LAY UP
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
            {/* 외부 링크 */}
            <div className="flex flex-row items-center justify-between">
              <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                <FaGithub /> <span>Git Hub</span>
              </dt>
              <dd className="flex-1 text-landing-700 text-sm font-nexon">
                <button onClick={() => openLink("https://github.com/kangansoo/LayUp")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
                  바로 가기
                </button>
              </dd>
            </div>
            <div className="flex flex-row items-center justify-between">
              <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                <FaInstagram /> <span>포스팅 결과물</span>
              </dt>
              <dd className="flex-1 text-landing-700 text-sm font-nexon">
                <button onClick={() => openLink("https://www.instagram.com/geogeum_coffee")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
                  바로 가기
                </button>
              </dd>
            </div>
          </dl>
        </section>

        {/* 상세 내용 */}
        <section className="my-6" aria-labelledby="detail-content">
          <h2 id="detail-content" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-8 pb-2">
            상세 내용
          </h2>

          <article className="mb-12">
            <h3 className="text-lg font-extrabold text-font-color font-nanumsquare mb-3">프로젝트 소개</h3>
            <p className="text-sm font-nexon text-font-color leading-relaxed">
              입력된 사업체 정보와 템플릿을 기반으로 SNS 자동 포스팅부터 주간 성과 및 월간 트렌드 분석 리포트까지 제공하는 SNS 마케팅 자동화 서비스
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

        {/* 맡은 역할 */}
        <section className="my-6" aria-labelledby="my-role">
          <h2 id="my-role" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-8 pb-2">
            맡은 역할
          </h2>

          {roles.map((role, i) => (
            <article key={i} className="mb-16">
              <h3 className="font-nanumsquare text-lg font-extrabold text-font-color mb-4 flex items-center gap-2">{role.title}</h3>
              <div className={`flex flex-col gap-6 ${role.isMobile ? "items-start" : ""}`}>
                <figure className={`w-full ${role.isMobile ? "max-w-[50%]" : ""}`}>
                  <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 shadow-sm" />
                </figure>
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

        {/* 성과 */}
        <section className="my-6" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-4 pb-2">
            성과
          </h2>
          <ul className="ml-5 font-nexon text-sm text-font-color flex flex-col gap-4">
            <li className="list-disc">Next.js를 활용하여 CSR과 SSR을 상황에 맞게 병행함으로써 로딩 속도 최적화 및 SEO 강화</li>
            <li className="list-disc">관심사를 명확히 분리하여 코드의 가독성, 재사용성, 유지보수성 및 코드 품질 향상</li>
            <li className="list-disc">Redux-Toolkit과 React-Query를 통해 체계적인 상태 관리 및 효율적인 데이터 통신을 구현하여 안정적인 경험 제공</li>
            <li className="list-disc">스켈레톤 UI, 데이터 스트리밍 처리 등을 활용하여 몰입감 있는 UX 제공</li>
            <li className="list-disc">Cursor AI 활용을 통해 개발 효율성 극대화</li>
          </ul>
        </section>
      </main>

      <ProjectFooter id={1} />
    </div>
  )
}

export default LayUp
