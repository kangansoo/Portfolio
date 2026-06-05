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
        "초기 글 흐름·스타일·이미지 설정과 AI 미리보기가 한 화면에 혼재되어 사용자가 현재 작업 단계에 집중하기 어렵고 스크롤이 길어져 인지 부하 발생",
        "단계별 입력 구조로 인해 페이지 이동 시 데이터 유실 및 상태 동기화 관리 필요",
        "AI 데이터 생성 시의 체감 로딩 지연",
        "초기 로딩 시점에 모든 편집기 로직이 포함되면서 발생하는 불필요한 리소스 낭비 및 느린 초기 로딩 속도",
        "템플릿 단계 이동 시 반복되는 API 호출로 인한 불필요한 서버 부하 및 느린 응답 속도",
      ],
      solution: [
        "**Framer-motion 기반 Step UI**: 복잡한 설정 항목을 논리적 흐름으로 분할 설계하여 초기 이탈 요인을 해소하고 제작 몰입도 향상",
        "**Redux-Toolkit 전역 관리**: 전역 상태 저장소를 구축하여 단계 이동 시에도 데이터 일관성 및 무결성 유지",
        "**Streaming 응답 처리**: AI 생성 결과를 생성되는 즉시 화면에 노출하여 사용자가 응답 진행 상황을 인지할 수 있도록 개선",
        "**Dynamic Import**: 서비스 첫 진입 시 편집기 관련 대용량 로직 로드를 제거하여 첫 화면 로딩 부담 감소",
        "**React-Query 캐싱**: 템플릿 생성/수정 시 반복되는 API 호출을 캐싱하여 서버 부하를 방지하고 응답 속도 및 안정성 향상",
      ],
      result: [
        "복잡한 설정 과정을 직관적인 단계별 프로세스로 전환하고 전역 상태 관리를 통한 데이터 정합성 확보",
        "Streaming 도입으로 AI 생성 결과를 실시간 노출하여 체감 대기 시간 감소",
        "Dynamic Import를 활용한 코드 스플리팅으로 Template 페이지 초기 번들을 206kB → 96.7kB (53% 감소)",
        "React-Query 캐싱으로 단계 이동 시 반복 API 호출 제거, 응답 속도 개선 및 서버 부하 감소",
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
        "무한 스크롤 환경에서 최신 상태가 반영되지 않아 데이터 중복 요청 및 fetching 오류 발생",
        "초기 로딩 시 불필요한 이미지 데이터 fetching으로 인한 리소스 낭비 및 느린 초기 로딩 속도",
      ],
      solution: [
        "**React Query 캐싱 + 무한 스크롤**: 캐싱 전략을 통해 동일 데이터의 중복 호출 방지",
        "**이미지 태그 시스템**: 내부적으로만 활용하던 태그 데이터를 사용자에게 노출하여 태그 확인 및 수정 가능",
        "**React Query Hydration 기반 서버 프리패칭**: 서버 프리패칭과 Hydration 기반 초기 데이터 주입으로 첫 진입 로딩 지연 완화 및 레이아웃 안정성 확보",
        "**Intersection Observer 정합성 개선**: 항상 최신 상태를 참조하도록 의존성을 명시하고, observer 중복 등록을 방지하는 수동 cleanup 적용",
        "**Dynamic Import**: 서비스 첫 진입 시 이미지 및 드라이브 관련 로직 로드를 제거하여 첫 화면 로딩 부담 감소",
      ],
      result: [
        "캐싱으로 중복 요청을 제거해 리소스 탐색 속도 개선 및 안정적인 UX 확보",
        "태그 기반 이미지 선택 구조로 AI 자동 선택의 불확실성 해소 — 포스팅 결과를 사전에 예측·조정 가능",
        "초기 데이터 대기 시간 단축 및 스켈레톤 UI로 시각적으로 안정적인 첫 진입 경험 제공",
        "fetching 정합성 확보 및 중복 요청 방지로 끊김 없는 무한 스크롤 UX 구현",
        "Dynamic Import를 활용한 코드 스플리팅으로 Drive 페이지 초기 번들을 156kB → 96.6kB (38% 감소)",
      ],
    },
    {
      title: "이미지 드라이브 (Mobile/PWA)",
      img: "mobile_drive.gif",
      isMobile: true,
      desc: "모바일 환경에서 촬영한 이미지를 실시간으로 업로드하고 관리할 수 있는 이미지 드라이브",
      problem: ["모바일로 촬영한 이미지를 PC로 이동 후 업로드해야 하는 구조로 인해 현장에서 이미지 관리 및 업로드 과정의 사용자 불편 발생"],
      solution: ["**PWA 기반 모바일 이미지 드라이브 구축**: 별도 앱 설치 없이 모바일 환경에서 촬영 이미지의 즉시 업로드·관리 가능하도록 개선하여 접근성과 사용 편의성 강화"],
      result: "촬영 → 업로드 → 관리까지 모바일 환경에서 즉시 처리 가능하도록 개선하여 현장 중심 운영 흐름 구축",
    },
    {
      title: "메뉴 관리 (Mobile/PWA)",
      img: "mobile_menu.gif",
      isMobile: true,
      desc: "식당, 카페 등 오프라인 매장의 메뉴 정보를 실시간으로 수정하고 서비스와 동기화하는 관리 기능",
      problem: "매장 운영 중 발생하는 메뉴 추가·가격 변경 사항을 수정하기 위해 PC에 접근해야 하는 비효율 발생",
      solution: ["**PWA 기반 모바일 관리 구축**: 매장 현장에서 품절·가격 변경 사항을 모바일 환경에서 즉시 반영할 수 있도록 PWA 기반 관리 환경 구축"],
      result: ["PC 의존도 최소화로 현장 대응력과 운영 효율 향상"],
    },
  ],
  achievements: [
    "**사용자 체감 성능 극대화**: Next.js의 dynamic과 코드 스플리팅을 적용하여 로딩 속도를 최적화하고 AI 데이터 생성 시 실시간 피드백 제공",
    "**체계적인 상태 관리**: Redux-Toolkit과 React-Query를 통해 관심사를 분리하고 전역 상태 및 데이터 통신을 효율화하여 안정적인 경험 구현",
    "**모바일 접근성 강화**: PWA 도입으로 PC 웹의 한계를 극복하고 현장에서 즉시 활용 가능한 실시간 관리 환경 구축",
    "**몰입감 있는 UX 설계**: 스켈레톤 UI와 Framer-motion을 활용하여 시각적 안정성 확보 및 단계별 프로세스의 인지 부하 감소",
    "**서비스 신뢰도 강화**: 이미지 태그 시스템을 통해 AI 선택의 불확실성을 해결하고 사용자 예측 가능성을 향상하여 서비스 신뢰도 향상",
    "**Cursor AI 활용**: 단순 구현 및 반복 작업을 자동화하여 일정 내 PWA 추가 구현",
    "**소상공인 맞춤형 동선 설계**: 현장 대응 환경에 맞춘 핵심 기능 중심의 모바일 UI를 제공하여, 장소에 구애받지 않고 효율적인 서비스 사용 여정 구현",
  ],
}
