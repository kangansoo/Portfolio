# 현재 진행 중인 작업

> 작업 완료 시 해당 항목을 `docs/HISTORY.md`로 이동

---

## [Design] 시맨틱 폰트 색상 토큰 전환

> 현재 `text-font-color/80` opacity 우회 + `text-landing-*` 팔레트 직접 참조 방식을
> 역할 기반 시맨틱 토큰으로 전환하고, 다크모드 색을 토큰별로 독립 정의한다.

### 작업 전 결정 필요

- [ ] 다크모드에서 사용할 색상 값 확정 (사용자가 직접 조사)
  - `--color-font-body` 다크값
  - `--color-font-sub` 다크값
  - `--color-font-caption` 다크값

---

### 1단계 — `App.css` 토큰 추가 및 기존 정리

**추가할 시맨틱 토큰** (`@theme` 블록):

| 토큰                   | 라이트 값 | 역할                   |
| ---------------------- | --------- | ---------------------- |
| `--color-font-title`   | `#3a3c3c` | 섹션 제목, 카드 제목   |
| `--color-font-body`    | `#3a3c3c` | 주요 본문 텍스트       |
| `--color-font-sub`     | `#646666` | 보조 설명, 부제        |
| `--color-font-caption` | `#9e9e9e` | 메타 정보, placeholder |

> `font-title`은 다크모드 별도 색 불필요 (`text-font-color` 기존 방식 유지 또는 동일 처리)

**`html.dark` 블록에 추가**:

```css
html.dark {
  --color-font-title: #eaecf4;
  --color-font-body: /* 확정 후 기입 */;
  --color-font-sub: /* 확정 후 기입 */;
  --color-font-caption: /* 확정 후 기입 */;
}
```

**제거할 항목**:

- `@theme`의 `--color-landing-500`, `--color-landing-700` 참조 — 시맨틱 토큰으로 흡수되면 삭제 가능
- `--color-landing-600` 미정의 버그 → `--color-font-sub`으로 대체

---

### 2단계 — 기존 클래스명 → 시맨틱 토큰 교체

| 기존                          | 교체 후             | 위치                                                                                   |
| ----------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| `text-font-color` (제목 역할) | `text-font-title`   | `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Header.tsx`, `Hero.tsx`, 상세 페이지 4개 |
| `text-font-color` (본문 역할) | `text-font-body`    | 위 파일 동일, `Experience.tsx`                                                         |
| `text-font-color/80`          | `text-font-sub`     | `About.tsx`, `Skills.tsx`, `Experience.tsx`                                            |
| `text-landing-700`            | `text-font-body`    | 상세 페이지 4개 (`LayUp`, `NewKiz`, `Pading`, `Konciar`)                               |
| `text-landing-500`            | `text-font-sub`     | 상세 페이지 4개                                                                        |
| `text-landing-600`            | `text-font-sub`     | 상세 페이지 4개 (미정의 버그 수정)                                                     |
| `text-gray-900` (텍스트 용도) | `text-font-title`   | `Projects.tsx`, `AiChat/ChatMessage.tsx`, `AiChat/ChatInput.tsx`                       |
| `text-gray-800`               | `text-font-body`    | `AiChat/ChatMessage.tsx`                                                               |
| `text-gray-700`               | `text-font-sub`     | `AiChat/ChatMessage.tsx`, `ProjectFooter.tsx`                                          |
| `text-gray-500`               | `text-font-caption` | `Projects.tsx`, `Footer.tsx`, `AiChat/ChatHeader.tsx`, `AiChat/ChatInput.tsx`          |
| `text-gray-600`               | `text-font-caption` | `Projects.tsx`, `Footer.tsx`                                                           |

> `text-gray-*`는 배경·보더에서도 쓰이므로, 텍스트 용도로 쓰인 것만 교체. 배경·보더는 건드리지 않음.

---

### 3단계 — `docs/design-tokens.md` 업데이트

- 시맨틱 토큰 섹션 추가
- 제거된 `landing-*` 직접 참조 항목 반영

---

### 수정 대상 파일 목록

- `src/App.css`
- `src/components/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`
- `src/components/Experience.tsx`
- `src/components/Footer.tsx`
- `src/components/Projects.tsx`
- `src/components/ProjectFooter.tsx`
- `src/components/AiChat/ChatMessage.tsx`
- `src/components/AiChat/ChatInput.tsx`
- `src/components/AiChat/ChatHeader.tsx`
- `src/pages/LayUp.tsx`
- `src/pages/NewKiz.tsx`
- `src/pages/Pading.tsx`
- `src/pages/Konciar.tsx`

---

## 문서 정리

- [x] `CLAUDE.md` 프로젝트 루트에 생성 (2025-05-15)
- [x] `docs/HISTORY.md` 정비 (v1~v5 완료 항목 정리)
- [x] `docs/WORK.md` 정비 (이 파일)
- [ ] 완료된 plan 문서들(`ai-chat-*-plan.md`) 보관 여부 결정
