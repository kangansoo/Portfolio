# Portfolio Project — Codex Instructions

## AGENTS.md 우선순위

1. **글로벌** (`~/.Codex/AGENTS.md`) — 모든 프로젝트에 공통 적용되는 행동 규칙
2. **이 파일** (`AGENTS.md`) — 이 프로젝트에만 적용. 글로벌 규칙을 덮어쓰지 않고 보완

---

## 작업 규칙

1. **계획 먼저**: 코드 작업 요청을 받으면 바로 구현하지 않고,
   개발 계획을 `docs/WORK.md`에 먼저 작성한다
2. **승인 후 진행**: 사용자의 승인을 받은 후에만 구현을 시작한다
3. **WORK.md 확인**: 구현 시작 전 `docs/WORK.md`를 읽고 계획대로 진행한다
4. **완료 처리**: 작업 완료 후 해당 항목을 `docs/WORK.md`에서
   `docs/HISTORY.md`로 이동한다

---

## 문서 관리 규칙

- 모든 문서 파일은 `docs/` 폴더에 저장
- `docs/WORK.md` — 현재 진행 중인 작업. 작업 시작 시 항목 추가
- `docs/HISTORY.md` — 완료된 작업 아카이브. 작업 완료 시 WORK.md → HISTORY.md로 이동
- 기획/분석 문서도 `docs/`에 저장 (예: `docs/ai-chat-feature-plan.md`)

---

## Project Overview

- **목적**: 강안수(Ansoo Kang)의 개인 포트폴리오 — 프로젝트, 기술 스택, 경력을 소개하는 SPA
- **대상**: 잠재적 채용 담당자, 협업 파트너
- **기술 스택**:
  - React 19 + TypeScript
  - Tailwind CSS v4 (`@theme` directive, `src/App.css`)
  - Framer Motion v12 (컴포넌트 애니메이션)
  - React Router v7 (SPA 라우팅)
  - Vite v6 (번들러)
  - react-slick (프로젝트 캐러셀)
  - react-markdown + remark-gfm (AI 채팅 메시지 렌더링)
  - hangul-typing-animation (한글 타이핑 효과)
  - react-icons (아이콘)
- **배포 환경**:
  - 정적 사이트 빌드 (`vite build`) — 별도 서버 불필요
  - 이미지 에셋: AWS S3 (`VITE_S3_URL` 환경 변수로 베이스 URL 주입)
  - AI 채팅 백엔드: Google Cloud Run (`VITE_AGENT_API_URL`)
  - GitHub Actions CI: `.github/` 디렉토리 존재

---

## Directory Structure

```
src/
├── App.tsx                  ← 루트 라우터 정의 (Routes/Route)
├── App.css                  ← 전역 스타일 + Tailwind @theme + 다크모드 + 글래스모피즘 CSS 클래스
├── index.css                ← 비어 있음 (필요시 사용)
├── main.tsx                 ← ReactDOM.createRoot 진입점
├── components/
│   ├── Home.tsx             ← 메인 페이지 조합 컴포넌트 (섹션 순서·scroll ref 관리)
│   ├── LandingComponent.tsx ← 최초 방문 인트로 애니메이션
│   ├── Header.tsx           ← 상단 고정 네비게이션 + 다크모드 토글
│   ├── Hero.tsx             ← 인트로 섹션 (이름, 직함, 한글 타이핑)
│   ├── Projects.tsx         ← react-slick 캐러셀 + 프로젝트 카드
│   ├── About.tsx            ← 소개 섹션
│   ├── Skills.tsx           ← 기술 스택 섹션
│   ├── Experience.tsx       ← 경력 섹션
│   ├── Footer.tsx           ← 연락처·링크 푸터
│   ├── ScrollReveal.tsx     ← Framer Motion 스크롤 진입 애니메이션 래퍼
│   ├── GradientText.tsx     ← 그라디언트 텍스트 유틸 컴포넌트
│   ├── Strong.tsx           ← 강조 텍스트 유틸 컴포넌트
│   └── AiChat/              ← 플로팅 AI 채팅 UI
│       ├── index.tsx        ← 채팅 패널 상태 관리 (default/expanded)
│       ├── ChatHeader.tsx   ← 채팅 헤더 + 최소화 버튼
│       ├── ChatMessages.tsx ← 메시지 목록 스크롤 영역
│       ├── ChatMessage.tsx  ← 개별 메시지 버블 (react-markdown 렌더링)
│       └── ChatInput.tsx    ← 입력창 + 전송 버튼
├── hooks/
│   ├── useChatStream.ts     ← SSE 스트리밍 수신 + 타이핑 애니메이션 + sessionStorage 히스토리
│   ├── useDarkMode.ts       ← html.dark 클래스 토글 + localStorage 영속화
│   ├── useScrollLock.ts     ← 랜딩 중 body 스크롤 잠금
│   └── useExpandedHeight.ts ← 채팅 패널 동적 높이 계산
├── pages/                   ← 프로젝트 상세 페이지 (각 프로젝트 1파일)
│   ├── LayUp.tsx
│   ├── NewKiz.tsx
│   ├── Pading.tsx
│   ├── Konciar.tsx
│   └── index.ts             ← barrel export
├── data/
│   └── projects.json        ← 프로젝트 목록 데이터 (정적 JSON)
├── types/
│   └── index.ts             ← 공통 타입 (ChatMessage, ChatState, ProjectInfoProps 등)
└── style/
    └── CustomScroll.css     ← 스크롤바 커스텀 스타일

public/
├── fonts/                   ← Pretendard woff2 파일들 (로컬 서빙)
└── images/                  ← 정적 이미지 (프로젝트 썸네일 등)
```

