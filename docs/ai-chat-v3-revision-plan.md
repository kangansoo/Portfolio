# AI 채팅 UI 수정 기획 (v3)

## 변경 사항 요약

| # | 항목 | 현재 | 변경 후 |
|---|------|------|---------|
| 1 | 기본 상태 글래스모피즘 | 패널에는 적용, 내부 input box에 별도 흰 배경 | 내부 box 제거, 패널 배경 그대로 투과 |
| 2 | 기본 상태 최대화 버튼 | 없음 | 우측에 `+` 또는 `↑` 아이콘 버튼 추가 |
| 3 | 기본 상태 입력 구조 | 아우터 div + 이너 div (이중 박스) | 단일 레이어, 패딩만으로 정렬 (Gemini 스타일) |
| 4 | 확장 상태 헤더 | 아바타 + "AI Assistant" + 부제목 + 최소화 버튼 | 최소화 버튼(`-`)만, 배경 투명 |
| 5 | 확장 상태 구분선 | 채팅 영역과 입력창 사이 border | 제거 |

---

## 1 + 3. 기본 상태 입력 구조 (Gemini 스타일)

**현재 DOM 구조**
```
<div style={wrapperStyle}>           ← 아우터: 배경색 + borderTop
  <div style={inputBoxStyle}>        ← 이너: 흰 배경 + border + 둥근 모서리
    <textarea />
    <button />
  </div>
</div>
```

**변경 후 DOM 구조**
```
<div className="px-4 py-4 flex items-end gap-3">   ← 단일 레이어, 패딩만
  <textarea />                                        ← 배경 없음, 패널 배경 그대로
  <button />
</div>
```

- `wrapperStyle` 삭제 (borderTop, 내부 background 제거)
- `inputBoxStyle` 삭제 (흰 배경, border, boxShadow 제거)
- textarea는 `bg-transparent`, 패널의 glassmorphism이 그대로 보임
- 커서만 보이는 깔끔한 단일 입력창

---

## 2. 기본 상태 최대화 버튼

기본 상태 입력창 우측에 최대화 버튼 추가. 전송 버튼과 나란히 배치.

```
┌──────────────────────────────────────────────┐
│  [안수에 대해 무엇이든...     ] [↑ 전송] [□ 최대화] │
└──────────────────────────────────────────────┘
```

- 아이콘: `RxEnterFullScreen` 또는 `LuExpand` (expand 계열)
- 클릭 시: `setChatState("expanded")` 호출
- 확장 상태에서는 렌더링 안 함

---

## 4. 확장 상태 헤더 단순화

**현재**
```
┌─────────────────────────────────────────────┐
│ [아바타] AI Assistant / 안수에 대해...  [─]  │  ← gradient bg + borderBottom
└─────────────────────────────────────────────┘
```

**변경 후**
```
                                         [─]   ← 패널 우측 상단, 배경 없음
```

- `ChatHeader` 컴포넌트 전면 수정
- 아바타, 타이틀, 부제목, 래퍼 div 배경/border 모두 제거
- `─` 버튼만 패널 우상단에 절대 위치(`absolute top-3 right-4`)로 배치
- 버튼 감싸는 원(border) 없음, hover 시 약한 bg만

---

## 5. 채팅/입력 구분 border 제거

`ChatInput`의 `wrapperStyle`에서 `borderTop` 제거 (3번에서 `wrapperStyle` 자체가 삭제되므로 자동 해결)

---

## 영향 받는 파일

| 파일 | 변경 내용 |
|------|-----------|
| `AiChat/ChatInput.tsx` | `wrapperStyle`, `inputBoxStyle` 삭제 → 단일 레이어, 최대화 버튼 prop 추가 |
| `AiChat/ChatHeader.tsx` | 아바타/타이틀 제거, absolute 위치 최소화 버튼만 |
| `AiChat/index.tsx` | ChatHeader를 absolute 버튼으로 교체, onExpand 핸들러 추가 |
