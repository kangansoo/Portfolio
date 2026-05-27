# Debug Log

> 배포 환경에서만 재현되는 버그, 원인 분석, 해결 방법 기록

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
| 수정 커밋 | `src/components/AiChat/index.tsx` — motion.div 통합 |
