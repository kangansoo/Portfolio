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

| 토큰                           | Tailwind 클래스            | 라이트    | 다크      | 용도                        |
| ------------------------------ | -------------------------- | --------- | --------- | --------------------------- |
| `--color-main-bg`              | `bg-main-bg`               | `#f8f8f8` | `#1f2121` | 전체 페이지 배경            |
| `--color-sub-bg`               | `bg-sub-bg`                | `#ffffff` | `#25272a` | Header, Projects 카드 배경  |
| `--color-projects-section-bg`  | `bg-projects-section-bg`   | `#d4e0ea` | `#2f3336` | Projects 섹션 배경          |
| `--color-footer-bg`            | `bg-footer-bg`             | `#1f2121` | `#1a1919` | Footer 배경                 |

---

### 글자 색 — 시맨틱 토큰

| 토큰                   | Tailwind 클래스     | 라이트    | 다크      | 용도                                  |
| ---------------------- | ------------------- | --------- | --------- | ------------------------------------- |
| `--color-font-title`   | `text-font-title`   | `#3a3c3c` | `#eaecf4` | 섹션 제목, 카드 제목, 페이지 h1/h2/h3 |
| `--color-font-body`    | `text-font-body`    | `#3a3c3c` | `#CCD0DB` | 주요 본문 단락, 리스트 텍스트         |
| `--color-font-sub`     | `text-font-sub`     | `#646666` | `#B4BBD0` | 보조 설명, 메타 라벨, 부제            |
| `--color-font-caption` | `text-font-caption` | `#9e9e9e` | `#A4ADC6` | 메타 정보, placeholder, 비활성 아이콘 |
| `--color-point`        | `text-point`        | `#4875eb` | `#7fa2ff` | 강조 텍스트, 링크, nav 밑줄           |

---

### Landing Color

| 토큰               | Tailwind 클래스 | 값        | 용도                       |
| ------------------ | --------------- | --------- | -------------------------- |
| `--color-landing`  | `bg-landing`    | `#1f2121` | LandingComponent 전체 배경 |

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

### 브랜드 / 포인트

| 토큰                   | Tailwind 클래스     | 라이트    | 다크      | 용도                                     |
| ---------------------- | ------------------- | --------- | --------- | ---------------------------------------- |
| `--color-brand-blue`   | `text-brand-blue`   | `#8baaff` | `#7a9ce8` | 그라디언트 시작색, AI 링크 다크 텍스트   |
| `--color-brand-purple` | `text-brand-purple` | `#ae86ff` | `#c4a8ff` | 그라디언트 끝색, AI 로딩 링, 링크 hover  |
| `--color-brand-pink`   | `text-brand-pink`   | `#f472b6` | `#e06aaa` | AI 로딩 링 핑크 단계                     |
