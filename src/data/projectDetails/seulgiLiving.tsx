import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { FaRegCalendarCheck, FaGithub } from "react-icons/fa"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"
import type { ProjectDetailData } from "@/types"

export const seulgiLivingData: ProjectDetailData = {
  title: "슬기로운 자취생활",
  headerImage: "/seulgi-back.png",
  headerAlt: "슬기로운 자취생활 대표 이미지",
  footerId: 5,
  uppercaseTitle: false,
  intro:
    "자취 요리, 청년 정책 탐색, 생활 편의시설 파악까지 독립 청년의 생활 전반을 하나의 앱에서 지원하는 올인원 생활 지원 서비스입니다.\n\n팀장으로 참여해 풀스택 개발과 인프라를 맡았고, AI 에이전트와 팀원이 함께 작업하는 환경에서 지속 가능한 개발 구조를 만들기 위해 SDD와 지침 문서 계층화를 적용했습니다.",
  projectInfo: [
    {
      icon: <MdOutlineFeaturedPlayList />,
      label: "한 줄 소개",
      content: "독립 청년의 생활을 지원하는 올인원 생활 지원 서비스",
    },
    {
      icon: <FaRegCalendarCheck />,
      label: "프로젝트 기간",
      content: "2026.06 ~ 2026.06",
    },
    {
      icon: <IoMdPerson />,
      label: "참여 역할",
      content: "풀스택 개발, 인프라",
    },
    {
      icon: <HiMiniSquare3Stack3D />,
      label: "스택",
      content: "React Native, Next.js, TypeScript, PostgreSQL, Gemini API, GCP, AWS, Claude Code, Codex",
    },
    {
      icon: <FaGithub />,
      label: "Git Hub",
      content: "바로가기",
      link: "https://github.com/Jibsadeul/seulgi-living",
    },
  ],
  features: [
    {
      title: "AI 이미지 분석",
      desc: "식재료나 영수증 이미지를 Gemini API로 분석하고, 앱 안의 가계부와 My 냉장고 기능에서 확인·관리할 수 있도록 저장",
    },
    {
      title: "RAG 채팅",
      desc: "청년 정책과 레시피 정보를 자연어로 검색하고 추천받을 수 있는 채팅 기능",
    },
    {
      title: "생활 지원 통합",
      desc: "자취 요리, 청년 정책 탐색, 생활 편의시설 파악을 하나의 앱에서 지원",
    },
  ],
  roles: [
    {
      title: "SDD 기반 AI 협업 구조 설계",
      embedUrl: "https://kangansoo.notion.site/ebd//37b66076b0da80a1ac38de9b4e48b095",
      desc: "AI 에이전트와 팀원이 함께 작업하는 환경에서 작업 맥락을 유지하고, 요구사항 임의 해석과 불필요한 파일 수정을 줄이기 위한 개발 흐름 설계",
      problem: [
        "제한된 시간과 토큰 안에서 작업 맥락을 유지해야 했음",
        "팀원과 AI가 동시에 작업하며 코드 충돌과 무분별한 파일 수정이 발생할 수 있었음",
        "빠른 구현보다 지속 가능한 개발 구조가 더 중요하다고 판단",
      ],
      solution: [
        "**Spec Driven Development 적용**: 기능 구현 전에 목적, 데이터 흐름, 예외 상황, 완료 기준을 spec 문서로 먼저 정의",
        "**승인 기반 작업 흐름 구성**: spec 작성 후 사용자 승인, 작업 계획 작성, 구현, spec 기준 검증, 작업 기록 순서로 진행",
        "**완료 기준 명확화**: 구현 결과를 사전에 정의한 기준과 대조할 수 있도록 작업 단위를 구체화",
      ],
      result: ["요구사항 임의 해석과 작업 범위 확장을 줄임", "수정 범위와 완료 기준을 사전에 고정해 작업 맥락 추적 가능", "AI 활용 전 명세와 아키텍처 경계를 먼저 정하는 것의 중요성을 확인"],
    },
    {
      title: "지침 문서 계층화 및 프로젝트 아키텍처 구성",
      desc: "모노레포 안에서 모바일 앱, API 서버, 공통 계약 패키지의 작업 경계를 명확히 하고, AI가 필요한 문맥만 참고하도록 지침 문서를 계층화",
      problem: [
        "명세가 쌓이면서 AI가 모든 문서를 읽을 경우 토큰과 시간이 낭비됨",
        "관련 없는 정보가 컨텍스트에 섞이면 잘못된 판단으로 이어질 수 있음",
        "모바일 앱과 API 서버, 공통 계약의 변경 경계를 명확히 할 필요가 있었음",
      ],
      solution: [
        "**지침 문서 계층화**: 글로벌, 프로젝트, 앱 영역, 작업 단위 순으로 문서를 나눠 필요한 규칙과 spec만 참조하도록 구성",
        "**모노레포 구성**: 모바일 앱, API 서버, 공통 계약 패키지로 프로젝트를 분리",
        "**Zod 스키마 기반 계약 관리**: 공통 계약 패키지에서 DTO 중복을 줄이고 프론트엔드와 백엔드의 데이터 구조를 정렬",
      ],
      result: ["불필요한 문서 탐색과 컨텍스트 오염 감소", "도메인과 기능별 작업 경계가 명확해짐", "공통 계약 관리로 프론트엔드와 백엔드 간 데이터 구조 중복 최소화"],
    },
    {
      title: "Gemini API 기반 이미지 분석",
      videos: ["grocery-camera.mp4", "receipt-camera.mp4"],
      desc: "식재료와 영수증 이미지를 분석해 가계부와 My 냉장고 기능에서 활용할 수 있는 데이터로 저장하는 기능",
      problem: ["초기에는 이미지를 Base64로 변환해 API로 바로 전송", "인코딩 과정에서 데이터 용량이 증가하며 Next.js 요청 한도 4MB를 초과"],
      solution: ["**이미지 리사이즈 적용**: 전송 전에 이미지 크기를 줄여 요청 데이터 크기 감소", "**최대 80% 압축 적용**: Gemini API 전달 전 압축 과정을 추가해 업로드 안정성 개선"],
      result: ["요청 크기 초과 문제 완화", "이미지 분석 API 전달 안정성 개선", "분석 결과를 가계부와 My 냉장고에서 확인·관리할 수 있는 흐름 확보"],
    },
    {
      title: "GCP 기반 RAG 채팅",
      isMobile: true,
      videos: ["chatting.mp4"],
      desc: "청년 정책과 레시피 정보를 자연어로 검색하고 추천받을 수 있는 RAG 기반 채팅 기능",
      problem: [
        "청년 정책과 레시피 정보가 여러 곳에 흩어져 있어 자연어 기반 탐색 흐름이 필요했음",
        "매일 업데이트되는 최신 청년 정책 데이터를 검색 가능한 형태로 반영해야 했음",
        "테스트 중 Google AI 인증 키가 터미널 명령어 평문 로그에 노출되는 보안 문제가 발생",
      ],
      solution: [
        "**GCP 서비스 조합**: 청년 정책 데이터를 별도 배치 작업으로 수집하고 검색용 데이터 저장소에 적재",
        "**데이터 벡터화**: 수집 데이터를 벡터화한 뒤 Google AI와 연결해 RAG 채팅 구현",
        "**키 폐기 및 재발급**: 노출된 인증 키를 폐기하고 새 키를 발급해 보안 문제 처리",
      ],
      result: [
        "청년 정책과 레시피 정보를 자연어로 탐색 가능한 채팅 기능 구현",
        "최신 정책 데이터를 반영할 수 있는 배치 기반 데이터 흐름 확보",
        "AI 활용 전 보안 지침과 개발자 검증 책임의 중요성을 확인",
      ],
    },
  ],
  achievements: [
    "**AI 협업 구조 설계**: SDD와 승인 기반 작업 흐름으로 요구사항 오해와 작업 범위 확장을 줄임",
    "**프로젝트 경계 명확화**: 지침 문서 계층화와 모노레포 구조로 팀원과 AI의 작업 범위를 분리",
    "**공통 계약 관리**: Zod 스키마 기반 패키지로 DTO 중복을 최소화",
    "**AI 기능 구현 경험**: Gemini API 이미지 분석과 GCP 기반 RAG 채팅을 실제 서비스 흐름에 연결",
    "**회고와 개선 방향 도출**: 예외 흐름, 실패 정책, 완료 기준을 자동화 테스트로 연결하는 과정이 필요함을 확인",
  ],
}
