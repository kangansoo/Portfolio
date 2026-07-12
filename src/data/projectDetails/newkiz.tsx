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
  intro: "어린이가 뉴스 콘텐츠를 쉽고 재미있게 접할 수 있도록, 난이도별 뉴스·AI 해설·실시간 퀴즈 게임을 제공하는 어린이 뉴스 플랫폼",
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
    { title: "AI 뉴스 해설", desc: "어려운 뉴스 용어를 어린이 눈높이에 맞춰 설명하고 질문에 답변하는 AI 뉴스 해설 기능" },
    { title: "스크랩 및 기자단", desc: "관심 기사 저장 및 직접 기사를 작성해보는 기자단 활동 체험" },
    { title: "실시간 OX 퀴즈 게임", desc: "당일 뉴스 이슈를 기반으로 실시간 참여자들과 함께 진행하는 멀티플레이 OX 퀴즈" },
  ],
  roles: [
    {
      title: "PWA 기반 프로젝트 및 아키텍처 설계",
      isMobile: false,
      img: "FSD.jpg",
      desc: "확장성과 유지보수성을 고려한 프론트엔드 설계 및 모바일 접근성 강화",
      problem: ["주 사용자층인 어린이의 모바일 기기 사용 비중이 높아 PC 중심 서비스만으로 실제 사용 환경 대응에 한계", "뉴스·퀴즈·실시간 게임·AI 챗봇 등 성격이 다른 기능 간 코드 영향 범위 분리 필요"],
      solution: [
        "**PWA 선택**: 모바일 앱에 가까운 접근성을 제공하기 위해 홈 화면 추가와 오프라인 접근이 가능한 구조 적용",
        "**FSD(Feature-Sliced Design) 선택**: 기능별 책임을 분리해 MVP 이후 확장 시 기존 기능에 미치는 영향 최소화",
        "**사용자 중심 UI 설계**: 어린이 사용자의 가독성과 조작 편의성을 고려한 반응형 인터페이스 구성",
      ],
      result: ["PC 웹 안정성과 모바일 접근성을 동시에 갖춘 서비스 진입 환경 확보", "기능 간 결합도 감소로 신규 기능 확장 시 사이드 이펙트 최소화"],
    },
    {
      title: "실시간 OX 퀴즈 게임",
      img: "game_min_max_scailing.gif",
      videoSrc: "game.mp4",
      hasVideo: true,
      isMobile: false,
      desc: "WebSocket 기반 실시간 멀티플레이 퀴즈 게임",
      problem: [
        "WebSocket의 브라우저 호환성 문제 및 실시간 통신 구현 복잡성",
        "기기별 해상도 차이로 인해 절대 좌표 기반의 캐릭터 위치 동기화 시, 화면 경계를 이탈하거나 이동 범위가 제한되는 현상 발생",
        "다수 유저의 위치 데이터를 모두 전송할 경우 서버 및 네트워크 부하 증가",
        "게임 진행 중 이동·정지·탈락 시 각 상태 스프라이트 이미지를 런타임 로드하며 캐릭터 깜빡임 발생",
      ],
      solution: [
        "**STOMP/SockJS 선택**: Pub/Sub 기반 메시지 구조로 게임 이벤트를 표준화하고 SockJS fallback으로 연결 안정성 보완",
        "**Min-Max Scaling 적용**: 기기별 좌표를 0~1 범위로 정규화해 해상도에 독립적인 위치 동기화 구현",
        "**위치 전송 최적화**: 프레임 기반 전송 주기와 캐릭터 이동 거리 임계값을 설정해, 일정 거리 이상 이동한 경우에만 위치 데이터 전송",
        "**보간법 적용**: 전송 빈도 감소로 발생할 수 있는 좌표 데이터 공백을 자연스러운 움직임으로 보완",
        "**스프라이트 프리로딩/캐싱**: 캐릭터 상태에 따른 스프라이트 이미지를 사전에 로드해 게임 중 깜빡임 방지",
      ],
      result: [
        "해상도와 화면 비율이 다른 기기에서도 캐릭터 위치와 이동 범위의 일관성 확보",
        "절대 좌표 기반 동기화에서 발생하던 화면 경계 이탈 및 이동 제한 문제 해소",
        "위치 데이터 전송량 약 60% 감소로 서버 및 네트워크 부하 완화",
        "보간법 적용으로 전송 간격이 늘어나도 자연스러운 캐릭터 이동 흐름 유지",
        "스프라이트 프리로딩으로 이동·정지·탈락 상태 전환 시 시각적 끊김 해소",
      ],
    },
    {
      title: "카테고리 시스템 고도화",
      img: "category.gif",
      isMobile: true,
      desc: "어린이 사용자의 뉴스 탐색 편의를 위한 카테고리 구조 개선",
      problem: ["텍스트 중심 카테고리 구조로 인해 어린이 사용자가 원하는 주제를 직관적으로 탐색하기 어려움", "세부 카테고리 이동 시 뒤로가기와 메뉴 재진입이 반복되어 탐색 흐름 단절"],
      solution: [
        "**아이콘 기반 카테고리 개선**: 카테고리별 아이콘과 정돈된 배치를 적용해 주제 인지성 강화",
        "**인라인 카테고리 네비게이션 추가**: 뉴스 리스트 상단에서 세부 카테고리로 바로 이동할 수 있는 구조 구성",
      ],
      result: ["어린이 사용자의 카테고리 인지성 향상", "불필요한 뒤로가기·메뉴 재진입 감소", "뉴스 탐색 흐름 단축"],
    },
  ],
  achievements: [
    "**PWA·FSD 기반 프론트엔드 설계 주도**: 모바일 접근성 확보와 기능 독립성을 동시에 고려한 아키텍처로 진입 장벽 및 기능 확장 사이드 이펙트 최소화",
    "**기기 간 좌표 정합성 문제 해결**: Min-Max Scaling으로 해상도 차이에 따른 좌표 오차 해결",
    "**실시간 통신 최적화**: 임계값·프레임 주기 기반 전송과 보간법 조합으로 네트워크 부하 약 60% 감소",
    "**사용자 중심 UX 개선**: 어린이 사용자 특성을 고려한 카테고리·네비게이션 구조 개선으로 탐색 흐름과 서비스 접근성 향상",
  ],
}
