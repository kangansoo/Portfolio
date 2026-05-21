import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import type { ProjectDetailData } from "@/types"

export const padingData: ProjectDetailData = {
  title: "Pading",
  headerImage: "/pading_logo.png",
  headerAlt: "Pading 로고",
  footerId: 1,
  intro:
    "원격 환경에서도 효과적인 페어프로그래밍 및 협업이 가능한 웹 IDE 통합 서비스입니다. 실시간 동시 코드 편집, 화상 회의, 채팅 등을 통해 브라우저 환경에서 프로젝트 생성부터 실행, 배포까지 전체 개발 파이프라인을 관리할 수 있습니다.",
  projectInfo: [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "페어프로그래밍을 위한 웹 IDE 및 관리 시스템" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.01 ~ 2025.02 (7주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 2명, FE 4명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, Web Socket, WebRTC" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 공통 프로젝트 우수상" },
    { icon: <FaGithub />, label: "Git Hub", content: "바로 가기", link: "https://github.com/ssafy-pading/pading" },
  ],
  features: [
    { title: "매니징 시스템", desc: "그룹 및 프로젝트 관리(그룹 내 멤버 초대 및 다수 프로젝트 생성 가능)" },
    { title: "권한 설정", desc: "역할 기반 접근 제어를 통한 멤버 초대 및 권한 변경" },
    { title: "프로젝트 생성", desc: "언어, OS, 사양을 선택하여 맞춤형 개발 환경 구축" },
    { title: "공동 편집 IDE", desc: "실시간 동시 편집, 파일 탐색기, 화상 회의, 채팅, 터미널 및 배포 기능" },
  ],
  roles: [
    {
      title: "프로젝트 UI/UX 설계",
      isMultiImg: true,
      isCol: true,
      imgs: ["pading_mainpage.png", "project.png"],
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
      result: [
        "레이아웃 기반의 작업 영역 분리를 통해 코드 충돌 발생 빈도를 낮추고 팀 간 개발 병목 현상 제거",
        "쉽고 빠르게 적응할 수 있는 UI로 사용자의 학습 비용 최소화",
        "프로젝트의 UI/UX 설계를 전담하며, 팀원들이 각자의 역할에 집중할 수 있도록 기능별로 독립된 레이아웃 구조를 설계하고 구현하는 역량 향상",
      ],
    },
    {
      title: "화상회의 시스템",
      isMultiImg: true,
      isRow: true,
      imgs: ["video.gif", "video2.gif"],
      isMobile: false,
      desc: "WebRTC 기반 실시간 화상회의 기능",
      problem: [
        "실시간 통신 지연 시간 및 트래픽 부하",
        "참여자 수 변동에 따른 복잡한 스트림 상태 관리, 레이아웃 배치 문제 및 렌더링 비효율성",
        "참여자의 하드웨어 테스트 및 예외처리 필요",
        "참여자 수에 따른 레이아웃 가변성 문제",
      ],
      solution: [
        "**Open Vidu**: P2P 기반의 실시간 미디어 통신 프로토콜 라이브러리를 활용하여 서버 부하 최소화 및 낮은 지연 시간 달성",
        "**스트림 데이터 분리**: 로컬과 원격 참여자의 상태를 분리하여 불필요한 전체 리렌더링을 방지하고 상태 관리 복잡도 해소, 마이크 음소거 등 실시간 반영 기능 구현",
        "**하드웨어 사전 테스트**: 회의 진입 전 디바이스 권한 및 연결 상태를 사전에 검증하는 프로세스 도입",
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
        "**Map 자료구조 최적화**: ID 기반의 Map 구조로 관리하여 탐색 및 업데이트 성능을 O(1)에 가깝게 최적화",
        "**Stomp/Sock.js**: Pub/Sub 모델 기반의 규격화된 데이터 통신으로 안정적이고 협업에 용이한 웹소켓 환경 구축",
        "**Resizable UI**: 복잡한 파일 트리 시인성을 위해 가변형 사이드바 레이아웃 적용",
      ],
      result: ["다양한 네트워크 환경에서 연결 안정성을 확보", "이벤트 기반 부분 업데이트 로직을 통해 깊은 계층 구조에서도 끊김 없는 실시간 협업 환경 구축"],
    },
  ],
  achievements: [
    "**실시간 통신**: WebSocket과 WebRTC를 연동하여 지연 없는 공동 편집 및 화상회의 환경을 구축하고 기술적 이해도 증진",
    "**사용자 중심 UI/UX 설계**: Resizable Box 및 하드웨어 테스트 기능을 도입하여 사용자 편의성과 서비스 신뢰도 개선",
    "**성능 최적화**: Map 자료구조 활용 및 스트림 분리 관리를 통해 실시간 데이터 처리 효율 극대화",
    "**컴포넌트 설계 역량 향상**: 파일 탐색기와 같은 복잡한 도메인을 바텀업 방식으로 설계하며 확장성 있는 컴포넌트 조합 및 상태 관리 역량 확보",
  ],
}
