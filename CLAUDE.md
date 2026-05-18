# Portfolio Project — Claude Instructions

## 프로젝트 개요
강안수의 개인 포트폴리오 웹사이트. React + TypeScript + Tailwind CSS 기반의 싱글 페이지 앱.

## CLAUDE.md 우선순위
1. **글로벌** (`~/.claude/CLAUDE.md`) — 모든 프로젝트에 공통 적용되는 행동 규칙
2. **이 파일** (`CLAUDE.md`) — 이 프로젝트에만 적용. 글로벌 규칙을 덮어쓰지 않고 보완

## 문서 관리 규칙
- 모든 문서 파일은 `docs/` 폴더에 저장
- `docs/WORK.md` — 현재 진행 중인 작업. 작업 시작 시 항목 추가
- `docs/HISTORY.md` — 완료된 작업 아카이브. 작업 완료 시 WORK.md → HISTORY.md로 이동
- 기획/분석 문서도 `docs/`에 저장 (예: `docs/ai-chat-feature-plan.md`)

## 기술 스택
- React 18 + TypeScript
- Tailwind CSS v4 (`@theme` directive, `src/App.css`)
- Framer Motion (애니메이션)
- React Router v7
- Vite (번들러)

## 색상 시스템 (`src/App.css` `@theme` 블록)
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--color-point` | `#4875eb` | 포인트 컬러 (버튼, 링크 등) |
| `--color-brand-blue` | `#8baaff` | 브랜드 블루 |
| `--color-brand-purple` | `#ae86ff` | 브랜드 퍼플 |
| `--color-main-bg` | `#f8f8f8` | 페이지 배경 |

## 프로젝트 구조
```
src/
├── components/
│   ├── AiChat/          ← AI 채팅 UI (index, ChatHeader, ChatMessages, ChatMessage, ChatInput)
│   └── ...              ← Hero, Projects, Skills, Exprience, About, Footer 등
├── hooks/               ← useChatStream, useScrollLock 등
├── pages/               ← 개별 프로젝트 상세 페이지
├── types/               ← 공통 타입 정의
├── App.css              ← 전역 스타일 + Tailwind @theme
└── index.css            ← 비어 있음 (필요시 사용)
```

## 코딩 규칙
- 인라인 스타일(`style={{}}`)과 Tailwind 클래스를 혼용. 복잡한 글래스모피즘 효과는 인라인 스타일로 작성
- 컴포넌트별 스타일 상수(`const xStyle = {}`)는 컴포넌트 상단에 선언
- 전역 CSS 클래스가 필요하면 `src/App.css` 하단에 추가
- 폰트 클래스: `font-pretendard`, `font-nanumsquare`, `font-nexon`
