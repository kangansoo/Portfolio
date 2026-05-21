# 현재 진행 중인 작업

> 작업 완료 시 해당 항목을 `docs/HISTORY.md`로 이동

---

## 문서 정리

- [x] `CLAUDE.md` 프로젝트 루트에 생성 (2025-05-15)
- [x] `docs/HISTORY.md` 정비 (v1~v5 완료 항목 정리)
- [x] `docs/WORK.md` 정비 (이 파일)
- [ ] 완료된 plan 문서들(`ai-chat-*-plan.md`) 보관 여부 결정

---

## 후속 작업 후보 (우선순위 미정)

### 기존 상세 페이지 파일 삭제

리팩토링 완료 후 더 이상 import되지 않는 파일들. 사용자가 직접 확인 후 삭제 예정.

```
src/pages/LayUp.tsx
src/pages/NewKiz.tsx
src/pages/Pading.tsx
src/pages/Konciar.tsx
```

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
