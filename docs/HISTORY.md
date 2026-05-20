# 완료된 작업 히스토리

> 날짜는 관련 커밋 기준. 범위가 넓은 작업은 마지막 커밋 날짜로 표기.

---

## 2025-09-14 — 포트폴리오 초기 구성

- 프로젝트 기본 레이아웃 완성 (Header, Hero, Projects, About, Skills, Experience, Footer)
- 랜딩 컴포넌트 + 첫 방문 시 스크롤 잠금 (`useScrollLock`)
- 프로젝트 캐러셀 (react-slick) 구현
- 섹션 스냅 스크롤 (`scroll-snap-type: y mandatory`)
- 글로벌 커스텀 스크롤바 (`style/CustomScroll.css`)
- 헤더 스크롤 이동 기능 + 페이지 이동 시 최상단 유지
- LayUp 상세 페이지 완성

---

## 2025-12-30 — 코드 리팩토링

- 시맨틱 태그 적용 (`section`, `article`, `header`, `figure` 등)
- 코드 구조 정리 + 오탈자 수정
- 정적 데이터 파일 분리 (`src/data/projects.json`)
- Framer Motion 애니메이션 타이밍 조정
- 프로젝트 상세 페이지 footer 추가 (`ProjectFooter.tsx`)

---

## 2026-01-27 — 프로젝트 상세 페이지 완성

- Konciar, Pading, NewKiz 상세 페이지 추가
- 문제/해결/결과 구조로 역할 상세 정리 (`RoleProps` 타입)
- 텍스트 데이터 타입 확장 (`string | string[]`)
- 이미지 세로 정렬 + 다중 이미지 모드 지원
- 자기소개 섹션에서 관련 섹션 이동 클릭 버튼 추가

---

## 2026-04-02 — 모바일 반응형 적용

- 전체 섹션 모바일 레이아웃 대응 (`md:` 브레이크포인트)
- AI Chat 패널 동적 높이 계산 (`useExpandedHeight` 훅)
- 채팅 외부 클릭 시 닫힘 (`touchstart` 이벤트 대응)
- 채팅 바닥 위치 동적 처리 (`bottomOffset`)

---

## 2026-05-14 — 색상 코드 정리

- 포인트 컬러 변경 및 `App.css` `@theme` 색상 토큰 정비

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
> - 플로팅 채팅 UI 컴포넌트 설계 (`AiChat/` 디렉토리)
> - 상태 구조: `"default" | "expanded"` (minimized 제거)
> - 글래스모피즘 스타일 (backdrop-filter blur, CSS 클래스 기반)
> - AI / 유저 말풍선, 메시지 목록 + 자동 스크롤
> - 텍스트 입력 + Enter 전송 / Shift+Enter 줄바꿈
> - Footer IntersectionObserver — 스크롤 최하단 시 페이드아웃
> - 기본 상태 입력창 단일 레이어 (Gemini 스타일)
> - 최대화(`LuChevronUp`) / 최소화(`LuX`) 버튼

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

## 문서 정리

- [x] `CLAUDE.md` 프로젝트 루트에 생성 (2026-05-15)
- [x] `docs/HISTORY.md` 날짜별 재정비 (2026-05-20)
- [x] `docs/WORK.md` 정비
- [x] `docs/design-tokens.md` 생성 — `@theme` 전체 토큰 + 폰트 색 사용 현황 (2026-05-20)
- [ ] 완료된 plan 문서들(`ai-chat-*-plan.md`) 보관 여부 결정
