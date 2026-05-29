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
    "한국의 통신/금융 기반 본인 인증과 언어 장벽으로 인해 국내 로컬 서비스 이용에 어려움을 겪는 외국인 여행객을 위한 컨시어지 서비스 \n 창업 팀의 개발 역할로 참여하여 프로토타입 개발 이후 바이럴 마케팅·오프라인 인터뷰까지 주도적으로 참여하며 서비스 관점의 개발 경험을 쌓았습니다.",
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
      content: "React, Vite, TypeScript, Tailwind CSS, i18next",
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
      desc: "기획자 주도로 제작된 단일 HTML 파일 기반 프로토타입을 인수받아 React 기반의 확장 가능한 구조로 전환",
      problem: [
        "단일 HTML 기반 구조로 기능 추가 시 전체 코드 영향 범위가 커 유지보수와 확장에 어려움 발생",
        "복잡한 상태 관리에 따른 어려움 및 느린 개발 속도",
        "다양한 경로 유입을 위한 SEO 최적화 미흡",
      ],
      solution: [
        "**Vite 도입**: 빠른 개발 서버와 빌드 속도 향상, 모듈 번들링 최적화 및 Hot Module Replacement 기반 개발 속도 향상",
        "**React 도입**: UI를 컴포넌트 단위로 분리하고 상태 관리를 구조화하여 기능 확장과 유지보수가 용이한 구조 구축",
        "**웹 표준 및 SEO 개선**: 시멘틱 마크업·이미지 최적화·크롤링 가이드 적용을 통해 접근성과 검색 엔진 노출 성능 강화",
        "**Tailwind CSS 도입**: 유틸리티 우선 스타일링을 통해 코드량을 줄이고 일관된 모바일 최적화 레이아웃 확보",
      ],
      result: [
        "React + Vite 기반 구조 전환으로 개발 생산성 향상",
        "Lighthouse 스코어(Accessibility, Best Practices, SEO) 100점 달성 — 검색 엔진 노출 가능성 확보로 외국인 사용자의 서비스 발견 경로 다양화",
        "확장 가능한 코드 구축으로 향후 기능 추가 및 유지보수 용이",
      ],
    },
    {
      title: "다국어 지원",
      img: "languageChange.gif",
      isMobile: true,
      desc: "방한 외래 관광객의 약 70% 이상이 중국·일본·대만·미국 등 4개국 출신 — 이를 기준으로 영어(범용)·중국어·일본어를 1차 지원 언어로 선정",
      problem: [
        "하드코딩으로 텍스트 언어를 관리할 경우 언어 추가 시 코드 전체를 수정해야 하는 비효율성",
        "신규 언어 추가 및 기존 언어 수정 시 개발자 개입 최소화 필요",
        "지원 언어가 늘어날수록 메인 번들 파일 크기가 커져 초기 로딩 속도에 악영향",
      ],
      solution: [
        "**i18next & i18next-http-backend 도입**: 번역 데이터를 코드와 분리하고 필요한 언어 리소스만 비동기로 로드하는 구조 적용",
        "**언어 데이터의 에셋화**: 향후 코드 수정 없이 JSON 파일 교체만으로 무중단 번역 업데이트 가능, 개발자가 아닌 기획자도 직접 번역 파일 관리 가능",
      ],
      result: [
        "번역 문구 수정 시 재배포 없이 JSON 파일 교체만으로 운영 가능하도록 개선",
        "지원 언어가 늘어나도 초기 번들 사이즈에 영향이 없는 구조 확립",
      ],
    },
    {
      title: "카테고리별 맞춤형 프로세스",
      img: "reservationProcess.gif",
      isMobile: true,
      desc: "원하는 문의의 카테고리(예약/포장/방문 등) 선택 시, 해당 유형에 최적화된 동적 폼 제공",
      problem: [
        "오프라인 인터뷰에서 자유 입력 기반 단일 폼 테스트 결과, 사용자마다 입력 방식이 달라 무엇을 작성해야 하는지 혼란 발생, 운영 측면에서도 비정형 입력 데이터 처리에 어려움 확인",
        "타이핑 위주의 필드로 사용자 피로도 증가",
        "한국 지명에 익숙하지 않은 외국인 사용자의 명확하지 않은 장소 입력으로 인한 혼선 발생 가능성",
      ],
      solution: [
        "**카테고리별 폼 설계**: 사용자가 선택한 카테고리에 따라 최적화된 폼 구조를 동적으로 렌더링하여 불필요한 입력 필드 제거",
        "**선택형 입력 UI 제공**: 텍스트 입력 대신 선택박스, 달력 선택, 체크박스 등 선택형 UI로 사용자 경험 개선",
        "**Google Place API 연동**: 외국인 사용자의 장소 입력 혼선을 줄이기 위해 Google Place API 기반 자동완성 기능 적용",
      ],
      result: [
        "불필요한 입력 필드 제거로 서비스 여정 소요 시간 단축",
        "Google Place API 연동을 통해 외국인 사용자의 주소 입력 정확도 향상 및 주소 데이터 혼선 방지",
        "직관적인 선택형 UI 도입으로 폼 입력 오류 감소",
        "오프라인 인터뷰에서 확인한 사용자 피드백을 반영하여 단일 폼에서 카테고리별 구조화 폼으로 전환 — UX 개선과 함께 향후 AI 연동에 적합한 정형 데이터 구조 확보",
      ],
    },
    {
      title: "사용자 요청 이메일 브릿지 시스템",
      img: "emailImage.png ",
      isMobile: false,
      desc: "사용자가 요청한 정보를 운영자에게 실시간으로 전달하는 서버리스 이메일 전송 시스템",
      problem: [
        "아이디어를 검증하는 단계에서 서버 구축 및 메일 인프라 운영 비용 발생 부담",
        "빠른 시장 검증을 위해 최소한의 개발 기간 내에 안정적인 메일 전송 환경 필요",
      ],
      solution: [
        "**EmailJS 도입**: 별도 서버 없이 사용자 요청을 운영자 이메일로 실시간 전달하는 구조 구축",
        "**Email 템플릿 최적화**: 사용자 요청 카테고리에 따라 이메일 제목과 본문이 가변적으로 구성되는 이메일 템플릿 시스템을 설계하여 운영자의 가독성 향상",
      ],
      result: [
        "서버 구축 없이 빠르게 사용자 요청 수집 환경을 구현하여 초기 서비스 검증 속도 향상",
        "서버리스 구조를 통해 초기 운영 단계에서 별도 인프라 비용 없이 사용자 요청 수집 환경 구축",
      ],
    },
  ],
  achievements: [
    "**비즈니스 검증용 프로토타입 구축**: 서버 없이 프론트엔드 기술만으로 실질적인 서비스 운영 및 시장성 검증 환경 마련",
    "**리팩토링을 통한 개선**: 기획자의 바이브 코딩 기반 레거시 코드를 모던 프론트엔드 구조로 개선하여 향후 확장 및 정식 출시 가능한 프로젝트 기반 확립뿐 아니라 개발 속도 대폭 향상",
    "**거리 인터뷰 기반 UX 검증**: 오프라인 인터뷰에서 확인한 사용자 피드백을 반영하여 단일 폼에서 카테고리별 구조화 입력으로 전환 — 사용자 흐름과 운영자 처리 효율을 동시에 고려한 서비스 설계 경험",
    "**글로벌 대응 역량**: 다국어 지원 및 글로벌 사용자 입력 환경을 고려한 서비스 설계 경험 확보",
    "**웹 표준 및 품질 개선**: 시멘틱 마크업 기반 정보 구조 개선 및 접근성 최적화, Lighthouse Accessibility·Best Practices·SEO 100점 달성",
  ],
}
