# AI 채팅 UI 개선 기획 (v6)

## 대상 항목
1. 모바일 반응형 채팅 UI 보완
3. 채팅 에러 상태 UI 개선

---

## 1. 모바일 반응형 채팅 UI

### 현재 문제

| 항목 | 현재 값 | 모바일 문제 |
|------|---------|-----------|
| 확장 높이 | `680px` 고정 | 모바일 세로 해상도(667~896px)에서 화면 대부분을 차지하거나 넘침 |
| 하단 위치 | `bottom: 78px` | 브라우저 주소창/홈바 영역과 겹칠 수 있음 |
| 가상 키보드 | 미처리 | 키보드 열릴 때 패널이 가려지거나 레이아웃 깨짐 |
| 너비 | `calc(100vw - 40px)` | 좌우 여백 문제 없음 ✅ |

---

### 해결 방안

#### 1-A. 동적 확장 높이 (`useExpandedHeight` 훅 신설)

`visualViewport` API를 사용해 **가상 키보드까지 감지**하는 훅을 만든다.

```
PC (≥ 640px)  → EXPANDED_HEIGHT = 680px (고정)
모바일 (< 640px) → min(680, visualViewport.height - 90)
                  → 화면의 약 85~90% 높이, 최대 680px 제한
```

- 키보드가 열리면 `visualViewport.height`가 줄어드므로 패널도 자동으로 축소됨
- `resize` 이벤트 리스너 → 상태 업데이트 → Framer Motion `animate.height` 재적용

```
Before (keyboard closed): height = min(680, 800-90) = 680px
After  (keyboard open):   height = min(680, 400-90) = 310px  ← 자동 축소
```

#### 1-B. 하단 위치 보정

모바일에서는 `bottom: 78px`이 너무 높아 콘텐츠 가림이 발생한다.

```
PC     → bottom: 78px (유지)
모바일 → bottom: 20px + env(safe-area-inset-bottom)
         iOS 홈 인디케이터 영역 자동 회피
```

JS로 `window.innerWidth`를 읽어 동적으로 `bottom` 값을 결정한다.

#### 1-C. 확장 상태에서 바깥 클릭 → 터치 이벤트 추가

현재 `mousedown` 이벤트만 등록되어 있어 모바일 터치에서 바깥 탭으로 닫기가 작동하지 않을 수 있다.

```ts
document.addEventListener("mousedown", handleClickOutside)
document.addEventListener("touchstart", handleClickOutside)  // 추가
```

---

### 영향 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/hooks/useExpandedHeight.ts` | **신규** — visualViewport 기반 동적 높이 훅 |
| `src/components/AiChat/index.tsx` | `EXPANDED_HEIGHT` → 훅 값으로 교체, bottom 동적 처리, touchstart 추가 |

---

### 예상 동작

```
[모바일 기본 상태]
┌──────────────────────┐  ← bottom: 20px
│ [입력창          ][↑] │
└──────────────────────┘

[모바일 확장 - 키보드 닫힘]
┌──────────────────────┐
│ 메시지 영역           │  ← height: ~590px (화면의 90%)
│                      │
│ [입력창          ][→] │
└──────────────────────┘  ← bottom: 20px

[모바일 확장 - 키보드 열림]
┌──────────────────────┐
│ 메시지 영역           │  ← height: ~310px (자동 축소)
│ [입력창          ][→] │
└──────────────────────┘  ← 가상 키보드 바로 위
```

---

---

## 3. 채팅 에러 상태 UI 개선

### 현재 문제

에러 발생 시 일반 AI 말풍선(파란 틴트)과 동일한 스타일로 에러 텍스트만 표시된다.

- 에러인지 정상 응답인지 시각적으로 구분 불가
- 재시도(Retry) 수단이 없어 사용자가 직접 같은 내용을 다시 입력해야 함

---

### 해결 방안

#### 3-A. 에러 말풍선 스타일 분리

`ChatMessage` 타입에 `isError?: boolean` 필드를 추가하고,  
에러 메시지일 때 다른 색상/아이콘으로 렌더링한다.

```
[일반 AI 말풍선]                  [에러 말풍선]
┌─────────────────────┐           ┌─────────────────────┐
│ 안녕하세요! ...      │           │ ⚠ 응답을 불러오는   │
│                     │           │   중 오류가 발생했   │
│  (파란 틴트 배경)    │           │   습니다.           │
└─────────────────────┘           │                     │
                                  │  [↺ 다시 시도]       │
                                  │  (붉은/주황 틴트)    │
                                  └─────────────────────┘
```

에러 말풍선 스타일:
```ts
const errorBubbleStyle = {
  background: "rgba(255, 90, 70, 0.08)",
  border: "1px solid rgba(255, 90, 70, 0.22)",
}
```

아이콘: `PiWarningCircle` (react-icons/pi) 또는 유사 경고 아이콘

#### 3-B. 재시도 버튼

에러 말풍선 하단에 "다시 시도" 버튼을 추가한다.

**동작 방식:**
1. 에러 말풍선의 "다시 시도" 클릭
2. 에러 메시지 제거
3. 직전 유저 메시지를 자동으로 재전송
4. 새 로딩 상태 → 새 응답으로 교체

**재시도 흐름:**

```
messages: [초기, user("질문"), assistant(error)]
              ↓ 다시 시도 클릭
messages: [초기, user("질문")]  ← error 메시지 제거
              ↓ sendMessage("질문") 자동 호출
messages: [초기, user("질문"), assistant("")]  ← 로딩
              ↓
messages: [초기, user("질문"), assistant("정상 응답")]
```

`useChatStream`에 `retryLastMessage()` 함수를 노출하고,  
마지막 유저 쿼리를 `lastUserQueryRef`에 보관해둔다.

#### 3-C. 에러 메시지 문구 개선

| 에러 유형 | 현재 문구 | 개선 문구 |
|-----------|----------|-----------|
| 타임아웃 | "요청 시간이 초과되었습니다. 다시 시도해주세요." | "응답 시간이 초과됐어요. 잠시 후 다시 시도해 주세요." |
| 네트워크 | "응답을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." | "응답을 가져오지 못했어요. 네트워크를 확인하거나 다시 시도해 주세요." |

---

### 영향 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/types/index.ts` | `ChatMessage`에 `isError?: boolean` 추가 |
| `src/hooks/useChatStream.ts` | 에러 시 `isError: true` 세팅, `lastUserQueryRef` 추가, `retryLastMessage()` 노출 |
| `src/components/AiChat/ChatMessage.tsx` | `isError` 분기 렌더링, 에러 버블 스타일, 재시도 버튼 |
| `src/components/AiChat/ChatMessages.tsx` | `onRetry` 콜백 prop 전달 |
| `src/components/AiChat/index.tsx` | `retryLastMessage` → ChatMessages에 연결 |

---

### 예상 동작

```
[에러 발생 시]
  ○ [프로필]  ┌──────────────────────────────┐
              │ ⚠  응답을 가져오지 못했어요.  │
              │    네트워크를 확인하거나       │
              │    다시 시도해 주세요.         │
              │                              │
              │         [↺  다시 시도]        │
              └──────────────────────────────┘

[다시 시도 클릭 후]
  ○ [프로필]  (에러 버블 사라짐 + 스피너 등장)
  ○ [스피너]  ← 로딩 중...
```

---

## 구현 우선순위

| 순서 | 항목 | 이유 |
|------|------|------|
| 1 | 에러 UI (3번) | 코드 범위 작고 UX 임팩트 즉각적 |
| 2 | 모바일 반응형 (1번) | 훅 신설 포함, 테스트 필요 |