---

## Development Conventions

**파일·컴포넌트 명명**

- 컴포넌트 파일: PascalCase (`ChatHeader.tsx`, `ScrollReveal.tsx`)
- 훅 파일: camelCase + use 접두사 (`useDarkMode.ts`)
- 데이터 파일: camelCase (`projects.json`)
- 경로 별칭: `@/` → `src/` (`vite-tsconfig-paths` 플러그인)

**컴포넌트 패턴**

- `forwardRef` 사용: 섹션 컴포넌트(`Projects`, `About`, `Skills`, `Exprience`)는 스크롤 ref 수신을 위해 `forwardRef` 사용
- 스타일 상수: 컴포넌트 내 복잡한 스타일은 컴포넌트 상단에 `const xStyle = {}` 형태로 선언
- 인라인 스타일과 Tailwind 혼용: 글래스모피즘 등 복잡한 효과는 `style={{}}`, 나머지는 Tailwind 클래스
- 전역 CSS 클래스 추가 위치: `src/App.css` 하단

**커밋 컨벤션** (git log 기준)

- 형식: `gitmoji type: 한국어 설명`
- 예시:
  - `:sparkles: feat: 채팅 AI 에이전트 기능 추가`
  - `:lipstick: 포인트 색 변경 및 색상 코드 정리`
  - `:memo: :deploy 환경 변수 추가`
- 주로 사용하는 gitmoji: `:sparkles:` (새 기능), `:lipstick:` (UI 변경), `:memo:` (문서/설정)
- 설명은 한국어로 작성

---

## Design System

**색상 토큰** (`src/App.css` `@theme` 블록)

| 토큰                   | 라이트 값 | 다크 값   | 용도                           |
| ---------------------- | --------- | --------- | ------------------------------ |
| `--color-point`        | `#4875eb` | `#7fa2ff` | 포인트 컬러 (버튼, 링크, 밑줄) |
| `--color-brand-blue`   | `#8baaff` | —         | 그라디언트 시작색              |
| `--color-brand-purple` | `#ae86ff` | —         | 그라디언트 끝색                |
| `--color-brand-light`  | `#e0e7ff` | —         | 브랜드 연한 파랑               |
| `--color-main-bg`      | `#f8f8f8` | `#111318` | 페이지 배경                    |
| `--color-font-color`   | `#3a3c3c` | `#eaecf4` | 기본 텍스트                    |
| `--color-sub`          | `#4682B4` | —         | 서브 컬러                      |

**폰트**

- `font-pretendard`: 로컬 서빙 (`public/fonts/`), 100~900 웨이트 전체 지원 → 기본 본문 폰트
- `font-nanumsquare`: CDN (NanumSquare) → 프로젝트 카드 제목 등
- `font-nexon`: CDN (NEXON Lv1 Gothic) → 설명 텍스트

