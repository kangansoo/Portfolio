# AI 채팅 기능 기획 문서

## 1. 개요

포트폴리오 사이트에 AI 에이전트와 대화할 수 있는 플로팅 채팅 UI를 구현한다.
Glassmorphism 스타일을 적용하여 트렌디한 느낌을 주고, Gemini/Claude 수준의 채팅 UX를 목표로 한다.

---

## 2. 상태 정의

| 상태                   | 설명                                                         |
| ---------------------- | ------------------------------------------------------------ |
| **기본 (Default)**     | 플로팅 입력창. 항상 우하단에 고정 노출                       |
| **확장 (Expanded)**    | 메시지 전송 후 전환. 대화 내역 + 입력창 패널                 |
| **최소화 (Minimized)** | 확장 상태에서 최소화 버튼 클릭 시. 작은 버튼(아이콘)만 노출  |
| **숨김 (Hidden)**      | 스크롤이 최하단(Footer)에 닿을 때 ease-in-out으로 페이드아웃 |

### 상태 전환 흐름

```
기본 ──→ 확장
 ↑          ↓
숨김   최소화 ←→ 확장
```

- 기본 → 확장: 첫 메시지 전송 시
- 확장 → 최소화: 최소화 버튼 클릭
- 최소화 → 확장: 최대화 버튼 클릭
- 기본/최소화/확장 → 숨김: Footer가 viewport에 진입할 때
- 숨김 → 기본/이전 상태: Footer가 viewport에서 벗어날 때

---

## 3. 레이아웃 및 사이즈 스펙

### 3-1. 기본 상태 (Default)

```
┌──────────────────────────────────────────┐  ← 고정 우하단
│  ✨ 안수에 대해 궁금한 것을 물어보세요     │
│  [                                ] [전송] │
└──────────────────────────────────────────┘
```

- **위치**: `fixed`, `bottom: 28px`, `right: 28px`
- **너비**: `560px` (모바일: `calc(100vw - 32px)`, max `560px`)
- **높이**: `auto` (콘텐츠에 맞게)
- **padding**: `16px 20px`
- **border-radius**: `20px`

### 3-2. 확장 상태 (Expanded)

```
┌──────────────────────────────────────────┐  ← 고정 우하단
│  ✨ AI Assistant              [─] [✕]    │  ← 헤더: 타이틀 + 최소화 버튼
├──────────────────────────────────────────┤
│                                          │
│  [AI 응답 말풍선]                        │
│                        [사용자 말풍선]   │
│  [AI 응답 말풍선]                        │
│                                          │
├──────────────────────────────────────────┤
│  [                                ] [전송] │  ← 입력창
└──────────────────────────────────────────┘
```

- **위치**: `fixed`, `bottom: 28px`, `right: 28px`
- **너비**: `560px` (모바일: `calc(100vw - 24px)`, max `560px`)
- **높이**: `680px` (모바일: `75vh`, max `680px`)
- **border-radius**: `24px`
- 헤더 높이: `56px`
- 입력 영역 높이: `80px`
- 메시지 영역: 나머지 (`overflow-y: auto`, 커스텀 스크롤)

### 3-3. 최소화 상태 (Minimized)

```
                    [✨ AI Chat ▲]  ← 우하단 고정 소형 버튼
```

- **위치**: `fixed`, `bottom: 28px`, `right: 28px`
- **너비**: `auto`
- **padding**: `10px 20px`
- **border-radius**: `999px` (pill shape)

---

## 4. 애니메이션 스펙

| 전환                       | 애니메이션                                                   |
| -------------------------- | ------------------------------------------------------------ |
| 기본 → 확장                | scale + opacity, `300ms ease-in-out`                         |
| 확장 → 최소화              | scale-down + opacity, `250ms ease-in-out`                    |
| 최소화 → 확장              | scale-up + opacity, `300ms ease-in-out`                      |
| 페이드아웃 (스크롤 최하단) | opacity 1→0, transform translateY(12px), `400ms ease-in-out` |
| 페이드인 (스크롤 복귀)     | opacity 0→1, transform translateY(0), `400ms ease-in-out`    |

---

## 5. Glassmorphism 디자인 스펙

기존 포트폴리오 컬러 시스템(`--color-brand-blue`, `--color-brand-purple`, `--color-point`)과 조화를 이루도록 설계.

### 배경

