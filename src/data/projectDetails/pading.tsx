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
  intro: "브라우저 환경에서 실시간 코드 편집·화상회의·채팅·배포까지 지원하여 원격 협업과 페어프로그래밍이 가능한 웹 IDE 서비스",
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
    { title: "공동 편집 IDE", desc: "실시간 코드 동시 편집과 화상회의·채팅·터미널 기능을 통합한 협업 개발 환경" },
  ],
  roles: [
    {
      title: "프로젝트 UI/UX 설계",
      isMultiImg: true,
      isCol: true,
      imgs: ["project.png"],
      isMobile: false,
      desc: "실시간 화상회의, 채팅 및 동시 편집이 가능한 웹 IDE의 UI/UX 설계 전담",
      problem: [
        "에디터·터미널·화상회의·파일 탐색기 등 복수 기능이 한 화면에 공존해 기능 간 UI 충돌 가능성 발생",
        "기존 IDE 사용 경험이 있는 사용자가 별도 학습 없이 익숙하게 사용할 수 있는 인터페이스 필요",
        "사용자마다 화상회의·에디터·터미널 사용 비중이 달라 고정 레이아웃만으로는 작업 효율 저하",
      ],
      solution: [
        "**기능별 레이아웃 분리**: 각 기능의 화면 책임을 사전에 분리해 팀원별 독립 개발이 가능한 UI 구조 설계",
        "**Resizable Box 적용**: 작업 맥락에 따라 에디터·터미널·화상회의 영역 비율을 직접 조절할 수 있는 가변형 레이아웃 구성",
        "**IDE 친화적 UI 설계**: 기존 IDE의 사용 흐름을 참고해 학습 비용을 줄이는 인터페이스 구성",
      ],
      result: ["팀원 간 UI 작업 충돌 감소 및 병렬 개발 가능", "복합 기능이 한 화면에 공존해도 작업 흐름이 끊기지 않는 웹 IDE 경험 제공", "기존 IDE와 유사한 사용 흐름으로 협업 환경 적응 비용 최소화"],
    },
    {
      title: "화상회의 시스템",
      isMultiImg: true,
      isRow: true,
      imgs: ["video.gif", "video2.gif"],
      isMobile: false,
      desc: "WebRTC 기반 실시간 화상회의 기능",
      problem: [
        "실시간 화상회의 특성상 지연 시간 증가나 스트림 끊김이 사용자 협업 흐름에 직접적인 영향",
        "WebRTC Mesh 구조 사용 시 참여자 증가에 따라 클라이언트 업로드 부하 증가 가능성",
        "참여자 입·퇴장 시 스트림 상태와 레이아웃이 동시에 변경되어 화면 재배치 및 불필요한 리렌더링 발생",
        "브라우저 권한 미설정 또는 디바이스 미연결 시 회의 진입 실패 가능성",
      ],
      solution: [
        "**OpenVidu 선택**: 세션·토큰·Publisher/Subscriber 흐름과 보일러플레이트 코드를 제공해 제한된 기간 내 화상회의 구조 구현 가능",
        "**SFU 방식 활용**: 클라이언트 간 직접 연결이 늘어나는 Mesh 구조의 한계를 줄이기 위해 OpenVidu의 SFU 기반 미디어 중계 구조 적용",
        "**로컬/원격 스트림 상태 분리**: 입장·퇴장·음소거 등 자주 변경되는 스트림 상태를 분리 관리해 전체 리렌더링 최소화",
        "**디바이스 사전 검증**: 회의 입장 전 브라우저 권한과 카메라·마이크 연결 상태 확인 단계 추가",
      ],
      result: [
        "참여자 수 변화에도 낮은 지연 시간과 안정적인 스트림 전송 유지",
        "불필요한 리렌더링 감소로 끊김 없는 화상회의 경험 제공",
        "회의 진입 전 디바이스 오류를 사전에 차단해 사용자 이탈 가능성 감소",
      ],
    },
    {
      title: "실시간 파일 탐색기",
      img: "file_explorer.gif",
      isMobile: false,
      desc: "WebSocket 기반 실시간 파일 탐색기",
      problem: ["파일 계층이 깊어질수록 트리 순회 기반 탐색·업데이트 성능 저하", "사용자 네트워크 환경에 따른 실시간 통신 안정성 문제", "깊은 파일 트리에서 구조 파악과 탐색 효율 저하"],
      solution: [
        "**Map 기반 상태 관리**: 트리 순회 비용을 줄이기 위해 파일 ID를 key로 갖는 Map 구조로 상태 관리",
        "**STOMP/SockJS 선택**: 파일 생성·수정·삭제 이벤트를 명확한 메시지 타입으로 관리하기 위해 Pub/Sub 구조 적용 및 SockJS fallback 활용",
        "**가변형 사이드바 적용**: 깊은 파일 트리에서도 사용자가 탐색 영역 너비를 조절할 수 있도록 구성",
      ],
      result: [
        "깊은 계층 구조에서도 조회 O(N)에서 O(1)에 가깝게 개선하여 안정적인 실시간 협업 환경 구축",
        "다양한 네트워크 환경에서 안정적인 파일 동기화 유지",
        "파일 트리 시인성 개선으로 탐색 효율 향상",
      ],
    },
  ],
  achievements: [
    "**WebSocket·WebRTC 기반 실시간 통신 문제 해결**: 화상회의와 파일 탐색기에서 발생하는 지연·동기화·브라우저 호환성 문제를 도메인별 통신 구조로 해결",
    "**성능 최적화**: Map 기반 파일 상태 관리와 스트림 상태 분리로 탐색 비용 및 불필요한 리렌더링 감소",
    "**사용자 중심 UI/UX 설계**: 복잡한 협업 기능을 기존 IDE와 유사한 사용 흐름으로 설계하여 학습 비용과 협업 진입 장벽 최소화",
    "**병렬 개발 환경 설계**: 기능별 레이아웃 영역을 사전에 분리하여 팀원 간 UI 작업 충돌 없이 독립 개발 가능한 구조 확보",
  ],
}