**반응형 브레이크포인트** (Tailwind 기본)

- `md:` — 768px (데스크탑 레이아웃 전환)
- `480px` — 모바일 캐러셀 패딩 추가 조정 (react-slick responsive 설정)

**다크 모드**

- 구현: `html` 요소에 `.dark` 클래스 추가/제거 (`@custom-variant dark (&:where(.dark, .dark *))`)
- 상태 관리: `useDarkMode` 훅 (localStorage 영속화, `prefers-color-scheme` 초기값)
- CSS 오버라이드: `html.dark { ... }` 블록으로 색상 토큰 덮어쓰기
- 컴포넌트에서는 `dark:` Tailwind 변형 클래스 사용

**애니메이션**

- **Framer Motion**: 컴포넌트 마운트/언마운트, 채팅 패널 높이 전환, `ScrollReveal` 래퍼
- **CSS keyframes** (`@theme` 내 정의):
  - `pulse-color`: 로고 hover 깜빡임
  - `typewriter` / `blink-caret`: 타이핑 커서 효과
  - `ai-spin` / `ai-color`: AI 로딩 링 스피너
- **글래스모피즘 CSS 클래스** (`src/App.css`): `.ai-panel`, `.ai-bubble`, `.ai-input-box`, `.ai-highlight-top`, `.ai-highlight-left`, `.ai-overlay-diagonal`, `.ai-corner-tl`, `.ai-corner-br` — 라이트/다크 각각 별도 정의

---

## Content Structure

**섹션 순서 (Home.tsx 기준)**

1. `LandingComponent` — 첫 방문 시 인트로 (4초, sessionStorage로 재방문 스킵)
2. `Hero` — 이름, 직함, 한글 타이핑 애니메이션
3. `Projects` — 프로젝트 캐러셀 (react-slick)
4. `About` — 자기소개
5. `Skills` — 기술 스택
6. `Exprience` — 경력/활동
7. `Footer` — 연락처·링크
8. `AiChat` — 하단 고정 플로팅 AI 채팅 패널 (footer 감지 시 숨김)

**프로젝트 데이터** (`src/data/projects.json`)

```ts
{
  id: number; // 고유 ID
  title: string; // 프로젝트명
  image: string; // S3 경로 (예: "/pading.png") — VITE_S3_URL과 결합
  description: string; // 한 줄 설명 (한국어)
  route: string; // 상세 페이지 경로 (예: "/layup")
}
```

현재 프로젝트: Pading, 뉴키즈, LAY UP, Konciar (총 4개, 역순 표시)

**프로젝트 상세 페이지 타입** (`src/types/index.ts`)

- `ProjectInfoProps`: icon, label, content, link?
- `FeatureProps`: title, desc
- `RoleProps`: title, desc, problem, solution[], result, img?, imgs[]?, videoSrc?, hasVideo?, isMultiImg?, isMobile?, isCol?

**다국어 지원**: 없음 (전체 한국어)

---

## Constraints & Preferences

**절대 변경하지 말 것**

- `src/App.css`의 `@theme` 블록 색상 토큰 — 프로젝트 전체 색상 시스템의 단일 소스
- 환경 변수명 `VITE_S3_URL`, `VITE_AGENT_API_URL` — 빌드 및 런타임 의존

**사용하지 않는 패턴**

- CSS Modules / styled-components — Tailwind + 인라인 스타일로 충분
- 전역 상태 관리 라이브러리 (Redux, Zustand 등) — 상태는 컴포넌트 또는 훅 로컬로 관리
- 서버사이드 렌더링 — 순수 CSR SPA

**주의 사항**

- 이미지 경로는 `import.meta.env.VITE_S3_URL + project.image` 패턴으로만 참조
- AI 채팅은 SSE(Server-Sent Events) 포맷 응답을 직접 파싱 (`data: {...}` 라인)
- `scroll-snap-type: y mandatory`가 `main`에 적용되어 있어 섹션 스냅 스크롤 동작
- `src/style/CustomScroll.css`는 `Home.tsx`에서만 import (전역 아님)
