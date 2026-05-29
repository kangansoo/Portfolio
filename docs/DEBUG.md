# Debug Log

> 포트폴리오를 개발하며 발생하는 버그를 해결하는 기록
> **반드시 최근 날짜가 맨 위로 오도록 작성. 날짜 내림차순으로 작성**

---

## 2026-05-26 — AI Chat 글래스모피즘 배포 환경 깨짐

### 증상

- 로컬(dev 서버): 글래스모피즘 반투명 + blur 효과 정상
- 배포(prod 빌드): 패널이 완전 투명 — blur 없음, 배경이 그대로 비쳐 보임

### 원인

**트리거**: `0755b57` 커밋에서 `App.tsx`에 `React.lazy + Suspense` 도입

**메커니즘**:

브라우저는 `opacity`, `transform` 등의 애니메이션을 GPU에서 처리하기 위해 해당 요소를 **별도의 GPU 레이어**로 분리한다. Framer Motion은 이를 위해 `will-change: transform`을 자동 적용한다.

`backdrop-filter`는 자신의 "뒤에 있는 것"을 블러하는데, **부모가 GPU 레이어로 분리되면 그 레이어 내부의 빈 공간만 블러**하게 된다 — 페이지 배경이 보이지 않아 투명하게 보인다.

```
[페이지 배경] ──────────────────── GPU Layer 0
[부모 motion.div]  ←── will-change: transform 적용 → GPU Layer 1 (새 레이어)
  └─ [.ai-panel]  backdrop-filter: blur(18px)
       → Layer 1 내부(빈 공간)를 블러 → 아무것도 없음 → 투명
```

**왜 lazy 도입 전에는 됐나**:

`Suspense` 없이 동기 import하면 애니메이션 완료 후 Framer Motion이 `will-change`를 제거해 GPU 레이어가 사라진다. 그러면 `backdrop-filter`가 페이지 배경을 정상 블러한다.

`React.lazy + Suspense` 도입 후에는 React 18의 concurrent mode가 `Suspense` reveal 과정에서 Framer Motion의 `will-change` 제거를 막는다. 결과적으로 GPU 레이어가 영구 유지되어 `backdrop-filter`가 항상 빈 공간만 블러하게 된다.

**왜 로컬에서는 증상이 없나**:

dev 모드에서는 Framer Motion의 `will-change` 최적화가 덜 공격적으로 동작해 애니메이션 후 레이어가 정리된다.

### 해결

**파일**: `src/components/AiChat/index.tsx`

`backdrop-filter`를 가진 `.ai-panel` 요소의 **부모**가 GPU 레이어를 만드는 것이 문제이므로, 부모를 제거하고 모든 애니메이션을 `.ai-panel` 자체에 직접 적용.

> 요소 자신이 GPU 레이어를 만드는 건 문제없다. 자기 뒤(페이지 배경, Layer 0)는 그대로이므로 `backdrop-filter`가 정상 블러한다.

**변경 전** — 외부 `motion.div`가 GPU 레이어 생성 → 내부 `backdrop-filter` 차단:

```jsx
<motion.div animate={{ opacity, y }}>       {/* GPU 레이어 생성 */}
  <motion.div className="ai-panel"          {/* backdrop-filter 차단됨 */}
    animate={{ height }}
  >
```

**변경 후** — `.ai-panel` 자체에 모든 애니메이션 통합:

```jsx
<motion.div
  className="ai-panel"                      {/* backdrop-filter 정상 */}
  animate={{ opacity, y, height }}          {/* 자기 자신이 GPU 레이어 */}
  transition={{
    opacity: { duration: 0.4 },
    y:       { duration: 0.4 },
    height:  { duration: 0.35 },
  }}
>
```

### 관련 커밋

| 커밋 | 내용 |
|---|---|
| `0755b57` | 원인 도입 — `React.lazy + Suspense` |
| `30e7b1f` | `src/components/AiChat/index.tsx` — motion.div 통합 (부분 수정) |

---

## 2026-05-28 — AI Chat backdrop-filter 재발 (실제 원인 완전 규명)

