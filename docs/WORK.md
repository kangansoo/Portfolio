# 현재 진행 중인 작업

> 작업 완료 시 해당 항목을 `docs/HISTORY.md`로 이동

---

## 승인 대기: `슬기로운 자취생활` 프로젝트 추가

### 참고 자료

- `local/강안수 프레젠테이션.pptx`
- `local/대본.txt`
- S3 동영상 자료
  - `VITE_S3_URL/grocery-camera.mp4`
  - `VITE_S3_URL/receipt-camera.mp4`
  - `VITE_S3_URL/chatting.mp4`
- Notion 데이터베이스 표
  - `https://kangansoo.notion.site/Agent-37b66076b0da80a1ac38de9b4e48b095?pvs=74`
  - 임베드 코드:
    ```html
    <iframe src="https://kangansoo.notion.site/ebd//37b66076b0da80a1ac38de9b4e48b095" width="100%" height="600" frameborder="0" allowfullscreen />
    ```

### 목표

- 포트폴리오 프로젝트 목록과 상세 페이지에 `슬기로운 자취생활` 프로젝트를 추가한다.
- 발표 자료의 핵심 메시지인 **AI 협업 환경에서 지속 가능한 개발 구조를 설계하고, 생활 지원 기능을 구현한 프로젝트**라는 흐름을 유지한다.

### 추가할 프로젝트 요약

- **프로젝트명**: 슬기로운 자취생활
- **기간**: 2026.06 ~ 2026.06
- **한 줄 소개**: 자취 요리, 청년 정책 탐색, 생활 편의시설 파악까지 하나의 앱으로 독립 청년의 생활을 지원하는 서비스
- **담당 역할**: 팀장, 풀스택 개발, 인프라
- **사용 기술**: React Native, Next.js, TypeScript, PostgreSQL, Gemini API, GCP, AWS, Claude Code, Codex
- **상세 페이지 slug**: `seulgi-living`
- **핵심 포인트**:
  - AI 에이전트와 팀원이 함께 작업하는 환경에서 SDD(Spec Driven Development) 적용
  - 지침 문서 계층화를 통해 불필요한 컨텍스트 탐색과 파일 수정 범위 확장 방지
  - 모노레포 기반으로 모바일 앱, API 서버, 공통 계약 패키지 구성
  - Zod 스키마 기반 공통 계약 관리로 DTO 중복 최소화
  - Gemini API 기반 식재료/영수증 이미지 분석 기능 구현
  - GCP 기반 청년 정책/레시피 RAG 채팅 기능 구현

### 상세 페이지에 넣을 내용

#### 프로젝트 소개

- 자립 청년들이 일상에서 겪는 문제를 한 번에 해결하기 위한 올인원 생활 지원 서비스로 설명한다.
- 단순 기능 구현보다 AI를 명확히 통제하고, 팀 협업 맥락을 유지할 수 있는 개발 구조를 설계한 경험을 강조한다.

#### 주요 기능

- **AI 이미지 분석**: 식재료 또는 영수증 이미지를 Gemini API로 분석하고, 앱의 가계부/My 냉장고 기능에서 확인·관리할 수 있도록 저장
  - 첨부 자료: `VITE_S3_URL/grocery-camera.mp4`, `VITE_S3_URL/receipt-camera.mp4`
- **RAG 채팅**: 청년 정책과 레시피 정보를 자연어로 검색하고 추천받을 수 있는 채팅 기능
  - 첨부 자료: `VITE_S3_URL/chatting.mp4`
- **생활 지원 통합**: 자취 요리, 정책 탐색, 생활 편의시설 파악을 하나의 앱에서 지원

#### 맡은 역할 후보

1. **SDD 기반 AI 협업 구조 설계**
   - 문제 상황: 제한된 시간과 토큰 안에서 팀원과 AI 에이전트가 함께 작업하며 코드 충돌, 불필요한 파일 수정, 컨텍스트 오염 가능성 존재
   - 해결 방법: 기능 목적, 데이터 흐름, 예외 상황, 완료 기준을 spec 문서로 먼저 정의하고 사용자 승인 후 구현하는 흐름 적용
   - 결과: 요구사항 임의 해석을 줄이고, 수정 범위와 완료 기준을 사전에 고정해 작업 맥락 추적 가능
   - 첨부 자료: Notion 페이지 내 Agent 작업 데이터베이스 표

2. **지침 문서 계층화 및 프로젝트 아키텍처 구성**
   - 문제 상황: 명세가 쌓이면서 AI가 모든 문서를 읽을 경우 토큰/시간 낭비와 잘못된 판단 가능성 증가
   - 해결 방법: 글로벌, 프로젝트, 앱 영역, 작업 단위 순으로 지침 문서를 계층화하고 실제 작업에는 관련 영역의 규칙과 spec만 참고하도록 구성
   - 결과: 불필요한 문서 탐색을 줄이고, 모바일 앱/API 서버/공통 계약 패키지의 작업 경계를 명확히 함

