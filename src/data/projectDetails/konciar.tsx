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
    "한국의 통신/금융 기반 본인 인증과 언어 장벽으로 인해 국내 로컬 서비스 이용에 어려움을 겪는 외국인 여행객을 위한 컨시어지 서비스 \n실제 창업 팀의 개발 역할로 참여하였고, 현재 프로토타입 개발 완료 후 비즈니스 가설 검증 단계로, 개발 뿐만 아니라 바이럴 마케팅과 오프라인 프로모션에도 주도적으로 참여하며 비즈니스 전반에 대한 실전 감각을 익히고 있습니다.",
  projectInfo: [
    {
      icon: <MdOutlineFeaturedPlayList />,
      label: "한 줄 소개",
      content: "방한 외국인 여행객을 위한 로컬 예약 및 대리 문의 컨시어지 서비스",
    },
    {
      icon: <FaRegCalendarCheck />,
      label: "프로젝트 기간",
      content: "2025.12 ~ 진행 중",
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
      desc: "서버 비용 없는 MVP 운영을 위한 실시간 메일 전송 환경 구축",
    },
  ],
  roles: [
    {
      title: "레거시 리팩토링",
      img: "viteReact.png",
      isMobile: false,
      desc: "기획자 주도로 제작된 단일 HTML 파일 기반 프로토타입을 인수받아 React 기반의 확장 가능한 구조로 전환",
      problem: [
        "단일 HTML 파일 코드베이스는 유지보수성·가독성·확장성 모두 한계 — 기능을 추가할수록 파악해야 할 코드 범위가 전체로 확대되는 구조",
        "복잡한 상태 관리에 따른 어려움 및 느린 개발 속도",
        "기대치보다 낮은 Lighthouse 스코어",
      ],
      solution: [
        "**Vite 도입**: 빠른 개발 서버와 빌드 속도 향상, 모듈 번들링 최적화 및 Hot Module Replacement 기반 개발 속도 향상",
        "**React 도입**: UI를 모듈화하고 재사용 가능한 디자인 시스템 구축, 상태 관리를 효율화하여 개발 생산성 향상, 실제 서비스 출시에 대비하여 다양한 기능 확장에 유연한 구조 마련",
        "**웹 성능 향상**: 웹 표준 준수 및 구조화된 마크업 구현, 이미지 webp 변환, 크롤링 가이드 제공 등 웹 접근성, 성능 및 SEO 강화",
        "**Tailwind CSS 도입**: 유틸리티 우선 스타일링을 통해 코드량을 줄이고 일관된 모바일 최적화 레이아웃 확보",
      ],
      result: [
        "React의 생태계 및 상태 관리 효율화 기반과 Vite를 결합하여 기존 대비 개발 속도 대폭 향상",
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
        "수동으로 텍스트를 관리할 경우 언어 추가 시 코드 전체를 수정해야 하는 비효율성",
        "신규 언어 추가 및 기존 언어 수정 시 개발자 개입 최소화 필요",
        "지원 언어가 늘어날수록 메인 번들 파일 크기가 커져 초기 로딩 속도에 악영향",
      ],
      solution: [
        "**i18next & i18next-http-backend 도입**: 번역 데이터를 소스 코드와 완전히 분리하고, 필요한 언어 팩만 런타임에 비동기로 로드(Lazy Loading) 하는 구조",
        "**언어 데이터의 에셋화**: 향후 코드 수정 없이 JSON 파일 교체만으로 무중단 번역 업데이트 가능, 개발자가 아닌 기획자도 직접 번역 파일 관리 가능",
        "**사용자 친화적 언어 감지**: i18next-browser-languagedetector를 연동하여 브라우저 설정에 따른 자동 언어 대응 및 실시간 전환 기능 구현",
      ],
      result: [
        "번역 문구 수정 시 전체 빌드/배포 과정 생략으로 운영 효율 극대화",
        "지원 언어가 늘어나도 초기 번들 사이즈에 영향이 없는 구조 확립",
        "실시간 다국어 전환 및 브라우저 기반 자동 맞춤 언어 제공으로 사용자 경험 향상",
      ],
    },
    {
      title: "카테고리별 맞춤형 프로세스",
      img: "reservationProcess.gif",
      isMobile: true,
      desc: "원하는 문의의 카테고리(예약/포장/방문 등) 선택 시, 해당 유형에 최적화된 동적 폼 제공",
      problem: [
        "오프라인 거리 인터뷰에서 단일 폼 구조 테스트 시 사용자마다 입력 내용이 제각각 — 안내 없는 자유 입력은 사용자가 무엇을 어떻게 써야 할지 파악하기 어렵고, 운영 방면에서도 비정형 데이터 처리에 어려움을 확인",
        "타이핑 위주의 필드로 사용자 피로도 증가",
        "한국 지명에 익숙하지 않은 외국인 사용자",
        "명확하지 않은 장소 입력으로 인한 운영자의 혼선 발생 가능성",
        "서비스 요청 완료 시 반복되는 피드백 요청 모달",
      ],
      solution: [
        "**카테고리별 폼 설계**: 사용자가 선택한 카테고리에 따라 최적화된 폼 구조를 동적으로 렌더링하여 불필요한 입력 필드 제거",
        "**선택형 입력 UI 제공**: 텍스트 입력 대신 선택박스, 달력 선택, 체크박스 등 선택형 UI로 사용자 경험 개선",
        "**Google Place API 연동**: 외국인 사용자의 언어 그대로 입력이 가능한 자동완성 기능 구현",
        "**로컬 스토리지 기반 피드백 제어**: 피드백 요청 팝업 노출 여부를 local storage에 저장하여 반복적인 피드백 요청 제거",
      ],
      result: [
        "불필요한 입력 필드 제거로 서비스 신청 완료까지의 소요 시간 단축",
        "Google Place API 연동을 통해 외국인 사용자의 주소 입력 정확도 향상 및 운영자의 혼선 방지",
        "반복적인 모달 제어를 통해 서비스 이용 흐름의 연속성 확보 및 사용자 피로도 감소",
        "직관적인 선택형 UI 도입으로 폼 입력 오류율 감소",
        "오프라인 인터뷰에서 확인한 사용자 피드백을 반영하여 자유 입력 → 카테고리별 구조화 입력으로 전환 — UX 개선과 함께 향후 AI 연동에 적합한 정형 데이터 구조 확보",
      ],
    },
    {
      title: "사용자 요청 이메일 브릿지 시스템",
      img: "emailImage.png ",
      isMobile: false,
      desc: "사용자가 요청한 정보를 운영자에게 실시간으로 전달하는 서버리스 이메일 전송 시스템",
      problem: [
        "정식 서비스 출시 전 아이디어를 검증하는 단계에서 서버 구축 및 메일 서버 유지 비용이 발생하는 것에 대한 부담",
        "빠른 시장 검증을 위해 최소한의 개발 기간 내에 안정적인 메일 전송 환경 필요",
      ],
      solution: [
        "**EmailJS 도입**: 서버 없이 이메일 전송 기능 구현",
        "**Email 템플릿 최적화**: 사용자 요청 카테고리에 따라 이메일 제목과 본문이 가변적으로 구성되는 이메일 템플릿 시스템을 설계하여 운영자의 가독성 향상",
      ],
      result: [
        "서버 구축 대비 개발 기간을 약 80% 단축하여 초기 시장 반응을 빠르게 확인할 수 있도록 기여",
        "서버리스 구조로 서버 유지비 없이 실시간 사용자 요청 수집 환경 구축 — 브랜딩·오프라인 마케팅 중심의 초기 운영 단계에서 기술적 비용 부담 없이 서비스 검증 가능한 인프라 확보",
      ],
    },
  ],
  achievements: [
    "**비즈니스 검증용 MVP 구축**: 백엔드 서버 없이 프론트엔드 기술만으로 실질적인 서비스 운영 및 시장성 검증 환경 마련",
    "**리팩토링을 통한 개선**: 기획자의 바이브 코딩 기반 레거시 코드를 모던 프론트엔드 구조로 개선하여 향후 확장 및 정식 출시 가능한 프로젝트 기반 확립뿐 아니라 개발 속도 대폭 향상",
    "**거리 인터뷰 기반 UX 검증**: 오프라인 인터뷰에서 확인한 사용자 피드백을 반영하여 단일 폼 → 카테고리별 구조화 입력으로 전환 — 사용자 흐름과 운영자 처리 효율을 동시에 고려한 서비스 설계 경험",
    "**글로벌 대응 역량**: 다국어 지원 라이브러리를 적용하여 글로벌 사용자를 고려한 서비스 설계 및 구현 경험 축적",
    "**웹 표준 및 접근성 강화**: 시멘틱 마크업을 준수하여 정보 구조의 완성도를 높이고 접근성 강화",
    "**SEO 강화**: light house SEO 100점 달성",
  ],
}
