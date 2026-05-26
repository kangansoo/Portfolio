# 완료된 작업 히스토리

> 날짜는 관련 커밋 기준. 범위가 넓은 작업은 마지막 커밋 날짜로 표기.

---

## 2026-05-26 — AI Chat 글래스모피즘 배포 버그 수정

- **증상**: 로컬(dev)에서는 정상, 배포(prod)에서 AI Chat 패널이 완전 투명 — blur 없이 배경이 그대로 비쳐 보임
- **원인**: `React.lazy + Suspense` 도입(`0755b57`) 후 Framer Motion의 `will-change: transform`이 애니메이션 완료 후에도 유지됨 → 부모 `motion.div`가 GPU 레이어(stacking context)를 영구 생성 → 자식 `.ai-panel`의 `backdrop-filter`가 빈 레이어 내부만 블러해 투명하게 보임
- **수정**: `src/components/AiChat/index.tsx` — 외부 `motion.div`(opacity+y 담당) 제거, 모든 애니메이션(`opacity`, `y`, `height`)을 `.ai-panel` 요소 자체에 통합. 자기 자신이 GPU 레이어를 만드는 건 `backdrop-filter`를 깨지 않음
- 상세 분석: `docs/DEBUG.md` 참조

---

## 2026-05-21 — JS 번들 최적화 (코드 스플리팅 + manualChunks)

- **라우트 lazy split** (`App.tsx`): `Home`, `ProjectDetail`을 `React.lazy()` + `Suspense`로 전환 → ProjectDetail 청크 분리
- **`react-markdown` lazy** (`ChatMessage.tsx`): `AssistantBubble` 컴포넌트 내부에서 `react-markdown` + `remark-gfm` dynamic import — AI 답변 수신 시에만 로드
- **manualChunks** (`vite.config.ts`): `react-vendor` (react/react-dom/react-router-dom), `motion` (framer-motion) 분리 → 캐시 효율 향상
- 홈 초기 JS 로드: **638.92 kB → 309.96 kB (↓ 51%)**, gzip **203.85 kB → 102.29 kB (↓ 50%)**
- 최대 단일 청크: **638.92 kB → 176.65 kB (↓ 72%)**, Vite 500 kB 경고 해소
- defer된 코드: markdown 체인 291 kB + ProjectDetail 40 kB = **330 kB** (총 번들의 52%)
- 성과 지표 상세: `docs/performance-indicators.md` 3절 참조

---

## 2026-05-21 — 버그 수정 및 개선

- **다크모드 FOUC 방지**: `index.html` `<head>` 최상단에 블로킹 인라인 스크립트 추가 — localStorage → `prefers-color-scheme` 순으로 초기값 적용, 첫 방문 시 시스템 설정 자동 반영
- **Pading 화상회의 시스템 모바일 레이아웃**: `isRow` 플래그 추가로 모바일에서도 `flex-row` 유지, 두 번째 이미지 `w-1/5` 고정
- **ProjectDetail 렌더링 통일**: 문제상황/해결방법/결과 배열 여부 무관하게 `list-disc` 통일
- **tsconfig 경고 수정**: `baseUrl` deprecated → `paths`를 `./src/*` 상대경로로 변경 (TS 6.0 대응)
- **Projects CustomArrow 수정**: `flex`/`hidden` Tailwind display 충돌 제거
- **기존 상세 페이지 파일 삭제 완료**: `src/pages/LayUp.tsx` 등 4개 — 리팩토링 이후 미사용 파일 정리

---

## 2026-05-20 — 프로젝트 상세 페이지 리팩토링 (템플릿 통합)

- 4개 상세 페이지(LayUp, NewKiz, Pading, Konciar)의 동일 JSX 구조를 `ProjectDetail.tsx` 단일 템플릿으로 통합
- `src/data/projectDetails/` 폴더 생성 — 각 페이지 데이터를 `.tsx` 파일로 분리 추출
- `src/types/index.ts`에 `ProjectDetailData` 인터페이스 추가 (`uppercaseTitle?`, `darkBgOverlay?`, `scrollAnchor?` 포함)
- `App.tsx` 라우트: 개별 4개 → `/project/:id` 단일 동적 라우트 (5 → 2개)
- `projects.json` route 필드 `/project/:id` 패턴으로 일괄 업데이트
- 코드 라인 수 42% 감소 (1,233 → 710라인), 섹션 UI 수정 범위 4파일 → 1파일
- 잠재 버그 해소: Konciar `**bold**` 미렌더, `uppercase` 클래스 누락
- 성과 지표 상세: `docs/refactoring-metrics.md` 참조

---

## 2026-05-20 — 시맨틱 폰트 색상 토큰 전환

- `App.css` `@theme`에 시맨틱 토큰 4개 추가: `font-title` / `font-body` / `font-sub` / `font-caption`
- 다크모드 값 확정 및 `html.dark` 블록에 추가 (`#eaecf4` / `#CFD4E2` / `#B4BBD0` / `#A4ADC6`)
- `text-font-color` / `text-font-color/80` / `text-font-color/60` → 시맨틱 토큰으로 전환 (16개 파일)
- `text-landing-500` / `text-landing-700` → `text-font-sub` / `text-font-body` 대체 (상세 페이지 4개)
- `text-landing-600` 미정의 버그 → `text-font-sub`으로 수정 (상세 페이지 4개)
- `text-gray-*` 텍스트 용도 → 시맨틱 토큰으로 전환, `dark:text-gray-*` 쌍 제거 (AiChat, Projects)
- `docs/design-tokens.md` 시맨틱 토큰 섹션 추가, landing·gray 스케일 용도 주석 갱신

