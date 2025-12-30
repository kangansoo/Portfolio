import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import ProjectFooter from "@/components/ProjectFooter"

const Pading = () => {
  const url = import.meta.env.VITE_S3_URL

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer")
  }

  // 1. 상단 기본 정보 데이터
  const projectInfo = [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "페어프로그래밍을 위한 웹 IDE 및 관리 시스템" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.01 ~ 2025.02 (7주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 2명, FE 4명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, Web Socket, WebRTC" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 공통 프로젝트 우수상" },
  ]

  // 2. 주요 기능 데이터
  const features = [
    { title: "매니징 시스템", desc: "오너, 매니저, 멤버로 구성. 그룹 및 프로젝트 관리(그룹 내 멤버 초대 및 다수 프로젝트 생성 가능)" },
    { title: "그룹 페이지", desc: "그룹 정보, 프로젝트 현황, 멤버 관리 기능을 제공하는 통합 대시보드" },
    { title: "권한 설정", desc: "역할 기반 접근 제어(RBAC)를 통한 멤버 초대 및 권한 변경" },
    { title: "프로젝트 생성", desc: "언어, OS, 성능 사양 및 참여 멤버를 선택하여 맞춤형 개발 환경 구축" },
    { title: "공동 편집 IDE", desc: "실시간 동시 편집, 파일 탐색기, 화상 회의, 채팅, AI 코드 리뷰, 터미널 및 배포 기능 제공" },
  ]

  // 3. 담당 역할 상세 데이터
  const roles = [
    {
      title: "프로젝트 설계",
      img: "project.png",
      tasks: [
        "디자인 및 레이아웃 설계 전 과정을 주도하여 사용자 친화적인 웹 IDE UI 구현",
        "Resizable Box 패턴을 적용하여 사용자가 작업 영역(에디터, 터미널 등) 크기를 자유롭게 조절 가능한 레이아웃 구축",
      ],
    },
    {
      title: "화상회의 (WebRTC)",
      isMultiImg: true,
      imgs: ["video.gif", "video2.gif"],
      tasks: [
        "Open Vidu 라이브러리를 활용하여 실시간 화상회의 기능 구현",
        "로컬/원격 참여자 데이터 분리 관리를 통해 렌더링 효율 최적화 및 상태 관리 단순화",
        "카메라/마이크 사전 테스트 및 하드웨어 제어 기능을 구현하여 사용자 경험 향상",
      ],
    },
    {
      title: "파일 탐색기 (Web Socket)",
      img: "file_explorer.gif",
      tasks: [
        "Stomp와 Sock.js 기반의 실시간 통신으로 파일/폴더 변경 사항의 즉각적인 동기화 보장",
        "파일/폴더의 생성, 삭제, 수정, 이동 기능을 트리 구조로 구현",
        "Map 자료구조를 활용하여 복잡한 트리 구조의 재귀 탐색 성능 최적화",
        "Resizable Box를 통한 탐색기 영역 UI 유연성 확보",
      ],
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-main-bg">
      <header className="w-full h-50 overflow-hidden">
        <img src={`${url}/pading_logo.png`} className="w-full h-full object-cover" alt="Pading 프로젝트 로고" />
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
              전체 개발 파이프라인을 실시간으로 협업하고 관리할 수 있습니다.
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
              <h3 className="font-nanumsquare text-lg font-extrabold text-font-color mb-4">{role.title}</h3>
              <div className="flex flex-col gap-6">
                <figure className="w-full flex flex-row gap-3">
                  {role.isMultiImg ? (
                    role.imgs?.map((img, idx) => (
                      <img key={idx} src={`${url}/${img}`} className={`rounded-sm border border-gray-200 shadow-sm ${idx === 1 ? "w-1/5" : "flex-1"}`} alt={`${role.title} 시연 ${idx + 1}`} />
                    ))
                  ) : (
                    <img src={`${url}/${role.img}`} alt={`${role.title} 시연`} className="w-full rounded-sm border border-gray-200 shadow-sm" />
                  )}
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
            <li className="list-disc">UI/UX 설계를 주도하며 다양한 레퍼런스를 분석하고 반영하는 과정을 통해 사용자 중심의 설계 능력 향상</li>
            <li className="list-disc">WebSocket과 WebRTC를 직접 다루며 실시간 통신 및 동기화 기술에 대한 깊은 이해도 확보</li>
            <li className="list-disc">파일 탐색기와 같은 복잡한 상태를 가진 기능을 바텀업 방식으로 구현하며 컴포넌트 조합 및 유지보수 역량 강화</li>
          </ul>
        </section>
      </main>

      <ProjectFooter id={3} />
    </div>
  )
}

export default Pading
