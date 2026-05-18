# 완료된 작업 히스토리

---

## [AI Chat] v1 — 초기 AI 채팅 기능 구현
**참고**: `docs/ai-chat-feature-plan.md`

### 구현 내용
- 플로팅 채팅 UI 컴포넌트 설계 및 구현 (`AiChat/` 디렉토리)
- 상태 정의: `default | expanded | minimized`
- Glassmorphism 스타일 (backdrop-filter blur, 반투명 배경, border)
- AI / 유저 말풍선 컴포넌트 (`ChatMessage.tsx`)
- 메시지 목록 + 자동 스크롤 (`ChatMessages.tsx`)
- 텍스트 입력 + Enter 전송 / Shift+Enter 줄바꿈 (`ChatInput.tsx`)
- Footer IntersectionObserver — 스크롤 최하단 도달 시 페이드아웃
- 타이핑 스트리밍 애니메이션 (`useChatStream` 훅)
- Cloud Run API 연결 (`https://portfolio-functions-368102775723.us-west1.run.app`)
- 세션 스토리지 대화 내역 저장/복원

---

## [AI Chat] v2 — UI 구조 개선
**참고**: `docs/ai-chat-v2-revision-plan.md`

### 구현 내용
- 위치: 우하단 고정 → **하단 중앙 고정** (`left: 50%, translateX`)
- 기본 상태 상단 레이블 섹션 제거 → placeholder로 통합
- `minimized` 상태 제거, `MinimizedButton.tsx` 삭제 → 최소화 시 `default`로 복귀
- `ChatState` 타입: `"default" | "expanded"`로 단순화
- 글래스모피즘 스타일 교체 (`.glass-card` CSS 기반 인라인 스타일)
- 상단 수평 / 좌측 수직 하이라이트 선 div로 구현 (CSS 가상요소 대체)

---

## [AI Chat] v3 — 입력창 및 헤더 단순화
**참고**: `docs/ai-chat-v3-revision-plan.md`

### 구현 내용
- 기본 상태 입력창: 이중 박스 구조 제거 → 단일 레이어 (Gemini 스타일)
- `wrapperStyle`, `inputBoxStyle` 제거 → `bg-transparent` textarea, 패널 배경 투과
- 기본 상태 우측에 최대화 버튼(`LuChevronUp`) 추가
- `ChatHeader` 단순화: 아바타/타이틀 제거, 최소화 버튼(`LuX`)만 우상단 absolute 배치

---

## [AI Chat] v4 — 에이전트 채팅 기능 추가
**커밋**: `c25b0a5`

### 구현 내용
- 실제 AI 에이전트 API 스트리밍 응답 연동
- 타이핑 애니메이션: 청크 단위 랜덤 딜레이로 자연스러운 스트리밍 효과
- 로딩 중 아바타 테두리 애니메이션 (conic-gradient → Gemini 스피너로 이후 개선)
- 초기 인삿말 메시지 하드코딩 (`INITIAL_MESSAGE`)
- 세션 스토리지 기반 대화 내역 복원

---

## [AI Chat] v5 — 채팅 UI 세부 개선 (이번 세션)

### 구현 내용
- **프로필 이미지**
  - 인삿말 / 채팅 프로필 이미지 크기 `w-11 h-11` → `w-9 h-9` (36px)로 축소
  - `overflow-hidden bg-white` 컨테이너로 완전 불투명 렌더링
  - 반투명 파란 테두리(`rgba(139,170,255,0.3)`) 제거
- **로딩 스피너** — Gemini 스타일로 교체
  - `border-top-color` 단일 호(arc) 방식
  - 빠른 회전(0.8s) + 느린 색상 순환(6s): 파랑 → 보라 → 핑크
  - 스피너 컨테이너 40px, 이미지 36px inset으로 외곽에 링 표시
- **글자색 강화**
  - 입력창 텍스트: `text-gray-700` → `text-gray-900`
  - AI 말풍선: `text-gray-800` → `text-gray-900`
  - 유저 말풍선 배경: 더 진한 블루 그라디언트(`#3560d4 → #5e7ee8`)
  - 플레이스홀더: `placeholder-gray-400` → `placeholder-gray-600`
- **타이핑 속도 개선**
  - 기본 딜레이: 9–16ms → 3–6ms
  - 마침표 딜레이: 60–100ms → 22–36ms
  - 청크 사이즈: 3–9자 → 5–16자
- **글래스모피즘 강화**
  - 배경: 순백(`rgba(255,255,255,0.15)`) → 파랑 틴트(`rgba(200,215,255,0.12)`)
  - blur: 12px → 18px
  - 테두리: 흰색 → 파랑 틴트(`rgba(200,220,255,0.35)`)
- **위치 및 기타**
  - 채팅 UI 위치: `bottom-7` → `bottom: 78px` (+50px 상향)
  - `showLanding=true` 시 렌더링 완전 차단 (`return null`)
  - Framer Motion 마운트 플래시 수정 (`initial={{ opacity: 0, y: 20 }}`)