---

## 2026-05-18 — [AI Chat] v5 세부 개선 + 다크모드 + 콘텐츠 추가

### AI Chat v5 세부 개선

- **프로필 이미지**: `w-9 h-9`(36px)로 축소, `overflow-hidden bg-white`로 완전 불투명 렌더링
- **로딩 스피너**: Gemini 스타일 — 빠른 회전(0.8s) + 색상 순환(6s): 파랑 → 보라 → 핑크
- **글자색 강화**: 입력창·AI 말풍선 `text-gray-900`, 플레이스홀더 `placeholder-gray-600`
- **타이핑 속도**: 기본 딜레이 3–6ms, 마침표 22–36ms, 청크 5–16자
- **글래스모피즘**: 배경 파랑 틴트(`rgba(200,215,255,0.12)`), blur 18px, 테두리 파랑 틴트
- **위치**: `bottom-7` → `bottom: 78px`
- `showLanding=true` 시 렌더링 완전 차단, Framer Motion 마운트 플래시 수정

### 다크모드 구현

- **방식**: `html.dark` 클래스 토글 + Tailwind `dark:` variant
- **감지**: `prefers-color-scheme` 초기값, 수동 토글 후 `localStorage` 저장 (`useDarkMode`)
- **CSS 변수 오버라이드** (`html.dark` 블록):
  - `--color-main-bg`: `#f8f8f8` → `#111318`
  - `--color-font-color`: `#3a3c3c` → `#eaecf4`
  - `--color-point`: `#4875eb` → `#7fa2ff`
- **컴포넌트 적용**:
  - Header: `bg-[#16191f]`, `border-gray-700`
  - Projects 카드: `bg-[#1e2230]`, `text-gray-100/400`
  - AI Chat 글래스모피즘: `.ai-panel`, `.ai-bubble`, `.ai-input-box` 등 전용 CSS 클래스에 `html.dark` 오버라이드
- 헤더 다크모드 토글 버튼 (`LuMoon` / `LuSun`)

### 콘텐츠 추가

- Skills 섹션 내용 추가
- 배포 환경 변수 설정 (`VITE_S3_URL`, `VITE_AGENT_API_URL`)

---

## 2026-05-15 — [AI Chat] v4 에이전트 연동

**커밋**: `c25b0a5`, `fe5833f`

- 실제 AI 에이전트 API 스트리밍 응답 연동 (Cloud Run SSE)
- 타이핑 애니메이션: 청크 단위 랜덤 딜레이로 자연스러운 스트리밍 효과
- 초기 인삿말 메시지 하드코딩 (`INITIAL_MESSAGE`)
- 세션 스토리지 기반 대화 내역 저장/복원
- 세션 ID 생성 및 관리 (`getOrCreateSessionId`)
- 60초 타임아웃 + AbortController 처리

> **v1 ~ v3 누적 구현 내용**
>
> - 플로팅 채팅 UI 컴포넌트 설계 (`AiChat/` 디렉토리)
> - 상태 구조: `"default" | "expanded"` (minimized 제거)
> - 글래스모피즘 스타일 (backdrop-filter blur, CSS 클래스 기반)
> - AI / 유저 말풍선, 메시지 목록 + 자동 스크롤
> - 텍스트 입력 + Enter 전송 / Shift+Enter 줄바꿈
> - Footer IntersectionObserver — 스크롤 최하단 시 페이드아웃
> - 기본 상태 입력창 단일 레이어 (Gemini 스타일)
> - 최대화(`LuChevronUp`) / 최소화(`LuX`) 버튼

---

## 2026-05-14 — 색상 코드 정리

- 포인트 컬러 변경 및 `App.css` `@theme` 색상 토큰 정비

---

## 2026-04-02 — 모바일 반응형 적용

- 전체 섹션 모바일 레이아웃 대응 (`md:` 브레이크포인트)
- AI Chat 패널 동적 높이 계산 (`useExpandedHeight` 훅)
- 채팅 외부 클릭 시 닫힘 (`touchstart` 이벤트 대응)
- 채팅 바닥 위치 동적 처리 (`bottomOffset`)

---

## 2026-01-27 — 프로젝트 상세 페이지 완성

- Konciar, Pading, NewKiz 상세 페이지 추가
- 문제/해결/결과 구조로 역할 상세 정리 (`RoleProps` 타입)
- 텍스트 데이터 타입 확장 (`string | string[]`)
- 이미지 세로 정렬 + 다중 이미지 모드 지원
- 자기소개 섹션에서 관련 섹션 이동 클릭 버튼 추가

---

## 2025-12-30 — 코드 리팩토링

- 시맨틱 태그 적용 (`section`, `article`, `header`, `figure` 등)
- 코드 구조 정리 + 오탈자 수정
- 정적 데이터 파일 분리 (`src/data/projects.json`)
- Framer Motion 애니메이션 타이밍 조정
- 프로젝트 상세 페이지 footer 추가 (`ProjectFooter.tsx`)

---

## 2025-09-14 — 포트폴리오 초기 구성

- 프로젝트 기본 레이아웃 완성 (Header, Hero, Projects, About, Skills, Experience, Footer)
- 랜딩 컴포넌트 + 첫 방문 시 스크롤 잠금 (`useScrollLock`)
- 프로젝트 캐러셀 (react-slick) 구현
- 섹션 스냅 스크롤 (`scroll-snap-type: y mandatory`)
- 글로벌 커스텀 스크롤바 (`style/CustomScroll.css`)
- 헤더 스크롤 이동 기능 + 페이지 이동 시 최상단 유지
- LayUp 상세 페이지 완성
