import { MdOutlineFeaturedPlayList, MdPeopleAlt } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub, FaInstagram } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import type { ProjectDetailData } from "@/types"

export const layupData: ProjectDetailData = {
  title: "LAY UP",
  headerImage: "/Logo.png",
  headerAlt: "LAY UP 로고",
  footerId: 3,
  intro: "소상공인이 반복적인 SNS 마케팅 작업을 자동화할 수 있도록 AI 기반 자동 포스팅과 성과 분석 리포트를 제공하는 SNS 마케팅 자동화 서비스",
  scrollAnchor: {
    stateKey: "pwa-section",
    roleTitle: "이미지 드라이브 (Mobile/PWA)",
  },
  projectInfo: [
    { icon: <MdOutlineFeaturedPlayList />, label: "한 줄 소개", content: "소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스" },
    { icon: <FaRegCalendarCheck />, label: "프로젝트 기간", content: "2025.04 ~ 2025.05 (6주)" },
    { icon: <MdPeopleAlt />, label: "팀 구성", content: "BE 3명, FE 3명" },
    { icon: <IoMdPerson />, label: "참여 역할", content: "FE 개발" },
    { icon: <HiMiniSquare3Stack3D />, label: "스택", content: "Next.js, React, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, Cursor AI" },
    { icon: <RiAwardFill />, label: "수상", content: "SSAFY 2학기 자율 프로젝트 우수상" },
    { icon: <FaGithub />, label: "Git Hub", content: "바로 가기", link: "https://github.com/kangansoo/LayUp" },
    { icon: <FaInstagram />, label: "포스팅 결과물", content: "바로 가기", link: "https://www.instagram.com/geogeum_coffee" },
  ],
  features: [
    { title: "Auto Posting", desc: "템플릿과 주기를 설정해두면 등록된 사업체 정보를 기반으로 AI가 글을 생성해서 자동으로 포스팅" },
    { title: "Manual Posting", desc: "주제만 작성하면 사업체 정보를 기반으로 AI가 글을 생성하고 포스팅" },
    { title: "이미지 드라이브", desc: "모바일에서 촬영한 이미지를 즉시 업로드하고 태그·그룹 기반으로 관리 가능한 이미지 드라이브" },
    { title: "템플릿", desc: "글 흐름, 글 스타일, 이미지 그룹 등을 기반으로 템플릿 생성" },
    { title: "사업체 정보 관리", desc: "등록한 사업체의 정보 관리 기능" },
    { title: "모바일 메뉴 관리", desc: "모바일 환경에서 품절·가격 변경 등을 실시간 반영할 수 있는 메뉴 관리 기능" },
    { title: "리포트", desc: "주 1회 마케팅 성과 리포트, 월 1회 트렌드 리서치 리포트 제공" },
  ],
  roles: [
    {
      title: "템플릿 편집기",
      img: "template.gif",
      isMobile: false,
      desc: "자동 포스팅에 사용될 글의 구조와 스타일을 단계별로 정의하고 관리하는 기능",
      problem: [
        "글 흐름·스타일·이미지 설정과 AI 미리보기가 한 화면에 혼재되어 작업 단계 인지 어려움",
        "단계별 입력 구조로 인해 페이지 이동 시 데이터 유실 및 상태 동기화 관리 필요",
        "AI 생성 결과 대기 중 사용자가 진행 상황을 알기 어려움",
        "초기 진입 시 편집기 관련 대용량 로직 로드로 초기 로딩 지연",
        "템플릿 단계 이동 시 반복 API 호출로 서버 부하 및 응답 지연 발생",
      ],
      solution: [
        "**Step UI 설계**: 복잡한 설정 항목을 논리적 단계로 분리해 현재 작업 맥락을 명확히 제공",
        "**Framer Motion 적용**: 단계 전환 흐름을 자연스럽게 연결해 사용자의 현재 위치 인지 보조",
        "**Redux Toolkit 선택**: 보일러플레이트를 줄이면서 단계 간 입력 데이터의 전역 상태 정합성 유지",
        "**Streaming 응답 처리**: AI 생성 결과를 완료 후 일괄 노출하지 않고 생성 즉시 화면에 반영",
        "**Dynamic Import 적용**: 편집기 진입 시점에 필요한 대용량 로직만 분리 로드",
        "**React Query 캐싱**: 반복 조회되는 템플릿 데이터를 캐싱해 불필요한 API 호출 제거",
      ],
      result: [
        "복잡한 템플릿 설정 과정의 인지 부하 감소",
        "단계 이동 중 데이터 유실 없이 작성 흐름 유지",
        "AI 생성 대기 시간의 체감 부담 감소",
        "Template 편집기 관련 대용량 로직을 초기 로드 경로에서 분리해 서비스 첫 진입 번들 206kB에서 96.7kB로 감소",
        "반복 API 호출 감소로 응답 속도와 안정성 향상",
      ],
    },
    {
      title: "이미지 드라이브 (Web)",
      img: "drive.gif",
      isMobile: false,
      desc: "SNS 포스팅용 이미지를 그룹화하고 태그 기반으로 관리하는 이미지 드라이브",
      problem: [
        "이미지 목록 로딩 시 중복 네트워크 요청으로 인한 병목 및 성능 저하",
        "AI 자동 선택 이미지의 기준이 사용자에게 보이지 않아 결과 예측 및 제어가 어려움",
        "CSR 중심 구조에서 초기 진입 시 데이터 fetching과 클라이언트 렌더링 부담이 겹쳐 초기 로딩 지연 발생",
        "무한 스크롤 환경에서 오래된 상태 참조로 중복 요청 및 fetching 오류 발생",
        "초기 진입 시 이미지 드라이브 관련 대용량 로직이 함께 로드되어 첫 화면 로딩 부담 증가",
      ],
      solution: [
        "**React Query 캐싱**: 동일 이미지 데이터의 중복 호출을 방지하기 위한 서버 상태 캐싱 적용",
        "**이미지 태그 시스템 노출**: AI 선택 기준으로 활용되던 태그 데이터를 사용자에게 공개하고 수정 가능하도록 구성",
        "**React Query Hydration 적용**: 서버 프리패칭 데이터 주입으로 초기 데이터 대기 시간 완화",
        "**Intersection Observer 정합성 개선**: 최신 상태 참조와 observer cleanup을 통해 중복 등록 방지",
        "**Dynamic Import 적용**: 이미지 드라이브 관련 로직을 진입 시점에 분리 로드",
      ],
      result: [
        "중복 네트워크 요청 감소로 이미지 탐색 속도 개선",
        "AI 이미지 선택 기준의 예측 가능성 향상",
        "초기 진입 시 시각적 안정성 향상",
        "끊김 없는 무한 스크롤 경험 제공",
        "Drive 페이지 초기 번들 156kB에서 96.7kB로 감소",
      ],
    },
    {
      title: "이미지 드라이브 (Mobile/PWA)",
      img: "mobile_drive.gif",
      isMobile: true,
      desc: "모바일 환경에서 촬영한 이미지를 실시간으로 업로드하고 관리할 수 있는 이미지 드라이브",
      problem: ["모바일로 촬영한 이미지를 PC로 이동 후 업로드해야 하는 서비스 이용의 불편"],
      solution: ["**PWA 선택**: 별도 앱 설치 없이 모바일 브라우저에서 즉시 접근 가능한 이미지 업로드·관리 흐름 구성"],
      result: ["촬영·업로드·분류·관리까지 현장에서 즉시 처리 가능한 운영 흐름 확보", "PC 의존적인 이미지 관리 과정 감소"],
    },
    {
      title: "메뉴 관리 (Mobile/PWA)",
      img: "mobile_menu.gif",
      isMobile: true,
      desc: "식당, 카페 등 오프라인 매장의 메뉴 정보를 실시간으로 수정하고 서비스와 동기화하는 관리 기능",
      problem: "매장 운영 중 발생하는 메뉴 추가·가격 변경 사항을 수정하기 위해 PC에 접근해야 하는 비효율 발생",
      solution: ["**PWA 기반 모바일 관리**: 현장에서 모바일로 메뉴 정보를 즉시 수정하고 서비스에 반영할 수 있는 관리 흐름 구성"],
      result: ["매장 운영 중 발생하는 변경 사항의 즉시 반영 가능", "PC 의존도 감소 및 현장 대응 속도 향상"],
    },
  ],
  achievements: [
    "**사용자 체감 성능 개선**: Dynamic Import와 React Query 캐싱으로 초기 번들 크기 및 반복 API 호출 감소",
    "**AI 생성 대기 경험 개선**: Streaming 응답 처리로 AI 데이터 생성 중 실시간 피드백 제공",
    "**체계적인 상태 관리**: Redux Toolkit과 React Query를 통한 전역 상태 및 서버 상태 관심사 분리",
    "**모바일 접근성 강화**: PWA 도입으로 PC 웹 의존도를 줄이고 현장에서 즉시 활용 가능한 관리 흐름 확보",
    "**몰입감 있는 UX 설계**: 스켈레톤 UI와 Framer Motion을 활용한 시각적 안정성 확보 및 단계별 프로세스 인지 부하 감소",
    "**서비스 신뢰도 강화**: 이미지 태그 시스템 노출로 AI 선택의 불확실성 해소 및 사용자 예측 가능성 향상",
    "**소상공인 맞춤형 동선 설계**: 현장 대응 환경에 맞춘 핵심 기능 중심의 모바일 UI로 서비스 사용 여정 효율화",
  ],
}
