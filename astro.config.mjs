import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// GitHub Pages 배포 설정 (둘 중 본인 상황에 맞게 한 줄만 고치세요)
//
//  A. 저장소 이름이  <아이디>.github.io  인 경우 (메인 사이트)
//       site: 'https://<아이디>.github.io'
//       base: '/'
//
//  B. 저장소 이름이 그 외 (예: personal-site) 인 경우
//       site: 'https://<아이디>.github.io'
//       base: '/personal-site'
//
//  나중에 커스텀 도메인을 붙이면 site만 'https://example.com' 로 바꾸고
//  base 는 '/' 로 두면 됩니다.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://spwang317.github.io',
  base: '/personal-site',
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    routing: { prefixDefaultLocale: false },
  },
});
