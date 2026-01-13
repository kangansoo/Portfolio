import type { ReactNode } from "react"

export interface ProjectInfoProps {
  icon: ReactNode // 리액트 아이콘 컴포넌트
  label: string // "한 줄 소개", "팀 구성" 등
  content: string // 실제 내용
}

// 2. 주요 기능 아이템 타입
export interface FeatureProps {
  title: string // 기능 제목
  desc: string // 기능 설명
}

// 3. 담당 역할(Role) 상세 타입
export interface RoleProps {
  title: string // 역할 제목
  desc: string // 역할 한 줄 요약
  // string 또는 string[] 모두 허용하여 에러 방지
  problem: string | string[]
  solution: string[] // 해결 방법은 리스트 형태이므로 string[]
  result: string | string[] // 결과는 단일 문장 또는 리스트
  img?: string // 단일 이미지 파일명
  imgs?: string[] // 다중 이미지 파일명 배열
  videoSrc?: string // 비디오 파일명
  hasVideo?: boolean // 비디오 존재 여부
  isMultiImg?: boolean // 다중 이미지 모드 여부
  isMobile?: boolean // 모바일 레이아웃 적용 여부
}