### 증상

- 로컬(dev), 모바일 Safari(배포): 정상
- PC Chrome(배포) + `npm run preview`: `backdrop-filter` 효과 없음 — 패널 배경만 표시

2026-05-26 수정 후에도 배포 환경 Chrome에서 지속 재발.

### 원인 1 — Tailwind v4 PostCSS가 `backdrop-filter`를 CSS class에서 제거

**가장 근본적인 원인.**

Tailwind CSS v4의 PostCSS 플러그인이 빌드 시 `.ai-panel { backdrop-filter: blur(18px) }`의 **비벤더 접두사 `backdrop-filter`를 제거**한다. `-webkit-backdrop-filter`는 그대로 남음.

Tailwind v4는 `backdrop-filter`를 자체 utility 시스템(`--tw-backdrop-blur` CSS 변수)으로 관리하며, universal selector로 아래를 모든 요소에 적용한다:

```css
* { backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) ... }
```

`.ai-panel`에 별도로 `--tw-backdrop-blur`가 설정되지 않으므로 computed value는 `none`이 된다.

**확인**: DevTools Computed 탭에서 `backdropFilter: "none"` / 빌드된 CSS에서 `.ai-panel` 규칙에 `backdrop-filter` 누락 확인.

**해결**: `backdrop-filter`를 JSX inline style로 이동 — PostCSS 처리 대상에서 제외됨.

```jsx
style={{
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  // ...
}}
```

### 원인 2 — `position: fixed` 래퍼가 compositing layer를 생성해 backdrop-filter 차단

Chrome은 스크롤 가능한 뷰에서 `position: fixed` 요소를 별도의 GPU compositing layer로 분리한다. `backdrop-filter`가 이 레이어 안의 자식 요소에 있으면, compositor는 레이어 아래 실제 페이지 콘텐츠가 아닌 **레이어 자체의 투명 배경**만 블러한다.

```
[페이지 콘텐츠] ─────────────────── Compositor Layer 0
[div.fixed] ←─ position:fixed ───── Compositor Layer 1 (Chrome 자동 분리)
  └─ [motion.div.ai-panel]
       backdrop-filter: blur(18px) → Layer 1 내부(투명)만 블러 → 효과 없음
```

**확인**: DevTools Layers 패널 — `div.fixed`의 Compositing Reasons: "Is fixed position in a scrollable view." 외부 div에 직접 `backdrop-filter` 추가 시 정상 동작 확인.

**해결**: 외부 `div.fixed` 래퍼를 제거하고 `motion.div` 자체에 `position: fixed` 부여. compositor layer 루트가 곧 `backdrop-filter`를 가진 요소가 되어, 그 아래 레이어(페이지 콘텐츠)를 정상 샘플링한다.

```jsx
// Before: div.fixed(compositor layer) → motion.div(backdrop-filter 차단)
// After:  motion.div.fixed(compositor layer = backdrop-filter 요소 자체)
<motion.div
  className="ai-panel fixed z-50 ..."
  style={{ left: "50%", ... }}
  initial={{ x: "-50%", ... }}
  animate={{ x: "-50%", ... }}
>
```

### 원인 3 (보조) — App.css가 lazy chunk에 포함되어 CSS 타이밍 문제

`App.css`가 `Home.tsx`(lazy)에서 import되어, CSS가 컴포넌트 렌더 후 비동기 주입됐다. 원인 1·2 해결 후에도 초기 렌더 시 `.ai-panel`의 background/border/box-shadow 스타일이 잠시 없다가 나타나는 FOUC가 발생할 수 있었다.

**해결**: `App.css` import를 `main.tsx`로 이동 → 초기 entry CSS 번들에 포함.

### 수정 파일 요약

| 파일 | 변경 내용 |
|---|---|
| `src/components/AiChat/index.tsx` | 외부 `div.fixed` 제거, `motion.div`를 `fixed`로 변경, `backdropFilter` inline style 추가 |
| `src/main.tsx` | `App.css` import 추가 |
| `src/components/Home.tsx` | `App.css` import 제거 |