3. **Gemini API 기반 이미지 분석**
   - 문제 상황: 이미지를 Base64로 변환해 바로 전송하면서 인코딩 후 데이터 용량이 증가하고 Next.js 요청 한도 4MB를 초과
   - 해결 방법: 이미지 전송 전 리사이즈와 최대 80% 압축을 적용
   - 결과: 요청 데이터 크기를 줄이고 API 전달 안정성 개선

4. **GCP 기반 RAG 채팅**
   - 문제 상황: 청년 정책과 레시피 정보를 자연어로 검색하고 최신 정책 데이터를 반영해야 함
   - 해결 방법: 매일 수집되는 청년 정책 데이터를 배치 작업으로 검색용 데이터 저장소에 적재·벡터화하고 Google AI와 연결
   - 결과: 청년 정책/레시피 정보를 RAG 기반 채팅으로 탐색 가능
   - 보안 회고: 테스트 중 인증 키가 터미널 명령어 평문 로그에 노출되어 키 폐기 및 재발급. AI 활용 전 보안 지침과 개발자 검증 책임을 강조

#### 성과/회고

- AI 활용 전 명세와 아키텍처 경계를 먼저 정하는 것이 중요함을 확인
- AI 코딩은 빠르지만 요구사항 오해와 범위 확장이 발생할 수 있어 명확한 지침이 필요
- 초기 도메인 경계와 아키텍처 설계가 충분히 탄탄하지 못했던 점은 개선 필요
- 명세의 완료 기준을 자동화 테스트로 충분히 연결하지 못한 점은 아쉬움
- 향후 구현 전 예외 흐름과 실패 정책을 더 구체화하고, 완료 기준을 자동화 테스트까지 연결할 예정

### 구현 계획

1. `src/data/projects.json`에 프로젝트 목록 카드 추가
   - `title`: `슬기로운 자취생활`
   - `description`: 발표 자료의 한 줄 소개 사용
   - `route`: `/project/seulgi-living`
   - `image`: S3에 업로드된 대표 이미지 경로 확인 후 지정
   - verify: 메인 프로젝트 캐러셀에 카드가 표시되고 상세 페이지로 이동

2. `src/data/projectDetails/seulgiLiving.tsx` 신규 작성
   - 기존 `konciar.tsx`, `layup.tsx`의 `ProjectDetailData` 구조를 따른다.
   - 발표 자료 기준으로 `projectInfo`, `features`, `roles`, `achievements`를 작성한다.
   - verify: TypeScript 타입 오류 없이 상세 데이터가 구성됨

3. `src/pages/ProjectDetail.tsx`에 데이터 매핑 추가
   - `seulgiLivingData` import
   - `dataMap`에 slug 등록
   - verify: `/project/seulgi-living` 접근 시 홈으로 리다이렉트되지 않고 상세 페이지 렌더링

4. 이미지/미디어 에셋 확인
   - `VITE_S3_URL/grocery-camera.mp4`, `VITE_S3_URL/receipt-camera.mp4`, `VITE_S3_URL/chatting.mp4`를 역할별 미디어로 사용한다.
   - 대표 이미지는 S3에 업로드된 파일명을 확인한 뒤 `projects.json`과 `headerImage`에 지정한다.
   - verify: 상세 페이지 동영상/이미지가 깨지지 않음

5. Notion 데이터베이스 표 임베드 방식 확인 및 적용
   - Notion 페이지를 웹에 게시한 뒤 `Embed this page`에서 제공하는 HTML 코드를 사용한다.
   - 제공받은 iframe URL을 `SDD 기반 AI 협업 구조 설계` 역할의 첨부 자료로 렌더링한다.
   - React JSX에서는 `frameborder`를 `frameBorder`, `allowfullscreen`을 `allowFullScreen`으로 변환한다.
   - 데이터 구조를 확장해 역할별 `embedUrl` 렌더링을 추가하는 방식을 우선 검토한다.
   - 단, Notion 원본 페이지 전체가 공개되며 하위 페이지도 게시될 수 있으므로 공개 범위를 먼저 확인한다.
   - verify: `https://kangansoo.notion.site/ebd//37b66076b0da80a1ac38de9b4e48b095`가 실제로 로드되는지 확인한다. `ebd//` 이중 슬래시로 로드되지 않으면 Notion에서 복사한 원본 embed URL을 다시 확인한다.
   - verify: 페이지에서 Notion 데이터베이스 표가 보이고, 모바일에서 가로 스크롤/높이 문제가 없는지 확인

6. 빌드 검증
   - `npm run build`
   - verify: Vite/TypeScript 빌드 성공

### 승인 후 확인할 점

- S3에 업로드된 `슬기로운 자취생활` 대표 이미지 파일명 확인
- GitHub/서비스 링크가 있다면 `projectInfo`에 추가
- Notion 페이지/데이터베이스를 공개해도 되는지 확인

---

## 후속 작업 후보 (우선순위 미정)

### Konciar 데이터 정리

- `src/data/projectDetails/konciar.tsx` — `img: "emailImage.png "` trailing space 제거

### plan 문서 보관 여부 결정

- `docs/ai-chat-*-plan.md` 파일들 — 완료된 기획 문서, 삭제 또는 archive 폴더 이동
