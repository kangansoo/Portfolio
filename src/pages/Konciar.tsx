import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"

const Konciar = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "한국 방문 외국인을 위한 로컬 예약 및 대리 문의 서비스" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.12 ~ 진행 중" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "1인 개발" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발, UX 기획" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Tailwind CSS, i18next, EmailJS" },
  ]

  // 2. 주요 기능 데이터
  const features = [
    { title: "Multilingual Support", desc: "영어, 중국어, 일본어 지원을 통해 외국인 여행자의 언어 장벽 해결" },
    { title: "Category-specific Request", desc: "식당 예약, 병원 문의, 배달 주문 등 목적에 맞는 정형화된 설문 폼 제공" },
    { title: "Direct Email Bridge", desc: "백엔드 없이 설문 데이터를 운영자에게 즉시 메일로 전송하여 실시간 대응 지원" },
    { title: "Mobile Optimized UI", desc: "여행지에서 즉시 사용할 수 있도록 모바일 환경에 최적화된 반응형 디자인" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles = [
    {
      title: "다국어 지원 및 UX 설계",
      img: "languageChange.gif",
      isMobile: true,
      tasks: ["i18next 라이브러리를 활용하여 영/중/일 3개 국어 실시간 전환 기능 구현"],
    },
    {
      title: "카테고리별 요청 프로세스",
      img: "requestType.png",
      isMobile: true,
      tasks: [
        "식당, 병원, 여행지 등 카테고리에 따라 필수 정보를 수집하는 동적 폼 구현",
        "사용자 이탈 방지를 위한 단계별 입력(Step-by-step) UI 디자인",
        "운영자가 대리 업무를 처리하기 쉽도록 데이터 입력 필드 최적화",
      ],
    },
    {
      title: "메일 기반 데이터 전송 시스템",
      img: "sendRequest.gif",
      isMobile: true,
      tasks: [
        "EmailJS를 연동하여 백엔드 서버 없이 사용자 요청 사항을 운영자에게 실시간 전송",
        "누락되는 정보가 없도록 클라이언트 측 유효성 검사(Validation) 강화",
        "전송 성공/실패 여부에 따른 명확한 피드백 메시지 제공",
      ],
    },
    {
      title: "운영 효율화를 위한 데이터 정형화",
      img: "requestEmail.png",
      isMobile: false,
      tasks: [
        "사람이 직접 전화를 거는 운영 방식을 고려하여 이메일 본문 템플릿 설계",
        "데이터를 가독성 있게 구조화하여 운영자의 업무 처리 시간 단축",
        "실제 운영 피드백을 수집하여 설문 문항 및 구조를 지속적으로 업데이트",
      ],
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/konciarBackground.png`} className="w-full h-full object-cover border-b border-gray-300" alt="K-Buddy 배경" />
      </header>

      <main className="mt-10 max-w-[50%] w-full flex flex-col mb-20">
        {/* 프로젝트 기본 정보 */}
        <section aria-labelledby="project-title">
          <h1 id="project-title" className="font-nanumsquare text-3xl font-extrabold text-font-color">
            Konciar
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
                <button onClick={() => openLink("https://github.com/Konciar/konciar")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
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
              한국의 복잡한 본인 인증과 언어 장벽으로 인해 로컬 서비스를 이용하지 못하는 해외 여행객들을 위한 '대리 컨시어지 서비스'입니다. 기술적 화려함보다는{" "}
              <strong>시장 수요의 실질적인 검증(MVP)</strong>에 집중하여, 백엔드 없이도 즉시 운영 가능한 프로세스를 구축했습니다.
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
          <h2 id="my-role" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-8 pb-2 border-b">
            맡은 역할
          </h2>

          {roles.map((role, i) => (
            <article key={i} className="mb-16">
              <h3 className="font-nanumsquare text-lg font-extrabold text-font-color mb-4 flex items-center gap-2">{role.title}</h3>
              <div className={`flex flex-col gap-6 ${role.isMobile ? "items-start" : ""}`}>
                <figure className={`w-full ${role.isMobile ? "max-w-[40%]" : ""}`}>
                  <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-lg border border-gray-200 shadow-md" />
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

        {/* 성과 및 유지보수 */}
        <section className="my-6" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="font-nanumsquare text-2xl font-extrabold text-font-color mb-4 pb-2 border-b">
            성과 및 유지보수
          </h2>
          <ul className="ml-5 font-nexon text-sm text-font-color flex flex-col gap-4">
            <li className="list-disc">
              <strong>가설 검증 가속화:</strong> 백엔드 개발 이전에 MVP를 배포하여 실제 외국인 요청 데이터 00건 수집 및 비즈니스 실효성 확인
            </li>
            <li className="list-disc">
              <strong>지속적 UX 최적화:</strong> 운영 중 발생하는 정보 누락 사례를 방지하기 위해 폼 필드를 3차례 리팩토링하여 운영 업무 효율 개선
            </li>
            <li className="list-disc">
              <strong>다국어 확장성 확보:</strong> 코드 내 하드코딩된 텍스트를 제거하고 i18n 구조를 도입하여 신규 언어 추가가 용이하도록 설계
            </li>
            <li className="list-disc">
              <strong>미래 고도화 준비:</strong> 현재 수집된 정형 데이터를 기반으로 향후 AI TTS 연동 및 예약 플랫폼 자동 API 연결을 위한 데이터 모델링 완료
            </li>
          </ul>
        </section>
      </main>

      <ProjectFooter id={2} />
    </div>
  )
}

export default Konciar
