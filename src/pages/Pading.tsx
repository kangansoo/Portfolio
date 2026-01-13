import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"
import type { FeatureProps, ProjectInfoProps, RoleProps } from "@/types"

const Pading = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo: ProjectInfoProps[] = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "페어프로그래밍을 위한 웹 IDE 및 관리 시스템" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.01 ~ 2025.02 (7주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 2명, FE 4명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, Web Socket, WebRTC" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 공통 프로젝트 우수상" },
  ]

  // 2. 주요 기능 데이터
  const features: FeatureProps[] = [
    { title: "매니징 시스템", desc: "그룹 및 프로젝트 관리(그룹 내 멤버 초대 및 다수 프로젝트 생성 가능)" },
    { title: "권한 설정", desc: "역할 기반 접근 제어를 통한 멤버 초대 및 권한 변경" },
    { title: "프로젝트 생성", desc: "언어, OS, 사양을 선택하여 맞춤형 개발 환경 구축" },
    { title: "공동 편집 IDE", desc: "실시간 동시 편집, 파일 탐색기, 화상 회의, 채팅, 터미널 및 배포 기능" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles: RoleProps[] = [
    {
      title: "프로젝트 및 레이아웃 설계",
      img: "project.png",
      isMobile: false,
      desc: "실시간 화상회의, 채팅 및 동시 편집이 가능한 웹 IDE",
      problem: [
        "에디터, 터미널, 파일 탐색기 등 한 화면에 노출되는 정보량이 많아 발생하는 사용자 시각적 피로도 및 작업 공간 제약",
        "레이아웃 구조가 확립되지 않은 상태에서 여러 개발자가 동시에 작업할 경우 코드 충돌이 잦고 서로의 UI 작업에 간섭이 생기는 문제",
      ],
      solution: [
        "**레이아웃 구조 설계 및 구현**: 각 기능이 들어갈 공간을 미리 나누어 독립된 레이아웃 틀을 구축하여 팀원들이 각자 맡은 영역 안에서만 개발할 수 있도록 환경 조성",
        "**Resizable Box 적용**: 사용자가 마우스 드래그로 각 영역의 크기를 조절할 수 있는 유연한 레이아웃 구축",
        "**사용자 친화적 UI**: 기존 IDE를 참고하여 기능을 배치하는 등 학습 비용을 최소화하는 직관적 UI 설계",
      ],
      result: ["레이아웃 기반의 작업 영역 분리를 통해 코드 충돌 발생 빈도를 낮추고 팀 간 개발 병목 현상 제거", "쉽고 빠르게 적응할 수 있는 UI로 사용자의 학습 비용 최소화"],
    },
    {
      title: "화상회의 시스템",
      isMultiImg: true,
      imgs: ["video.gif", "video2.gif"],
      isMobile: false,
      desc: "WebRTC 기반 실시간 화상회의 기능",
      problem: ["실시간 통신 지연 시간 및 트래픽 부하", "참여자 배열 관리의 복잡성 및 비효율성", "참여자의 하드웨어 테스트 및 예외처리 필요", "한정된 공간 내에 화상 회의 화면 배치"],
      solution: [
        "**스트림 데이터 분리**: 로컬과 원격 참여자의 상태를 분리하여 불필요한 전체 리렌더링을 방지하고 상태 관리 복잡도 해소, 마이크 음소거 등 실시간 반영 기능 구현",
        "**Open Vidu**: P2P 기반의 실시간 미디어 통신 프로토콜 라이브러리를 활용하여 서버 부하 최소화 및 낮은 지연 시간 달성",
        "**하드웨어 사전 테스트**: 회의 진입 전 카메라/마이크 테스트 로직을 구현하여 디바이스 권한 및 연결 상태를 사전에 검증하는 프로세스 도입",
        "**레이아웃 최적화**: 참여자 수에 따라 동적으로 가변되는 화상 그리드 시스템 및 캐러셀 구축",
      ],
      result: [
        "낮은 지연 시간과 안정적인 스트림 전송을 통해 원활한 실시간 커뮤니케이션 환경 제공",
        "하드웨어 테스트 기능 도입으로 예기치 못한 디바이스 오류 사전 방지 및 사용자 경험 개선",
        "로컬과 원격 스트림 배열을 분리한 구조로 상태 관리 효율성 증대 및 마이크 음소거 등 기능 추가",
      ],
    },
    {
      title: "실시간 파일 탐색기",
      img: "file_explorer.gif",
      isMobile: false,
      desc: "Web Socket 기반 실시간 파일 탐색기",
      problem: ["파일/폴더 계층 구조가 깊어질수록 발생하는 재귀 탐색의 성능 저하", "사용자 환경에 따른 실시간 통신 안정성 문제"],
      solution: [
        "**Map 자료구조 최적화**: ID 기반의 Map 구조로 관리하여 탐색 및 업데이트 성능을 log(1)에 가깝게 최적화",
        "**Stomp/Sock.js**: 파일 변경 이벤트를 세분화하여 변경된 특정 노드 정보만 업데이트함으로써 네트워크 트래픽 최적화 및 실시간 동기화 보장",
        "**Resizable UI**: 복잡한 파일 트리 시인성을 위해 가변형 사이드바 레이아웃 적용",
      ],
      result: "다양한 네트워크 환경에서 연결 안정성을 확보하고 이벤트 기반 부분 업데이트 로직을 통해 깊은 계층 구조에서도 끊김 없는 실시간 협업 환경 구축",
    },
  ]

  // 4. 성과 데이터
  const achievements: string[] = [
    "**실시간 통신**: WebSocket과 WebRTC를 연동하여 지연 없는 공동 편집 및 화상회의 환경을 구축하고 기술적 이해도 증진",
    "**사용자 중심 UI/UX 설계**: Resizable Box 및 하드웨어 테스트 기능을 도입하여 사용자 작업 편의성과 접근성을 획기적으로 개선",
    "**성능 최적화**: Map 자료구조 활용 및 스트림 분리 관리를 통해 대규모 실시간 데이터 처리 효율 극대화",
    "**바텀업 방식의 사고**: 파일 탐색기와 같은 복잡한 상태를 가진 기능을 밑에서부터 설계하며 컴포넌트 조합 및 대규모 상태 관리 역량 강화",
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/pading_logo.png`} className="w-full h-full object-cover border-b border-gray-300" alt="Pading 로고" />
      </header>

      <main className="mt-10 max-w-[50%] w-full flex flex-col mb-20">
        {/* 프로젝트 기본 정보 */}
        <section aria-labelledby="project-title">
          <h1 id="project-title" className="font-nanumsquare text-3xl font-extrabold text-font-color uppercase">
            Pading
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
                <button onClick={() => openLink("https://github.com/ssafy-pading/pading")} className="underline underline-offset-4 hover:text-font-hover cursor-pointer transition-colors">
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
              원격 환경에서도 효과적인 페어프로그래밍 및 협업이 가능한 웹 IDE 통합 서비스입니다. 실시간 동시 코드 편집, 화상 회의, 채팅 등을 통해 브라우저 환경에서 프로젝트 생성부터 실행, 배포까지
              전체 개발 파이프라인을 관리할 수 있습니다.
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
                <div className="flex flex-row gap-3 w-full">
                  {role.isMultiImg ? (
                    role.imgs?.map((img, idx) => (
                      <img key={idx} src={`${url}/${img}`} className={`rounded-sm border border-gray-200 shadow-sm ${idx === 1 ? "w-1/5" : "flex-1"}`} alt={`${role.title} 시연 ${idx + 1}`} />
                    ))
                  ) : (
                    <figure className={`w-full ${role.isMobile ? "max-w-[40%]" : ""}`}>
                      <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 shadow-sm" />
                    </figure>
                  )}
                </div>

                <div className="w-full flex flex-col gap-6 font-nexon text-sm text-font-color">
                  <div>
                    <h3 className="font-bold text-landing-600 mb-2">문제 상황</h3>
                    <div className="ml-2 text-font-color">
                      {Array.isArray(role.problem) ? (
                        <ul className="flex flex-col gap-2">
                          {role.problem.map((prob, j) => (
                            <li key={j} className="list-disc ml-4 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: prob.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="leading-relaxed border-l-2 border-gray-200 pl-3">
                          <span dangerouslySetInnerHTML={{ __html: role.problem.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </p>
                      )}
                    </div>
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
                    <div className="ml-2 text-font-color">
                      {Array.isArray(role.result) ? (
                        <ul className="flex flex-col gap-2">
                          {role.result.map((res, j) => (
                            <li key={j} className="list-disc ml-4 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: res.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="ml-2 bg-gray-50 p-3 rounded-md leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: role.result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </p>
                      )}
                    </div>
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

      <ProjectFooter id={3} />
    </div>
  )
}

export default Pading
