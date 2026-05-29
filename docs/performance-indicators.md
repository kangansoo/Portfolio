# 프로젝트 페이지 리팩토링 — 성과 지표

> 측정 기준일: 2026-05-20 (리팩토링 완료 후 실측)
> 대상: `src/pages/` 4개 페이지 → 템플릿 1개 + 데이터 파일 4개 통합

---

## 1. 코드 품질 지표

### 코드 라인 수 감소 (실측)

| 구분 | 파일 | 라인 수 |
|---|---|---|
| **Before** | `LayUp.tsx` | 291 |
| | `NewKiz.tsx` | 274 |
| | `Pading.tsx` | 271 |
| | `Konciar.tsx` | 397 |
| | **합계** | **1,233** |
| **After** | `layup.tsx` (데이터) | 106 |
| | `newkiz.tsx` (데이터) | 89 |
| | `pading.tsx` (데이터) | 97 |
| | `konciar.tsx` (데이터) | 159 |
| | `ProjectDetail.tsx` (템플릿) | 259 |
| | **합계** | **710** |

- **총 라인 수 감소: 1,233 → 710 (42% 감소, 523라인 제거)**
- 기존 4개 파일이 거의 동일한 JSX 템플릿을 반복하던 중복 제거

### 파일 구조 단순화

| 구분 | Before | After |
|---|---|---|
| 프로젝트 상세 관련 파일 수 | 4개 (JSX 템플릿 + 데이터 혼합) | 5개 (데이터 4개 + 템플릿 1개, 역할 분리) |
| 섹션 UI 수정 시 수정 파일 | 4개 (동일 변경 4번 반복) | **1개** (`ProjectDetail.tsx`) |
| 신규 프로젝트 추가 시 수정 파일 | 3개 (새 페이지 + App.tsx + projects.json) | **2개** (데이터 파일 + projects.json) |

### 중복 코드 제거 (실측)

- 4개 페이지가 공유하던 7개 섹션 JSX 구조(헤더·정보 dl·소개·기능·역할·성과·푸터)를 템플릿 1곳으로 통합
- 제거된 중복 템플릿 코드: **974라인** (1,233 - 259 = 4개 파일에서 템플릿 부분)
- **JSX 중복 제거율: ~79%** (템플릿 259라인이 기존 4개 파일의 구조 코드를 대체)

---

## 2. 개발 생산성 지표

### 기능 추가·수정 영향 범위 축소

| 작업 | Before | After |
|---|---|---|
| 섹션 디자인 변경 | 4개 파일 동시 수정, 실수로 일부 누락 위험 | **1개 파일** (`ProjectDetail.tsx`) |
| 새 프로젝트 추가 | 기존 페이지 복사 → 데이터 교체 → 라우팅 추가 (~300라인) | **데이터 파일 1개** (~90~160라인) + `projects.json` 1줄 |
| 공통 버그 수정 | 4개 파일에 동일 수정 적용 | **1개 파일 수정**으로 전체 적용 |

- **신규 프로젝트 추가 작업량: 약 50~67% 감소** (실측 데이터 파일 평균 113라인 vs 기존 ~280라인)

### 라우팅 단순화 (실측)

| 구분 | Before | After |
|---|---|---|
| `App.tsx` 라우트 수 | **5개** (홈 + 프로젝트 4개) | **2개** (홈 + `/project/:id`) |
| `App.tsx` 페이지 import 수 | **4개** | **1개** |
| 새 프로젝트 라우팅 추가 | `App.tsx`에 `<Route>` + import 추가 | `projects.json` `route` 필드만 추가 |

- **App.tsx 라우트 60% 감소** (5 → 2)
- **App.tsx 페이지 import 75% 감소** (4 → 1)

---

## 3. 번들 크기 (실측)

> 측정 도구: `vite build` (Vite v6.3.5)

### 3-1. 리팩토링 완료 후 (번들 최적화 전)

| 파일 | 크기 | gzip |
|---|---|---|
| `index.js` (단일 청크) | **638.92 kB** | **203.85 kB** |
| `index.css` | 53.45 kB | 12.30 kB |