- `background: rgba(255, 255, 255, 0.12)`
- `backdrop-filter: blur(20px) saturate(180%)`
- `border: 1px solid rgba(255, 255, 255, 0.25)`

### 그라디언트 (헤더/버튼 포인트)

- `background: linear-gradient(135deg, rgba(139, 170, 255, 0.3), rgba(174, 134, 255, 0.3))`
  - `--color-brand-blue: #8baaff`, `--color-brand-purple: #ae86ff` 활용

### 말풍선

- **AI 응답**: `background: rgba(139, 170, 255, 0.15)`, `border: 1px solid rgba(139, 170, 255, 0.3)`
- **사용자**: `background: rgba(72, 117, 235, 0.85)` (포인트 컬러), `color: white`

### 그림자

- `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(139, 170, 255, 0.1)`

---

## 6. 컴포넌트 구조

```
src/
└── components/
    └── AiChat/
        ├── index.tsx           ← 메인 컨테이너 (상태 관리, 스크롤 감지)
        ├── ChatHeader.tsx      ← 확장 상태 헤더 (타이틀 + 최소화 버튼)
        ├── ChatMessages.tsx    ← 메시지 목록 + 자동 스크롤
        ├── ChatMessage.tsx     ← 개별 말풍선 (AI / User 타입 분기)
        ├── ChatInput.tsx       ← 입력창 + 전송 버튼
        └── MinimizedButton.tsx ← 최소화 상태 버튼
```

### 타입 정의 (src/types/index.ts에 추가)

```typescript
export type ChatState = "default" | "expanded" | "minimized";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
```

---

## 7. 스크롤 감지 로직

`IntersectionObserver`를 사용하여 Footer 요소가 viewport에 진입하면 채팅 UI를 숨긴다.

```
Footer 진입 감지 → isFooterVisible: true → opacity 0, translateY 12px (ease-in-out 400ms)
Footer 이탈 감지 → isFooterVisible: false → opacity 1, translateY 0 (ease-in-out 400ms)
```

- `threshold: 0.1` — Footer가 10% 이상 보이면 숨김 처리
- `pointer-events: none` — 숨김 상태에서 클릭 이벤트 차단

---

## 8. 입력 UX 스펙

- **placeholder**: `"저의 경험에 대해 무엇이든 물어보세요 :)"`
- **전송 방법**: Enter 키 또는 전송 버튼 클릭 (`Shift + Enter` = 줄바꿈)
- **입력창**: `textarea` (자동 높이 확장, 최대 4줄)
- **전송 버튼**: 텍스트가 있을 때만 활성화 (비활성 시 opacity 50%)
- **로딩 상태**: AI 응답 대기 중 점 3개 애니메이션 표시 (`...`)

---

## 9. 접근성

- 채팅 버튼에 `aria-label` 적용
- 메시지 목록에 `role="log"`, `aria-live="polite"` 적용
- 키보드 포커스 트랩 (확장 상태에서 Tab은 채팅 내부 순환)
- `prefers-reduced-motion`에서는 전환 애니메이션 비활성화

---

## 10. 구현 파일 목록

| 파일                                        | 역할                                 |
| ------------------------------------------- | ------------------------------------ |
| `src/components/AiChat/index.tsx`           | 메인 컴포넌트, 상태 관리             |
| `src/components/AiChat/ChatHeader.tsx`      | 확장 상태 헤더                       |
| `src/components/AiChat/ChatMessages.tsx`    | 메시지 영역                          |
| `src/components/AiChat/ChatMessage.tsx`     | 말풍선 단위 컴포넌트                 |
| `src/components/AiChat/ChatInput.tsx`       | 텍스트 입력 + 전송                   |
| `src/components/AiChat/MinimizedButton.tsx` | 최소화 상태 버튼                     |
| `src/components/Home.tsx`                   | `<AiChat />` 마운트                  |
| `src/types/index.ts`                        | `ChatState`, `ChatMessage` 타입 추가 |

---

## 11. 구현 제외 범위 (이번 단계)

- 실제 AI 에이전트 API 연결 (다음 단계에서 진행)
- 대화 내역 영구 저장 (localStorage 등)
- 다국어 지원

---

## 12. 참고 레퍼런스

- **Gemini**: 우하단 플로팅, pill 형태 입력창, 부드러운 확장 애니메이션
- **Claude**: 메시지 간격/폰트, 로딩 스피너 스타일
- **Glassmorphism**: backdrop-filter blur, 반투명 배경, 섬세한 border
