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
      problem: ["어린이 미디어 이용 통계상 스마트폰·태블릿 이용률이 PC의 두 배 이상이며, PC 이용에는 시간 제한 등 다양한 제약이 따름 — PC 전용 서비스로는 주 사용자층의 실제 디바이스 환경 커버 불가", "MVP 이후 기능 확장 시 각 기능이 서로 얽히지 않는 독립적인 구조 필요"],
      solution: [
        "**PWA(Progressive Web App) 도입**: 모바일 앱과 유사한 UX를 제공하기 위한 PWA 설계를 주도하여 홈 화면 추가 및 오프라인 접근성 확보",
        "**FSD(Feature-Sliced Design) 도입**: 뉴스·퀴즈·실시간 게임·AI 챗봇 등 독립적으로 발전해야 하는 기능들을 모듈 단위로 분리 — 신규 기능 추가나 데이터 재사용 시에도 다른 기능에 영향 없는 구조 확보",
        "**사용자 중심 UI 설계**: 주 사용자(어린이)를 고려한 UI 및 반응형 웹 구현",
      ],
      result: ["하나의 웹 서비스로 PC 웹의 안정성과 모바일 앱 수준의 접근성을 동시 구현하여 주 사용자층의 기기 제약 없는 서비스 진입 장벽 최소화", "아키텍처 기반의 기능 독립성 확보를 통해 신규 기능 추가 시 사이드 이펙트 및 코드 간섭 최소화"],
    },
    {
      title: "실시간 OX 퀴즈 게임",
      img: "game_min_max_scailing.gif",
      videoSrc: "game.mp4",
      hasVideo: true,
      isMobile: false,
      desc: "WebSocket 기반 실시간 멀티플레이 퀴즈 게임",
      problem: [
        "WebSocket의 브라우저 호환성 문제 및 구현 복잡성",
        "다양한 디바이스 해상도 차이로 인한 캐릭터 위치 불일치 — 데스크탑 환경에서 전송된 좌표 절대 값이 모바일 환경에서 맵의 가동 범위를 벗어나는 문제",
        "다수 유저의 위치 데이터를 모두 전송 시 발생하는 서버 부하",
        "게임 진행 중 이동·정지·사망 시 각기 다른 스프라이트를 런타임 로드하면서 캐릭터가 깜빡이는 현상",
      ],
      solution: [
        "**Stomp, Sock.js 도입**: STOMP 프로토콜의 Pub/Sub 모델을 활용하여 데이터 규격을 표준화하고 안정적인 실시간 통신 환경 구축을 위한 Sock.js 라이브러리 활용",
        "**Min-Max Scaling**: 기기별 상대 좌표를 0~1 사이의 절대값으로 변환하는 알고리즘을 활용하여 해상도에 독립적인 일관된 게임 환경 구축",
        "**임계값 및 프레임 주기 기반 동적 전송**: 유저가 일정 거리 이상 이동했을 때만 전송 대상을 분류하고, 해당 조건에서도 매 프레임이 아닌 3프레임 주기로 데이터를 솎아 전송하여 트래픽을 최소화. 이때 발생하는 캐릭터의 끊김 현상은 클라이언트 단의 보간법으로 부드럽게 보완",
        "**리소스 프리로딩/캐싱**: 캐릭터 스프라이트 이미지를 사전에 로드하여 게임 도중 발생하는 렌더링 끊김 현상 방지",
      ],
      result: [
        "모든 기기 및 해상도에서 일관된 서비스 경험 제공",
        "실시간 OX 퀴즈 게임 참여 기기 간 좌표 정합성 확보",
        "효율적인 데이터 전송 로직으로 위치 데이터 전송 빈도를 줄여 네트워크 부하 약 60% 절감하면서도 끊김 없는 게임 경험 제공",
      ],
    },
    {
      title: "카테고리 시스템 고도화",
      img: "category.gif",
      isMobile: true,
      desc: "어린이 사용자의 뉴스 탐색 편의를 위한 카테고리 구조 개선",
      problem: [
        "카테고리 메뉴가 텍스트만으로 구성되어 주 사용자인 어린이에게 딱딱한 인상을 주고 원하는 주제를 직관적으로 식별하기 어려움",
        "뉴스 리스트 화면에 대분류만 표시되어 세부 카테고리 간 이동 시 메뉴를 다시 열거나 뒤로가기를 해야 하는 불필요한 탐색 단계 발생",
      ],
      solution: [
        "**아이콘 기반 카테고리 메뉴 개선**: 텍스트 위주의 딱딱한 메뉴 구성에 아이콘을 추가하고 배치를 정돈하여 어린이 사용자에게 적합한 친근한 UI로 개선",
        "**뉴스 리스트 내 인라인 카테고리 네비게이션 추가**: 리스트 상단에 현재 대분류의 세부 카테고리를 노출하여 별도 메뉴 진입 없이 관련 카테고리 간 바로 이동 가능하도록 구현",
      ],
      result: [
        "아이콘 추가로 텍스트 위주의 딱딱한 인상을 개선하고, 어린이 사용자에게 친근하고 직관적인 카테고리 탐색 경험 제공",
        "리스트 화면 내 세부 카테고리 직접 노출로 불필요한 뒤로가기·메뉴 재진입을 제거하여 탐색 흐름 단축",
      ],
    },
  ],
  achievements: [
    "**PWA·FSD 기반 프론트엔드 설계 주도**: 모바일 접근성 확보와 기능 독립성을 동시에 고려한 아키텍처를 설계하여 주 사용자층의 진입 장벽 최소화 및 기능 확장 시 사이드 이펙트 최소화",
    "**기기 간 좌표 정합성 문제 해결**: Min-Max Scaling을 도입하여 해상도에 독립적인 일관된 게임 환경 구축 — 수학적 접근으로 실시간 동기화 문제를 해결한 경험",
    "**실시간 통신 최적화**: 임계값·프레임 주기 기반 동적 전송과 보간법을 조합하여 네트워크 부하 약 60% 절감하면서도 끊김 없는 게임 경험 제공",
    "**타겟 사용자 중심 UX 개선**: 아이콘 기반 카테고리, 인라인 네비게이션, 어린이 친화적 UI 설계로 주 사용자층의 탐색 흐름과 서비스 접근성 개선",
  ],
}