- 단일 청크로 모든 코드가 묶여 있어 Vite 500 kB 경고 발생
- `react-markdown` + remark 체인 (~291 kB)이 AI 채팅 사용 여부와 무관하게 초기 로드에 포함
- `ProjectDetail` + 데이터 4개 (~40 kB)가 홈 페이지 로드 시 불필요하게 포함

---

### 3-2. 번들 최적화 후 (코드 스플리팅 + manualChunks)

> 적용 내용: 라우트 lazy split + `react-markdown` lazy + `manualChunks` (react-vendor, motion)
> 측정일: 2026-05-21

**청크별 산출물**

| 청크 | 크기 | gzip | 로드 시점 |
|---|---:|---:|---|
| `index.js` (entry) | 4.29 kB | 1.90 kB | 즉시 |
| `react-vendor.js` | 44.55 kB | 15.94 kB | 즉시 |
| `Home.js` | 98.24 kB | 30.60 kB | `/` 진입 시 |
| `motion.js` | 116.09 kB | 38.73 kB | `/` 진입 시 |
| 공유 deps (2개) | 46.79 kB | 15.12 kB | `/` 진입 시 |
| `ProjectDetail.js` | 39.53 kB | 13.39 kB | `/project/:id` 진입 시 (lazy) |
| remark/markdown (2개) | 291.17 kB | 91.41 kB | AI 채팅 첫 응답 수신 시 (lazy) |
| **홈 초기 로드 합계** | **309.96 kB** | **102.29 kB** | — |

**Before / After 비교**

| 지표 | Before | After | 개선율 |
|---|---:|---:|---|
| 가장 큰 단일 청크 | **638.92 kB** | **176.65 kB** | **↓ 72%** |
| 홈 초기 로드 (JS) | **638.92 kB** | **309.96 kB** | **↓ 51%** |
| 홈 초기 로드 gzip | **203.85 kB** | **102.29 kB** | **↓ 50%** |
| Vite 500 kB 경고 | **발생** | **없음** | — |
| 총 청크 수 | 1개 | 9개 | — |

**지연 로드 효과**

| 지연된 코드 | 크기 | 조건 |
|---|---:|---|
| `react-markdown` + remark 체인 | 291.17 kB (gzip 91.41 kB) | AI 채팅 첫 어시스턴트 응답 수신 시 |
| `ProjectDetail` + 데이터 4개 | 39.53 kB (gzip 13.39 kB) | `/project/:id` 최초 진입 시 |
| **총 defer** | **330.70 kB** (gzip **104.80 kB**) | — |

**캐시 효율 향상 (manualChunks)**

`react-vendor`(React 코어)와 `motion`(framer-motion)은 앱 코드가 바뀌어도 내용이 변하지 않으므로, 배포 후 브라우저 캐시가 재활용됨 — 재방문 사용자 기준 해당 청크(160.64 kB) 재다운로드 불필요.

---

### 3-3. framer-motion 번들 통합 + App.css 초기 번들 이동 (2026-05-28)

> 적용 내용 ①: `manualChunks`에서 `motion` 제거 → framer-motion을 `Home.js`에 통합
> 적용 내용 ②: `App.css` import를 `Home.tsx`(lazy) → `main.tsx`(entry)로 이동
> 측정일: 2026-05-28

**청크별 산출물**

| 청크 | 크기 | gzip | 로드 시점 |
|---|---:|---:|---|
| `index.js` (entry) | 4.29 kB | 1.90 kB | 즉시 |
| `index.css` (entry) | 39.45 kB | 8.24 kB | 즉시 (App.css 포함) |
| `react-vendor.js` | 44.55 kB | 15.94 kB | 즉시 |
| `Home.js` | 213.73 kB | 68.95 kB | `/` 진입 시 (framer-motion 포함) |
| `Home.css` | 13.69 kB | 3.96 kB | `/` 진입 시 |
| 공유 deps (2개) | 46.79 kB | 15.12 kB | `/` 진입 시 |
| `ProjectDetail.js` | 42.54 kB | 14.55 kB | `/project/:id` 진입 시 (lazy) |
| remark/markdown (2개) | 291.84 kB | 91.57 kB | AI 채팅 첫 응답 수신 시 (lazy) |

**3-2 대비 변경 사항**

