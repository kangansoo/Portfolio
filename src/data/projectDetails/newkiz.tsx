import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import type { ProjectDetailData } from "@/types"

export const newkizData: ProjectDetailData = {
  title: "NewKiz",
  headerImage: "/main.png",
  headerAlt: "NewKiz 로고",
  footerId: 2,
  intro:
    "다양한 난이도의 뉴스 콘텐츠와 퀴즈, 실시간 게임 요소를 결합하여 아이들이 자연스럽게 사회에 관심을 갖고 문해력을 향상시킬 수 있도록 돕는 어린이 뉴스 종합 플랫폼",
  scrollAnchor: {
    stateKey: "algorithm-section",
    roleTitle: "실시간 OX 퀴즈 게임",
  },
  projectInfo: [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "어린이를 위한 종합 뉴스 플랫폼" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.02 ~ 2025.04 (7주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 3명, FE 3명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, PWA, Stomp, Sock.js" },
    { icon: <FaGithub />, label: "Git Hub", content: "바로 가기", link: "https://github.com/Aren-t-you-eating/newkiz_readme" },
  ],
  features: [
    { title: "뉴스 추천", desc: "오늘의 핫 토픽 및 사용자 맞춤형 뉴스 추천 서비스 제공" },
    { title: "난이도별 뉴스", desc: "어린이의 눈높이에 맞춘 상/중/하 난이도 조절 뉴스 콘텐츠" },
    { title: "AI 뉴스 해설", desc: "생성형 AI 챗봇을 통한 어려운 단어 풀이 및 뉴스 관련 Q&A" },
    { title: "스크랩 및 기자단", desc: "관심 기사 저장 및 직접 기사를 작성해보는 기자단 활동 체험" },
    { title: "실시간 OX 퀴즈 게임", desc: "당일 핫 토픽 기반으로 실시간 접속자들과 즐기는 OX 퀴즈" },
  ],
  roles: [
    {
      title: "PWA 기반 프로젝트 및 아키텍처 설계",
      isMobile: false,
      img: "FSD.jpg",
      desc: "확장성과 유지보수성을 고려한 프론트엔드 설계 및 모바일 접근성 강화",
      problem: ["MVP 이후 개발 단계의 기능 확장 및 유지보수의 어려움 발생", "모바일 사용자의 접근성 및 앱 수준의 UX 부족"],
      solution: [
        "**FSD(Feature-Sliced Design) 채택**: 관심사 분리를 기반으로 모듈 간 결합도를 낮추고 독립적인 개발 환경 구축, 코드 가독성 및 팀 협업 효율성 증대",
        "**PWA(Progressive Web App)**: 모바일 앱과 유사한 UX를 제공하기 위한 PWA 설계를 주도하여 홈 화면 추가 및 오프라인 접근성 확보",
        "**사용자 중심 UI 설계**: 주 사용자(어린이)를 고려한 직관적인 색상 선정 및 반응형 웹 구현",
      ],
      result: ["아키텍처 개선을 통해 신규 기능 개발 속도 및 협업 용이성 향상", "모바일 사용자 경험 개선 및 접근성 강화"],
    },
    {
      title: "실시간 OX 퀴즈 게임",
      img: "game_min_max_scailing.gif",
      videoSrc: "game.mp4",
      hasVideo: true,
      isMobile: false,
      desc: "WebSocket 기반 실시간 멀티플레이어 퀴즈 게임",
      problem: [
        "WebSocket의 브라우저 호환성 문제 및 구현 복잡성",
        "다양한 디바이스 해상도 차이로 인한 캐릭터 위치 불일치 현상",
        "다수 유저의 위치 데이터를 매 프레임 전송 시 발생하는 서버 부하",
        "게임 도중 캐릭터 스프라이트 렌더링 끊김 현상",
      ],
      solution: [
        "**Stomp, Sock.js**: STOMP 프로토콜의 Pub/Sub 모델을 활용하여 데이터 규격을 표준화하고 안정적인 실시간 통신 환경 구축을 위한 웹소켓 라이브러리 활용",
        "**Min-Max Scaling**: 기기별 상대 좌표를 0~1 사이의 절대값으로 변환하는 알고리즘을 활용하여 해상도에 독립적인 일관된 게임 환경 구축",
        "**네트워크 최적화**: 모든 프레임이 아닌 임계값 기반의 동적 전송 로직 구현 및 동적 전송 주기 조절, 보간법을 적용하여 자연스러운 움직임 구현",
        "**리소스 프리로딩/캐싱**: 캐릭터 스프라이트 이미지를 사전에 로드하여 게임 도중 발생하는 렌더링 끊김 현상 방지",
      ],
      result: [
        "네트워크 통신 안정화 및 협업 용이성 향상",
        "실시간 OX 퀴즈 게임 참여 기기간 좌표 정합성 확보",
        "위치 전송 빈도 최적화를 통해 네트워크 트래픽 부하 약 60% 절감과 끊김 현상 없는 부드러운 게임 경험 제공",
      ],
    },
    {
      title: "카테고리 시스템 고도화",
      img: "category.gif",
      isMobile: true,
      desc: "어린이 사용자의 뉴스 탐색 편의를 위한 카테고리",
      problem: "단순 나열 방식의 초기 카테고리 구조로 인해 세부 뉴스 주제에 대한 탐색 편의성 저하",
      solution: ["**계층형 카테고리 설계**: 대분류에서 세부 카테고리로 이어지는 페이지 단위의 유저 흐름 개선"],
      result: "정보 구조 최적화를 통해 어린이 사용자의 뉴스 탐색 용이성 및 콘텐츠 도달률 개선",
    },
  ],
  achievements: [
    "**실시간 통신 최적화**: Stomp 기반 게임 통신 환경에서 보간법과 데이터 전송 최적화를 통해 네트워크 비용 60% 절감",
    "**확장/유지보수에 유연한 아키텍처 구축**: FSD 아키텍처 도입을 주도하여 기능 확장 시에도 코드 일관성 및 높은 유지보수성 유지",
    "**모바일 웹 경험 개선**: PWA 및 반응형 설계를 통해 다양한 디바이스 환경에서 끊김 없는 사용자 경험 제공",
    "**사용자 중심 UI/UX**: 어린이 타겟에 특화된 직관적인 디자인 시스템과 접근성 향상을 위한 최적화 레이아웃 구현 및 부드러운 게임 경험 제공",
    "**분석적 문제 해결 역량 향상**: Min-Max Scaling 등 수학적 접근을 통해 기기 간의 실시간 동기화 오차 문제 해결",
  ],
}
