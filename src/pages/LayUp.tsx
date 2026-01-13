import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"
import type { FeatureProps, ProjectInfoProps, RoleProps } from "@/types"

const LayUp = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo: ProjectInfoProps[] = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.04 ~ 2025.05 (6주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 3명, FE 3명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "Next.js, React, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, Cursor AI" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 자율 프로젝트 우수상" },
  ]

  // 2. 주요 기능 데이터
  const features: FeatureProps[] = [
    { title: "Auto Posting", desc: "템플릿과 주기를 설정해두면 등록된 사업체 정보를 기반으로 AI가 글을 생성해서 자동으로 포스팅" },
    { title: "Manual Posting", desc: "주제만 작성하면 사업체 정보를 기반으로 AI가 글을 생성하고 포스팅" },
    { title: "이미지 드라이브", desc: "모바일과 연동되어 촬영한 이미지를 저장하고 그룹화 가능" },
    { title: "템플릿", desc: "글 흐름, 글 스타일, 이미지 그룹 등을 기반으로 템플릿 생성" },
    { title: "사업체 정보 관리", desc: "등록한 사업체의 정보 관리 기능" },
    { title: "모바일 메뉴 관리", desc: "등록된 사업체(카페, 식당 등)의 메뉴 관리 기능" },
    { title: "리포트", desc: "주 1회 마케팅 성과 리포트, 월 1회 트렌드 리서치 리포트 제공" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles: RoleProps[] = [
    {
      title: "템플릿 관리",
      img: "template.gif",
      isMobile: false,
      desc: "자동 포스팅에 사용될 글의 구조와 스타일을 단계별로 정의하고 관리하는 기능",
      problem: "세부 설정 항목이 많아 발생하는 사용자의 인지 과부하와 다단계 입력 과정에서의 데이터 유실 및 AI 데이터 생성 시의 체감 로딩 지연",
      solution: [
        "**Framer-motion 기반 Step UI**: 한 번에 나열하기엔 너무 많은 설정 항목을 4단계로 분산 설계하여 사용자의 인지 부담을 줄이고 제작 몰입도 향상",
        "**Redux-Toolkit 전역 관리**: 단계를 나누면서 발생한 데이터 파편화 문제를 해결하기 위해 전역 상태 저장소를 구축, 단계 이동 시에도 데이터 일관성 및 무결성 유지",
        "**Streaming 도입**: AI 데이터 생성 시 전체 응답을 기다리지 않고 생성되는 대로 화면에 뿌려주는 스트리밍 처리를 통해 사용자의 지루함과 체감 대기 시간 해소",
        "**SSR/CSR 분리**: 정적 콘텐츠는 서버에서 선렌더링하고 편집기 로직은 클라이언트에서 필요한 시점에 로드하여 초기 로딩 속도 최적화",
        "**React-Query 캐싱**: 템플릿 생성/수정 시 반복되는 API 호출을 캐싱하여 서버 부하를 방지하고 응답 속도 및 안정성 향상",
      ],
      result: "복잡한 설정 과정을 직관적인 단계별 프로세스로 전환하고 전역 상태 관리를 통한 안정적인 데이터 정합성 확보 및 체감 성능 최적화 달성",
    },
    {
      title: "이미지 드라이브 (Web)",
      img: "drive.gif",
      isMobile: false,
      desc: "SNS 포스팅용 이미지를 그룹화하고 태그 기반으로 관리하는 이미지 드라이브",
      problem: "이미지 리스트 로딩 시 발생하는 네트워크 병목 현상과 대규모 이미지 관리의 어려움, AI의 자동 이미지 선택 프로세스에서 발생하는 업로드 결과의 불확실성",
      solution: [
        "**React-Query 캐싱**: 캐싱 전략과 무한 스크롤을 조합하여 대규모 자산의 중복 호출을 방지",
        "**스켈레톤 UI**: 콘텐츠 로드 전 레이아웃을 미리 확보하여 데이터 로딩 중 시각적 레이아웃 안정성 및 체감 대기 시간 개선",
        "**태그 기반 예측 가능성 향상**: 이미지 업로드 시 설명 태그를 부여하여 AI의 자동 선택 기준을 명확히 함으로써 사용자가 포스팅 결과를 사전에 예측하고 제어할 수 있는 구조 설계",
        "**SSR/CSR 분리**: 서비스의 초기 성능 및 SEO 최적화",
      ],
      result: "이미지 로딩 성능 최적화를 통해 리소스 탐색 속도를 개선하고 시각적으로 안정적인 UX 제공",
    },
    {
      title: "이미지 드라이브 (Mobile/PWA)",
      img: "mobile_drive.gif",
      isMobile: true,
      desc: "모바일 환경에서 촬영한 이미지를 실시간으로 업로드하고 관리할 수 있는 이미지 드라이브",
      problem: "접근성이 낮은 PC 웹 환경의 한계",
      solution: [
        "**PWA 도입**: 별도의 앱 설치 없이도 홈 화면 추가 및 앱과 유사한 인터페이스를 제공하여 현장 촬영 이미지의 접근성 및 업로드 편의성 극대화",
        "**React-Query**: 불안정한 모바일 네트워크 환경에서도 이미지 업로드/수정/삭제 작업이 안정적으로 반영되도록 상태 동기화",
        "**스켈레톤 UI**: 콘텐츠 로드 전 레이아웃을 미리 확보하여 데이터 로딩 중 시각적 레이아웃 안정성 및 체감 대기 시간 개선",
      ],
      result: "기기 제한 없는 이미지 관리 환경을 구축하여 마케팅 리소스의 관리 효율 달성",
    },
    {
      title: "메뉴 관리 (Mobile/PWA)",
      img: "mobile_menu.gif",
      isMobile: true,
      desc: "식당, 카페 등 오프라인 매장의 메뉴 정보를 실시간으로 수정하고 동기화하는 관리 기능",
      problem: "접근성이 낮은 PC 웹 환경의 한계",
      solution: ["**PWA 기반 실시간 관리**: 별도의 스토어 설치 없이 홈 화면 앱을 통해 현장에서 메뉴 품절이나 가격 변동 사항을 즉각적으로 처리할 수 있는 높은 접근성 확보"],
      result: "모바일 최적화 인터페이스와 실시간 데이터 동기화를 통해 오프라인 사업체의 운영 효율성 향상",
    },
  ]

  // 4. 성과 데이터
  const achievements: string[] = [
    "**사용자 체감 성능 극대화**: Next.js의 dynamic과 코드 스플리팅을 적용하여 로딩 속도를 최적화하고 AI 데이터 생성 시 실시간 피드백 제공",
    "**체계적인 상태 관리**: Redux-Toolkit과 React-Query를 통해 관심사를 분리하고 전역 상태 및 데이터 통신을 효율화하여 안정적인 경험 구현",
    "**모바일 접근성 강화**: PWA 도입으로 PC 웹의 한계를 극복하고 현장에서 즉시 활용 가능한 실시간 관리 환경 구축",
    "**몰입감 있는 UX 설계**: 스켈레톤 UI와 Framer-motion을 활용하여 시각적 안정성 확보 및 단계별 프로세스의 인지 부하 감소",
    "**AI 예측성 강화**: 이미지 태그 시스템을 통해 AI 선택의 불확실성을 해결하고 사용자 예측 가능성 향상",
    "**개발 효율성 극대화**: Cursor AI 및 최신 스택을 활용하여 유지보수성이 높은 코드 품질 유지 및 생산성 향상",
    "**코드 품질 향상**: 관심사를 명확히 분리하고 복잡한 비즈니스 로직을 Custom Hooks로 캡슐화하여 코드의 재사용성과 유지보수성을 극대화",
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
            {/* <div className="flex flex-row items-center justify-between">
              <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                <FaInstagram /> <span>포스팅 결과물</span>
              </dt>
              <dd className="flex-1 text-landing-700 text-sm font-nexon">
                <button onClick={() => openLink("https://www.instagram.com/geogeum_coffee")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
                  바로 가기
                </button>
              </dd>
            </div> */}
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
        <section className="my-4" aria-labelledby="my-role">
          <h2 id="my-role" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-4 pb-2">
            맡은 역할
          </h2>

          {roles.map((role, i) => (
            <article key={i} className="mb-20">
              <h2 className="font-nanumsquare text-xl font-extrabold text-font-color mb-2">{role.title}</h2>
              <p className="text-sm text-landing-700 mb-4 font-nexon">{role.desc}</p>

              <div className={`flex flex-col gap-8 ${role.isMobile ? "items-start" : ""}`}>
                <figure className={`w-full ${role.isMobile ? "max-w-[40%]" : ""}`}>
                  <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 shadow-sm" />
                </figure>

                <div className="w-full flex flex-col gap-6 font-nexon text-sm text-font-color">
                  <div>
                    <h3 className="font-bold text-landing-600 mb-2">문제 상황</h3>
                    <p className="ml-2 border-l-2 border-gray-200 pl-3">{role.problem}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-landing-600 mb-2">해결 방법</h3>
                    <ul className="ml-5 flex flex-col gap-2">
                      {role.solution.map((sol, j) => (
                        <li key={j} className="list-disc leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: sol.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-landing-600 mb-2">결과</h3>
                    <p className="ml-2 bg-gray-50 p-3 rounded-md">{role.result}</p>
                  </div>
                </div>
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
            {achievements.map((achievement, idx) => (
              <li key={idx} className="list-disc leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <ProjectFooter id={1} />
    </div>
  )
}

export default LayUp