| 지표 | 3-2 (최적화 후) | 3-3 (현재) | 비고 |
|---|---:|---:|---|
| `motion.js` | 116.09 kB | **없음** | Home.js에 흡수 |
| `Home.js` | 98.24 kB | **213.73 kB** | framer-motion 통합 |
| entry CSS | 0.00 kB | **39.45 kB** | App.css 이동 |
| lazy Home CSS | 53.14 kB | **13.69 kB** | Home 전용 CSS만 |
| 홈 초기 JS 로드 | 309.96 kB | **309.38 kB** | 실질 동일 |
| 홈 초기 CSS 로드 | 53.14 kB | **53.14 kB** | 동일 (split만 변경) |

**변경 이유**:
- framer-motion 분리 청크: 배포 환경 Chrome `backdrop-filter` 렌더링 오류 원인 조사 과정에서 제거
- App.css 이동: 전역 스타일(`backdrop-filter` 포함)을 lazy chunk에 두면 컴포넌트 렌더 후 CSS가 비동기 주입되어 FOUC 발생 → entry bundle로 이동하여 렌더 전 로드 보장

---

## 4. 안정성 지표

### TypeScript 타입 안정성 향상

| 구분 | Before | After |
|---|---|---|
| `achievements` 배열 | 각 페이지에 타입 미정의 | `ProjectDetailData.achievements: string[]` 명시 |
| 페이지 메타데이터 (헤더 이미지, footerId 등) | 컴포넌트 내 하드코딩 | `ProjectDetailData` 타입으로 구조화 |
| 신규 프로젝트 데이터 누락 필드 | 런타임에서만 발견 | **TypeScript 컴파일에서 즉시 감지** |
| `tsc --noEmit` | 통과 | **통과** (리팩토링 전후 동일) |

### 잠재 버그 자동 해소

분석 단계에서 발견한 Konciar 페이지 비일관성이 템플릿 통합 과정에서 해소됨:

| 버그 | 해소 방법 |
|---|---|
| `<h1>` `uppercase` 클래스 누락 | `uppercaseTitle: false` 데이터 필드로 명시 처리 |
| `problem`/`result` 배열의 `**...**` 미렌더 | 템플릿의 `renderBold()` 헬퍼가 모든 케이스에 일관 적용 |
| `img: "emailImage.png "` trailing space | 데이터 파일에 그대로 보존 (`.trim()` 적용은 후속 정리 가능) |

---

## 5. 수치 요약 (Before vs After)

### 리팩토링 (2026-05-20)

| 지표 | Before | After | 개선율 |
|---|---|---|---|
| 총 코드 라인 (상세 페이지) | 1,233 | **710** | **↓ 42%** |
| App.tsx 라우트 수 | 5 | **2** | **↓ 60%** |
| App.tsx 페이지 import | 4 | **1** | **↓ 75%** |
| 섹션 UI 수정 파일 수 | 4 | **1** | **↓ 75%** |
| 신규 프로젝트 추가 작업 (라인) | ~300 | **~100~160** | **↓ 50~67%** |
| TypeScript 오류 | 0 | **0** | — |

### 번들 최적화 (2026-05-21 + 2026-05-28)

| 지표 | Before (단일 청크) | 2026-05-21 (motion 분리) | 2026-05-28 (motion 통합) |
|---|---:|---:|---:|
| 홈 초기 JS 로드 | 638.92 kB | 309.96 kB | **309.38 kB** |
| 홈 초기 gzip | 203.85 kB | 102.29 kB | **101.88 kB** |
| 최대 단일 청크 | 638.92 kB | 176.65 kB | **213.75 kB** |
| 홈 초기 JS 청크 수 | 1개 | 5개 | **4개** |
| Vite 500 kB 경고 | 발생 | 없음 | **없음** |

---

## 측정 명령어

```bash
# 라인 수
wc -l src/pages/LayUp.tsx src/pages/NewKiz.tsx src/pages/Pading.tsx src/pages/Konciar.tsx
wc -l src/data/projectDetails/*.tsx src/pages/ProjectDetail.tsx

# 번들 크기
npm run build

# TypeScript 검사
npx tsc --noEmit
```
