# AI 채팅 UI 수정 기획 (v2)

## 변경 사항 요약

| # | 항목 | 현재 | 변경 후 |
|---|------|------|---------|
| 1 | 위치 | 우하단 고정 (`right: 28px`) | 하단 가운데 고정 (`left: 50%, translateX(-50%)`) |
| 2 | 기본 상태 UI | 상단 레이블 + 입력창 2단 구조 | 입력창만 (placeholder로 대체) |
| 3 | 최소화 동작 | → 최소화 상태 (pill 버튼) | → 기본 상태로 복귀 |
| 4 | 배경 스타일 | 커스텀 glassmorphism | 제공된 `.glass-card` CSS 적용 |

---

## 1. 위치 변경

**현재**
```
position: fixed
bottom: 28px
right: 28px
```

**변경 후**
```
position: fixed
bottom: 28px
left: 50%
transform: translateX(-50%)
```

framer-motion `motion.div`에서는 `style={{ left: "50%", translateX: "-50%" }}`로 처리.

---

## 2. 기본 상태 UI 단순화

**현재 구조**
```
┌──────────────────────────────────────────┐
│ ✨ 안수에 대해 무엇이든 물어보세요          │  ← 상단 레이블 (제거)
├──────────────────────────────────────────┤
│ [메세지를 입력하세요...          ] [전송]   │  ← 입력창
└──────────────────────────────────────────┘
```

**변경 후 구조**
```
┌──────────────────────────────────────────┐
│ [안수에 대해 무엇이든 물어보세요 :) ] [전송] │  ← 입력창 (placeholder로 통합)
└──────────────────────────────────────────┘
```

- 상단 레이블 섹션(`defaultLabelStyle` div) 완전 제거
- `ChatInput`의 placeholder를 기본 상태에서 `"안수에 대해 무엇이든 물어보세요 :)"`로 설정
- expanded 상태에서는 기존 `"메세지를 입력하세요..."` 유지

---

## 3. 최소화 동작 변경

**현재 흐름**
```
expanded → minimized (pill 버튼) → expanded
```

**변경 후 흐름**
```
expanded → default (기본 입력창) → expanded (메세지 전송 시)
```

- `ChatState` 타입에서 `"minimized"` 제거 → `"default" | "expanded"`만 유지
- `MinimizedButton.tsx` 컴포넌트 삭제
- `ChatHeader`의 최소화 버튼 클릭 시 `setChatState("default")` 호출
- 기존 대화 내역(`messages`)은 초기화하지 않고 유지 (expanded로 재진입 시 이어서 볼 수 있음)
  - 단, 기본 상태에서 새 메시지 전송 시에는 기존 내역에 추가하는 방식으로 변경

---

## 4. 배경 스타일 (glass-card CSS 적용)

제공된 CSS를 React inline style로 변환해서 적용.

**배경 및 테두리**
```ts
const panelStyle = {
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 30px 15px rgba(255, 255, 255, 1.5)
  `,
}
```

**`::before` / `::after` 처리**

CSS 가상 요소는 inline style로 표현 불가 → `<div>` 요소 + absolute 포지셔닝으로 대체.

```
┌──────────────────────────────────────────┐  ← ::before (상단 수평 하이라이트 선)
│                                          │
│  ← ::after (좌측 수직 하이라이트 선)     │
│                                          │
└──────────────────────────────────────────┘
```

```tsx
{/* ::before 대체: 상단 수평 그라디언트 선 */}
<div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)" }} />

{/* ::after 대체: 좌측 수직 그라디언트 선 */}
<div className="absolute top-0 left-0 w-px h-full pointer-events-none"
  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))" }} />
```

---

## 영향 받는 파일

| 파일 | 변경 내용 |
|------|-----------|
| `AiChat/index.tsx` | 위치 변경, 레이블 제거, minimized 상태 제거, 배경 스타일 교체, 가상요소 div 추가 |
| `AiChat/ChatInput.tsx` | placeholder prop 추가 (기본/확장 상태별 다른 텍스트) |
| `AiChat/MinimizedButton.tsx` | **삭제** |
| `src/types/index.ts` | `ChatState`에서 `"minimized"` 제거 |

---

## 변경하지 않는 것

- 너비 560px, 높이 680px (확장 시) 유지
- framer-motion 애니메이션 유지
- 메시지 말풍선 스타일 유지
- Footer IntersectionObserver 숨김 로직 유지
- Enter 전송 / Shift+Enter 줄바꿈 유지
