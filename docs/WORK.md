# 현재 진행 중인 작업

> 작업 완료 시 해당 항목을 `docs/HISTORY.md`로 이동

---

## 후속 작업 후보 (우선순위 미정)

### 코드 스플리팅 적용 (선택)

현재 JS 번들 638.92 kB (gzip 203.85 kB) — Vite 500 kB 권장 초과 경고 발생.
`React.lazy()` + `Suspense`로 `ProjectDetail` 지연 로딩 시 초기 번들 ~20~40 kB 감소 예상.

```tsx
// App.tsx
const ProjectDetail = React.lazy(() => import('@/pages/ProjectDetail'))
// <Suspense fallback={...}> 래핑 필요
```

### Konciar 데이터 정리

- `src/data/projectDetails/konciar.tsx` — `img: "emailImage.png "` trailing space 제거

### plan 문서 보관 여부 결정

- `docs/ai-chat-*-plan.md` 파일들 — 완료된 기획 문서, 삭제 또는 archive 폴더 이동
