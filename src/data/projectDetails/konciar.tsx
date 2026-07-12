import { MdOutlineFeaturedPlayList, MdPeopleAlt, MdOutlineWebAsset } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import type { ProjectDetailData } from "@/types"

export const konciarData: ProjectDetailData = {
  title: "Konciar",
  headerImage: "/konciarBackground.png",
  headerAlt: "Konciar 배경",
  footerId: 4,
  uppercaseTitle: false,
  darkBgOverlay: true,
  // 원본 JSX의 <br />로 구분된 두 단락. 템플릿에서 줄바꿈을 렌더링하도록 한다.
  intro:
    "한국의 통신/금융 기반 본인 인증과 언어 장벽으로 인해 국내 로컬 서비스 이용에 어려움을 겪는 외국인 여행객을 위한 컨시어지 서비스 \n AI 도구를 활용해 개발 생산성을 높이며 프로토타입을 개선했고, 이렇게 확보한 시간을 길거리 인터뷰·숏폼 콘텐츠 제작에 투자하며 개발 뿐만 아니라 제품의 시장성, 사용자 반응, 서비스 성장 가능성까지 고민하고 행동으로 옮겼습니다.",
  projectInfo: [
    {
      icon: <MdOutlineFeaturedPlayList />,
      label: "한 줄 소개",
      content: "방한 외국인 여행객을 위한 로컬 예약 및 대리 문의 컨시어지 서비스",
    },
    {
      icon: <FaRegCalendarCheck />,
      label: "프로젝트 기간",
      content: "2025.12 ~ 2026.03",
    },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "FE 개발 1명" },
    {
      icon: <IoMdPerson />,
      label: "참여 역할",
      content: "프론트엔드 리팩토링 및 서비스 고도화 주도, 바이럴 마케팅",
    },
    {
      icon: <HiMiniSquare3Stack3D />,
      label: "스택",
      content: "React, Vite, TypeScript, Tailwind CSS, i18next, Antigravity",
    },
    {
      icon: <FaGithub />,
      label: "Git Hub",
      content: "바로 가기",
      link: "https://github.com/Konciar/konciar",
    },
    {
      icon: <MdOutlineWebAsset />,
      label: "서비스",
      content: "바로 가기",
      link: "https://konciar.com",
    },
  ],
  features: [
    { title: "다국어 지원", desc: "i18next 기반 영/중/일 다국어 대응" },
    {
      title: "장소 검색 자동 완성",
      desc: "Google Place API 연동을 통한 다국어 자동완성 기능",
    },
    {
      title: "이메일 브릿지 시스템",
      desc: "서버 구축 없이 사용자 요청을 운영자에게 실시간 전달하는 이메일 기반 요청 처리 시스템",
    },
  ],
  roles: [
    {
      title: "레거시 리팩토링",
      img: "viteReact.png",
      isMobile: false,
      desc: "거리 인터뷰 기반의 유저 피드백을 바탕으로, 초기 HTML 프로토타입을 React 기반의 확장 가능하고 구조화된 웹 서비스로 전면 재설계 및 전환",
      problem: ["단일 HTML 기반 구조로 기능 추가 시 전체 코드 영향 범위 증가", "복잡한 상태 관리로 인한 개발 속도 저하", "다양한 경로 유입을 위한 SEO 최적화 미흡"],
      solution: [
        "**Vite 선택**: 빠른 개발 서버와 HMR을 활용해 프로토타입 개선 속도 향상",
        "**React 전환**: UI를 컴포넌트 단위로 분리해 기능 확장과 유지보수가 쉬운 구조 구성",
        "**웹 표준 및 SEO 개선**: 시멘틱 마크업·이미지 최적화·크롤링 가이드 적용",
        "**Tailwind CSS 적용**: 유틸리티 기반 스타일링으로 코드량을 줄이고 모바일 레이아웃 일관성 확보",
      ],
      result: [
        "단일 HTML 프로토타입의 유지보수 한계 해소",
        "React + Vite 기반 구조 전환으로 개발 생산성 향상",
        "Lighthouse Accessibility·Best Practices·SEO 100점 달성",
        "검색 유입 가능성 향상 및 서비스 발견 경로 다양화",
      ],
    },
    {
      title: "다국어 지원",
      img: "languageChange.gif",
      isMobile: true,
      desc: "방한 외래 관광객의 약 70% 이상이 중국·일본·대만·미국 등 4개국 출신 — 이를 기준으로 영어·중국어·일본어를 1차 지원 언어로 선정",
      problem: ["하드코딩된 텍스트 구조로 언어 추가 시 코드 전체 수정 필요", "향후 추가 지원 언어에 따른 초기 번들 크기 증가 가능성", "신규 언어 추가 및 기존 언어 수정 시 개발자 개입 최소화 필요"],
      solution: [
        "**i18next 선택**: 번역 키 기반으로 UI 문구를 관리해 언어별 텍스트를 코드에서 분리",
        "**i18next-http-backend 적용**: 필요한 언어 리소스만 비동기로 로드해 초기 번들 크기 증가 방지",
        "**번역 데이터 JSON 에셋화**: 코드 배포 없이 번역 파일 교체만으로 문구 수정 가능하도록 구성",
      ],
      result: ["언어 추가와 문구 수정의 코드 의존도 감소", "지원 언어 증가시에도 초기 번들 크기 영향 최소화", "JSON 파일 수정만으로도 번역 문구 업데이트 가능"],
    },
    {
      title: "카테고리별 맞춤형 프로세스",
      img: "reservationProcess.gif",
      isMobile: true,
      desc: "원하는 문의의 카테고리(예약/포장/방문 등) 선택 시, 해당 유형에 최적화된 동적 폼 제공",
      problem: [
        "자유 입력 기반 단일 폼에서 사용자가 무엇을 작성해야 하는지 혼란 발생",
        "운영 측면에서 비정형 입력 데이터 처리 부담 증가",
        "타이핑 위주의 입력 방식으로 사용자 피로도 증가",
        "한국 지명에 익숙하지 않은 외국인 사용자의 장소 입력 혼선 가능성",
      ],
      solution: [
        "**카테고리별 동적 폼 설계**: 예약·포장·방문 등 선택한 목적에 따라 필요한 필드만 노출하고, 요청 유형별 입력값을 정해진 필드 구조로 수집해 운영자가 처리하기 쉬운 정형 데이터로 전환",
        "**선택형 입력 UI 적용**: 선택박스·달력·체크박스 중심 입력으로 타이핑 부담 감소",
        "**Google Places API 선택**: 다국어 장소 검색과 자동완성을 활용해 외국인 사용자의 주소 입력 오류 완화",
      ],
      result: [
        "불필요한 입력 필드 제거로 서비스 여정 소요 시간 단축",
        "자유 입력으로 인한 사용자 혼란과 운영자 처리 부담 감소",
        "주소 입력 정확도 향상 및 장소 데이터 혼선 방지",
        "향후 AI 연동에 활용 가능한 정형 요청 데이터 구조 확보",
      ],
    },
    {
      title: "사용자 요청 이메일 브릿지 시스템",
      img: "emailImage.png ",
      isMobile: false,
      desc: "사용자가 요청한 정보를 운영자에게 실시간으로 전달하는 서버리스 이메일 전송 시스템",
      problem: ["초기 아이디어 검증 단계에서 서버 구축 및 메일 인프라 운영 비용 부담", "짧은 기간 안에 안정적인 사용자 요청 수집 환경 필요"],
      solution: [
        "**EmailJS 선택**: 별도 서버 없이 프론트엔드에서 사용자 요청을 운영자 이메일로 전달할 수 있는 구조 적용",
        "**이메일 템플릿 구조화**: 요청 카테고리에 따라 제목과 본문을 가변 구성해 운영자가 필요한 정보를 빠르게 파악할 수 있도록 구성",
      ],
      result: ["서버 구축 없이 사용자 요청 수집 흐름 확보", "초기 운영 단계의 인프라 비용 감소", "시장 검증을 위한 사용자 요청 확인 속도 향상"],
    },
  ],
  achievements: [
    "**비즈니스 검증용 프로토타입 구축**: 별도 서버 없이 사용자 요청 수집과 운영자 전달이 가능한 초기 시장 검증 환경 마련",
    "**레거시 리팩토링 문제 해결**: 단일 HTML 기반 프로토타입의 유지보수 한계를 React + Vite 구조 전환으로 해소",
    "**거리 인터뷰 기반 UX 검증**: 오프라인 인터뷰 피드백을 반영한 단일 폼에서 카테고리별 구조화 입력으로 전환",
    "**글로벌 대응 역량**: 다국어 지원 및 글로벌 사용자 입력 환경을 고려한 서비스 구조 확보",
    "**웹 표준 및 품질 개선**: 시멘틱 마크업 기반 정보 구조 개선 및 접근성 최적화, Lighthouse Accessibility·Best Practices·SEO 100점 달성",
  ],
}
