# Design Tokens

> 소스: `src/App.css` `@theme` 블록 + 다크모드 오버라이드(`html.dark`)

---

## 폰트

| Tailwind 클래스    | font-family    | 제공 방식                     | 사용 위치                           |
| ------------------ | -------------- | ----------------------------- | ----------------------------------- |
| `font-pretendard`  | Pretendard     | 로컬 (`public/fonts/*.woff2`) | 기본 본문, 대부분의 UI              |
| `font-nanumsquare` | NanumSquare    | CDN                           | 프로젝트 카드 제목, 섹션 제목       |
| `font-nexon`       | NexonLv1Gothic | CDN                           | 카드 설명, 경력 본문 등 부가 텍스트 |

**Pretendard 지원 웨이트**: 100 · 200 · 300 · 400 · 500 · 600 · 700 · 800 · 900

---

## 색상 토큰

### 페이지 배경

| 토큰              | 라이트    | 다크      |
| ----------------- | --------- | --------- |
| `--color-main-bg` | `#f8f8f8` | `#111318` |

---

### 글자 색 — 시맨틱 토큰

| 토큰                   | Tailwind 클래스     | 라이트    | 다크      | 용도                                  |
| ---------------------- | ------------------- | --------- | --------- | ------------------------------------- |
| `--color-font-title`   | `text-font-title`   | `#3a3c3c` | `#eaecf4` | 섹션 제목, 카드 제목, 페이지 h1/h2/h3 |
| `--color-font-body`    | `text-font-body`    | `#3a3c3c` | `#CCD0DB` | 주요 본문 단락, 리스트 텍스트         |
| `--color-font-sub`     | `text-font-sub`     | `#646666` | `#B4BBD0` | 보조 설명, 메타 라벨, 부제            |
| `--color-font-caption` | `text-font-caption` | `#9e9e9e` | `#A4ADC6` | 메타 정보, placeholder, 비활성 아이콘 |
| `--color-point`        | `text-point`        | `#4875eb` | `#7fa2ff` | 강조 텍스트, 링크, nav 밑줄           |
| `--color-sub`          | `text-sub`          | `#4682b4` | —         | 서브 포인트                           |

> `--color-font-color` (`text-font-color`) 는 레거시. 신규 코드에는 위 시맨틱 토큰 사용.

---

### Landing 스케일 (어두운 뉴트럴 계열)

| 토큰                  | Tailwind 클래스    | 값        | 용도                                             |
| --------------------- | ------------------ | --------- | ------------------------------------------------ |
| `--color-landing-100` | `text-landing-100` | `#e4e5e5` | —                                                |
| `--color-landing-300` | `text-landing-300` | `#a2a3a3` | —                                                |
| `--color-landing-500` | `text-landing-500` | `#646666` | ~~상세 페이지 메타~~ → `text-font-sub`로 대체됨  |
| `--color-landing-700` | `text-landing-700` | `#3a3c3c` | ~~상세 페이지 본문~~ → `text-font-body`로 대체됨 |
| `--color-landing-900` | `text-landing-900` | `#1f2121` | —                                                |

> 컴포넌트 텍스트 용도로는 더 이상 사용하지 않음. 시맨틱 토큰(`text-font-*`)으로 전환 완료. `landing-600`은 미정의 상태이며 참조 코드 없음.

---

### Gray 스케일

| 토큰               | Tailwind 클래스   | 값        | 실제 사용 위치              |
| ------------------ | ----------------- | --------- | --------------------------- |
| `--color-gray-50`  | `bg-gray-50`      | `#fafafa` | —                           |
| `--color-gray-100` | `bg-gray-100`     | `#f5f5f5` | —                           |
| `--color-gray-200` | `border-gray-200` | `#eeeeee` | 이미지 보더, 구분선         |
| `--color-gray-300` | `border-gray-300` | `#e0e0e0` | 헤더 하단 보더              |
| `--color-gray-400` | `text-gray-400`   | `#bdbdbd` | —                           |
| `--color-gray-500` | `text-gray-500`   | `#9e9e9e` | —                           |
| `--color-gray-600` | `text-gray-600`   | `#757575` | —                           |
| `--color-gray-700` | `bg-gray-700`     | `#616161` | 다크모드 hover 배경         |
| `--color-gray-800` | `bg-gray-800`     | `#424242` | 다크모드 캐러셀 화살표 배경 |
| `--color-gray-900` | `text-gray-900`   | `#212121` | —                           |

> 텍스트 색 용도(`text-gray-500`~`text-gray-900`)는 시맨틱 토큰(`text-font-*`)으로 전환 완료. Gray 스케일은 배경·보더 용도로만 사용.

---

### Blue Gray 스케일

| 토큰                    | 값        |
| ----------------------- | --------- |
| `--color-blue-gray-50`  | `#eceff1` |
| `--color-blue-gray-100` | `#cfd8dc` |
| `--color-blue-gray-200` | `#b0bec5` |
| `--color-blue-gray-300` | `#90a4ae` |
| `--color-blue-gray-400` | `#78909c` |
| `--color-blue-gray-500` | `#607d8b` |
| `--color-blue-gray-600` | `#546e7a` |
| `--color-blue-gray-700` | `#455a64` |
| `--color-blue-gray-800` | `#37474f` |
| `--color-blue-gray-900` | `#263238` |

> 현재 컴포넌트에서 직접 사용되지 않음. 향후 확장용.

---

### 브랜드 / 포인트

| 토큰                   | Tailwind 클래스     | 값        | 용도                        |
| ---------------------- | ------------------- | --------- | --------------------------- |
| `--color-brand-blue`   | `text-brand-blue`   | `#8baaff` | 그라디언트 시작색           |
| `--color-brand-purple` | `text-brand-purple` | `#ae86ff` | 그라디언트 끝색, AI 로딩 링 |
| `--color-brand-light`  | `text-brand-light`  | `#e0e7ff` | 브랜드 연한 파랑            |

---

### 프로젝트 전용 색상

| 토큰                  | Tailwind 클래스    | 값        | 용도               |
| --------------------- | ------------------ | --------- | ------------------ |
| `--color-perplexity`  | `text-perplexity`  | `#31b8c6` | 퍼플렉시티 민트    |
| `--color-nexon-green` | `text-nexon-green` | `#b4e114` | 넥슨 브랜드 그린   |
| `--color-nexon-navy`  | `text-nexon-navy`  | `#0a3255` | 넥슨 브랜드 네이비 |
