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
    "브라우저 환경에서 실시간 코드 편집·화상회의·채팅·배포까지 지원하여 원격 협업과 페어프로그래밍이 가능한 웹 IDE 서비스",
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
        "에디터·터미널·화상회의·파일 탐색기 등 복수 기능이 한 화면에 공존하는 구조에서 기능 간 충돌 없는 UI 구조 설계 필요",
        "기존 IDE 사용 경험이 있는 사용자가 별도 학습 없이 익숙하게 사용할 수 있는 인터페이스 필요",
        "화상회의·에디터·터미널 사용 비중이 사용자마다 달라 고정 레이아웃으로는 작업 효율 저하 발생",
      ],
      solution: [
        "**레이아웃 구조 설계 및 구현**: 각 기능이 들어갈 공간을 미리 나누어 독립된 레이아웃 틀을 구축하여 팀원들이 각자 맡은 영역 안에서만 개발할 수 있도록 환경 조성",
        "**Resizable Box 적용**: 사용자가 마우스 드래그로 각 영역의 크기를 조절할 수 있는 유연한 레이아웃 구축",
        "**사용자 친화적 UI**: 기존 IDE를 참고하여 기능을 배치하는 등 학습 비용을 최소화하는 직관적 UI 설계",
      ],
      result: [
        "레이아웃 사전 분리로 팀원 간 UI 작업 충돌 없이 병렬 개발 가능한 환경 확보",
        "기존 IDE와 유사한 사용 흐름과 가변형 레이아웃 제공으로 협업 환경 적응 비용 최소화",
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
        "실시간 화상회의 특성상 지연 시간 증가나 스트림 끊김이 사용자 협업 흐름에 직접적인 영향",
        "참여자 입·퇴장 시 스트림 상태와 레이아웃이 동시에 변경되어 화면 재배치 및 불필요한 리렌더링 발생",
        "카메라·마이크가 연결된 상태에서도 브라우저 권한 미설정 시 디바이스가 인식되지 않아 회의 진입 자체가 불가한 상황 발생 가능",
      ],
      solution: [
        "**OpenVidu 활용**: OpenVidu 기반 WebRTC 환경을 구축하여 낮은 지연 시간의 실시간 화상회의 구현",
        "**로컬/원격 스트림 상태 분리**: 참여자 상태를 분리 관리하여 불필요한 전체 리렌더링 방지 및 마이크 음소거 등 실시간 반영 구현, 참여자 수에 따라 동적으로 변하는 화상 그리드·캐러셀 레이아웃 구축",
        "**디바이스 사전 검증 프로세스 도입**: 회의 진입 전 브라우저 권한 및 디바이스 연결 상태를 미리 확인하는 단계 추가",
      ],
      result: [
        "낮은 지연 시간과 안정적인 스트림 전송으로 원활한 실시간 커뮤니케이션 환경 제공",
        "스트림 분리로 전체 리렌더링을 방지하여 참여자 수 변화에도 끊김 없는 화상회의 경험과 안정적인 협업 흐름 제공",
        "회의 진입 전 디바이스 오류를 사전 방지하여 예기치 못한 사용자 경험 저하 방지",
      ],
    },
    {
      title: "실시간 파일 탐색기",
      img: "file_explorer.gif",
      isMobile: false,
      desc: "WebSocket 기반 실시간 파일 탐색기",
      problem: [
        "동시 편집 환경에서 파일 계층이 깊어질수록 탐색·업데이트 성능 저하가 발생해 협업 흐름 저하",
        "사용자 네트워크 환경에 따른 실시간 통신 안정성 문제",
        "파일 트리가 깊어질수록 구조 파악이 어려워 탐색 효율 저하",
      ],
      solution: [
        "**Map 자료구조 기반 상태 관리**: 트리 순회 기반 구조 대신 ID 기반 Map 상태 관리로 변경하여 깊은 계층에서도 빠른 탐색·업데이트 가능하도록 개선",
        "**Stomp/SockJS 도입**: Pub/Sub 기반 실시간 통신 구조를 적용하여 다양한 네트워크 환경에서도 안정적인 동기화 환경 구축",
        "**가변형 사이드바 적용**: 사용자가 파일 탐색기 영역 너비를 조절할 수 있어 깊은 파일 트리에서도 시인성 확보",
      ],
      result: [
        "깊은 계층 구조에서도 조회 O(N)에서 O(1)에 가깝게 개선하여 안정적인 실시간 협업 환경 구축",
        "다양한 네트워크 환경에서 안정적인 실시간 통신 연결 확보",
        "가변형 사이드바로 파일 트리 시인성을 개선하여 탐색 효율 향상",
      ],
    },
  ],
  achievements: [
    "**WebSocket·WebRTC 기반 실시간 통신 구현**: 화상회의·파일 탐색기 전반에 실시간 통신을 적용하며 각 도메인에 맞는 기술 선택과 최적화 경험 확보",
    "**성능 최적화**: Map 자료구조 기반 O(1) 탐색, 스트림 상태 분리를 통한 리렌더링 최소화로 다수 참여자 환경에서도 안정적인 실시간 협업 환경 구축",
    "**사용자 중심 UI/UX 설계**: 복잡한 협업 기능을 기존 IDE와 유사한 사용 흐름으로 설계하여 학습 비용과 협업 진입 장벽 최소화",
    "**병렬 개발 환경 설계**: 기능별 레이아웃 영역을 사전에 분리하여 팀원 간 UI 작업 충돌 없이 독립적으로 개발할 수 있는 구조를 주도적으로 설계·구현",
  ],
}
