import { MdOutlineFeaturedPlayList, MdPeopleAlt, MdOutlineWebAsset } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"
import type { ProjectInfoProps, FeatureProps, RoleProps } from "@/types"

const Konciar = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo: ProjectInfoProps[] = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "한국 방문 외국인을 위한 로컬 예약 및 대리 문의 컨시어지 서비스" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.12 ~ 진행 중" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "FE 개발 1명 (기획자 협업)" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "프론트엔드 리팩토링 및 서비스 고도화 주도" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Tailwind CSS, i18next, EmailJS" },
  ]

  // 2. 주요 기능 데이터
  const features: FeatureProps[] = [
    { title: "Multilingual Support", desc: "i18next 기반 영/중/일 다국어 대응을 통한 글로벌 접근성 확보" },
    { title: "Dynamic Request Forms", desc: "식당 예약, 병원 문의 등 카테고리에 최적화된 동적 설문 시스템" },
    { title: "Email Bridge System", desc: "서버 비용 없는 MVP 운영을 위한 실시간 메일 전송 환경 구축" },
    { title: "Responsive Web Design", desc: "다양한 국가의 사용자가 휴대폰으로 즉각 사용할 수 있는 모바일 최적화 UI" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles: RoleProps[] = [
    {
      title: "레거시 리팩토링",
      img: "refactoring.png",
      isMobile: false,
      desc: "단일 HTML 구조의 프로토타입을 React 기반의 현대적 아키텍처로 전환",
      problem: ["비구조화된 초기 코드베이스로 인한 기능 확장 및 유지보수의 한계", "복잡한 상태 관리에 따른 어려움 및 느린 개발 속도", "비시멘틱 구조로 인한 검색 엔진 최적화 및 웹 접근성 부족"],
      solution: [
        "**React 도입**: UI를 모듈화하고 재사용 가능한 디자인 시스템 구축, 상태 관리를 효율화하여 개발 생산성 향상, 실제 서비스 출시에 대비하여 다양한 기능 확장에 유연한 구조 마련",
        "**시멘틱 태그 적용**: 웹 표준 준수 및 구조화된 마크업 구현",
        "**Tailwind CSS 도입**: 유틸리티 우선 스타일링을 통해 코드량을 줄이고 일관된 모바일 최적화 레이아웃 확보",
      ],
      result: [
        "리액트 생태계 및 상태 관리 효율화 기반으로 기존 대비 개발 속도 대폭 향상",
        "웹 표준 준수를 통한 SEO 향상 및 웹 접근성 강화",
        "확장 가능한 코드 구축으로 향후 기능 추가 및 유지보수 용이",
      ],
    },
    {
      title: "다국어 지원",
      img: "languageChange.gif",
      isMobile: true,
      desc: "외국인 대상 서비스의 핵심인 다국어 지원 체계",
      problem: [
        "수동으로 텍스트를 관리할 경우 언어 추가 시 코드 전체를 수정해야 하는 비효율성",
        "신규 언어 추가 및 기존 언어 수정 시 개발자 개입 최소화 필요",
        "지원 언어가 늘어날수록 메인 번들 파일 크기가 커져 초기 로딩 속도에 악영향",
      ],
      solution: [
        "**i18next & i18next-http-backend 도입**: 번역 데이터를 소스 코드와 완전히 분리하고, 필요한 언어 팩만 런타임에 비동기로 로드(Lazy Loading) 하는 구조",
        "**언어 데이터의 에셋화**: 향후 코드 수정 없이 JSON 파일 교체만으로 무중단 번역 업데이트 가능, 개발자가 아닌 기획자도 직접 번역 파일 관리 가능",
        "사용자 친화적 언어 감지: i18next-browser-languagedetector를 연동하여 브라우저 설정에 따른 자동 언어 대응 및 실시간 전환 기능 구현",
      ],
      result: [
        "번역 문구 수정 시 전체 빌드/배포 과정 생략으로 운영 효율 극대화",
        "지원 언어가 늘어나도 초기 번들 사이즈에 영향이 없는 구조 확립",
        "실시간 다국어 전환 및 브라우저 기반 자동 맞춤 언어 제공으로 사용자 경험 향상",
      ],
    },
    {
      title: "카테고리별 맞춤형 프로세스",
      img: "reservationProcess.gif",
      isMobile: true,
      desc: "원하는 문의의 카테고리(예약/포장/방문 등) 선택 시, 해당 유형에 최적화된 동적 폼 제공",
      problem: [
        "초기 고정 폼 구조로 인해 불필요한 필드가 많아 사용자 혼란 초래",
        "타이핑 위주의 필드로 사용자 피로도 증가",
        "한국 지명에 익숙하지 않은 외국인 사용자",
        "명확하지 않은 장소 입력으로 인한 운영자의 혼선 발생 가능성",
        "서비스 요청 완료 시 반복되는 피드백 요청 모달",
      ],
      solution: [
        "**카테고리별 폼 설계**: 사용자가 선택한 카테고리에 따라 최적화된 폼 구조를 동적으로 렌더링하여 불필요한 입력 필드 제거",
        "**선택형 입력 UI 제공**: 텍스트 입력 대신 선택박스, 달력 선택, 체크박스 등 선택형 UI로 사용자 경험 개선",
        "**Google Place API 연동**: 외국인 사용자의 언어 그대로 입력이 가능한 자동완성 기능 구현",
        "**로컬 스토리지 기반 피드백 제어**: 피드백 요청 팝업 노출 여부를 local storage에 저장하여 반복적인 피드백 요청 제거",
      ],
      result: [
        "불필요한 입력 필드 제거로 서비스 신청 완료까지의 소요 시간 단축",
        "Google Place API 연동을 통해 외국인 사용자의 주소 입력 정확도 향상 및 운영자의 혼선 방지",
        "반복적인 모달 제어를 통해 서비스 이용 흐름의 연속성 확보 및 사용자 피로도 감소",
        "직관적인 선택형 UI 도입으로 폼 입력 오류율 감소",
      ],
    },
    {
      title: "사용자 요청 이메일 브릿지 시스템",
      img: "emailImage.png ",
      isMobile: false,
      desc: "사용자가 요청한 정보를 운영자에게 실시간으로 전달하는 서버리스 이메일 전송 시스템",
      problem: [
        "정식 서비스 출시 전 아이디어를 검증하는 단계에서 서버 구축 및 메일 서버 유지 비용이 발생하는 것에 대한 부담",
        "빠른 시장 검증을 위해 최소한의 개발 기간 내에 안정적인 메일 전송 환경 필요",
      ],
      solution: [
        "**EmailJS 도입**: 서버 없이 이메일 전송 기능 구현",
        "**Email 템플릿 최적화**: 사용자 요청 카테고리에 따라 이메일 제목과 본문이 가변적으로 구성되는 이메일 템플릿 시스템을 설계하여 운영자의 가독성 향상",
      ],
      result: ["서버 구축 대비 개발 기간을 약 80% 단축하여 초기 시장 반응을 빠르게 확인할 수 있도록 기여", "서버리스 구조를 통해 서버 유지비 및 관리 리소스 없이 실시간 사용자 요청 수집 환경 구축"],
    },
    // {
    //   title: "피드백 기반 유저 경험 고도화 (UX)",
    //   img: "feedback_update.gif",
    //   isMobile: true,
    //   desc: "실제 운영 데이터와 사용자 피드백을 반영한 지속적인 기능 개선",
    //   problem: ["초기 폼에서 사용자들의 필수 정보(방문 인원, 알레르기 등) 입력 누락 빈번 발생", "운영자가 대리 예약을 처리할 때 가독성이 떨어지는 데이터 구조로 인해 처리 시간 지체"],
    //   solution: [
    //     "**동적 유효성 검사**: EmailJS 전송 전, 카테고리별 필수 항목에 대한 인터랙티브 밸리데이션 강화",
    //     "**운영 최적화 이메일 템플릿**: 운영자가 전화 예약 시 바로 읽을 수 있도록 이메일 본문을 '대본형 구조'로 재설계",
    //     "**입력 단계 최적화**: 피드백에 기반하여 설문 문항 순서를 재배치하고 불필요한 필드 삭제",
    //   ],
    //   result: "데이터 누락률 0% 달성 및 운영자 업무 처리 시간 평균 30% 단축",
    // },
  ]

  // 4. 성과 데이터
  const achievements: string[] = [
    "**비즈니스 검증용 MVP 구축**: 백엔드 서버 없이 프론트엔드 기술만으로 실질적인 서비스 운영 및 시장성 검증 환경 마련",
    "**리팩토링을 통한 성능 개선**: 기획자의 바이브 코딩 기반 레거시 코드를 모던 프론트엔드 구조로 개선하여 향후 확장 및 정식 출시 가능한 프로젝트 기반 확립",
    "**애자일한 피드백 반영**: 실사용자의 이용 데이터를 분석하여 폼 구조와 UI를 3차례 이상 반복 수정하며 UX 최적화 경험",
    "**글로벌 대응 역량**: 다국어 지원 라이브러리를 적용하여 글로벌 사용자를 고려한 서비스 설계 및 구현 경험 축적",
    "**웹 표준 및 접근성 강화**: 시멘틱 마크업을 준수하여 정보 구조의 완성도를 높이고 접근성 강화",
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/konciarBackground.png`} className="w-full h-full object-cover border-b border-gray-300" alt="Konciar 배경" />
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
            <div className="flex flex-row items-center justify-between">
              <dt className="flex flex-row items-center w-40 gap-2 text-landing-500 text-sm font-nexon">
                <MdOutlineWebAsset /> <span>서비스</span>
              </dt>
              <dd className="flex-1 text-landing-700 text-sm font-nexon">
                <button onClick={() => openLink("https://konciar.com")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
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
              한국의 휴대폰 번호 기반 본인 인증과 언어 장벽으로 인해 국내 로컬 서비스 이용에 어려움을 겪는 <strong>외국인 여행객을 위한 컨시어지 서비스</strong> <br />
              실제 창업을 준비하는 팀의 기술 파트너로 참여하여, 현재 <strong>프로토타입 개발 및 비즈니스 가설 검증</strong> 단계로, <strong>실제 서비스 출시</strong>를 목표로 고도화 중입니다.
              <br />
              초기 HTML기반 코드를 React 아키텍처로 전면 리팩토링하여 향후 확장성을 확보했으며, 서버리스 환경 구축을 통해 운영 비용 최소화와 개발 속도 극대화를 동시에 실현하고 있습니다.
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
                    <ul className="ml-2">
                      {Array.isArray(role.problem) ? (
                        role.problem.map((prob, j) => (
                          <li key={j} className="list-disc leading-relaxed ml-4">
                            {prob}
                          </li>
                        ))
                      ) : (
                        <p className="leading-relaxed border-l-2 border-gray-200 pl-3">
                          <span dangerouslySetInnerHTML={{ __html: role.problem.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </p>
                      )}
                    </ul>
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
                    <ul className="ml-2">
                      {Array.isArray(role.result) ? (
                        role.result.map((res, j) => (
                          <li key={j} className="list-disc leading-relaxed ml-4">
                            {res}
                          </li>
                        ))
                      ) : (
                        <p className="leading-relaxed border-l-2 border-gray-200 pl-3">
                          <span dangerouslySetInnerHTML={{ __html: role.result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </p>
                      )}
                    </ul>
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

      <ProjectFooter id={4} />
    </div>
  )
}

export default Konciar
