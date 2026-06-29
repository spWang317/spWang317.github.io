# 개인 웹사이트 (Astro · 한/영)

한 페이지 스크롤형 학술 개인 사이트. 다크모드 · 언어토글 · 스크롤 애니메이션 내장.
**호스팅 비용 0원** (GitHub Pages). 구독 없음.

## 1. 내용 고치기 (제일 중요)

거의 모든 텍스트는 **`src/data/content.ts` 한 파일**에만 있습니다.
`✏️` 표시된 곳을 본인 정보로 바꾸세요:

- `profile.name` — 이름 (한/영)
- `profile.email` — 공개 이메일 (없으면 `''`)
- `profile.avatar` — `public/`에 사진을 넣고 파일명 적기 (비우면 이름 첫 글자 원형)
- `profile.links` — CV·Scholar·GitHub 등 (CV는 `public/cv.pdf`로 넣기)
- `about` — 소개 글
- `research` / `publications` / `teaching` — 항목 추가·삭제

메뉴·버튼 같은 고정 문구는 `src/i18n/ui.ts`.

## 2. 로컬에서 보기

```bash
npm install      # 최초 1회
npm run dev      # http://localhost:4321  (영어판: /en/)
```

## 3. 배포 (GitHub Pages, 무료)

1. `astro.config.mjs` 상단 주석을 읽고 `site` / `base` 한 줄을 본인 저장소에 맞게 수정
2. GitHub에 새 저장소 생성 후 푸시
3. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정
4. `main`에 푸시할 때마다 자동 배포 (`.github/workflows/deploy.yml`)

커스텀 도메인을 붙이려면 도메인만 구입(연 ~1.5만원, 구독 아님)하고
`astro.config.mjs`의 `site`만 그 주소로 바꾸면 됩니다.

## 구조

```
src/data/content.ts   ← 내용 (여기만 주로 수정)
src/i18n/ui.ts         ← 고정 UI 문구
src/components/        ← 섹션별 컴포넌트
src/pages/index.astro     ← 한국어 /
src/pages/en/index.astro  ← 영어 /en/
src/styles/global.css  ← 색·폰트·애니메이션 토큰
```
