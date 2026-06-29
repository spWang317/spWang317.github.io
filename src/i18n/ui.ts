import type { Locale } from '../data/content';

// 화면 고정 문구(메뉴, 섹션 제목, 버튼 등). 보통 손댈 일 없습니다.
export const ui = {
  ko: {
    'nav.about': '소개',
    'nav.research': '연구',
    'nav.books': '저서',
    'nav.projects': '참여연구사업',
    'nav.teaching': '강의·강연',
    'nav.education': '학력',
    'nav.contact': '연락',
    'section.research': '연구',
    'section.research.sub': '대표 연구 및 진행 중인 작업',
    'section.books': '저서',
    'section.books.sub': '참여한 단행본',
    'section.projects': '참여연구사업',
    'section.projects.sub': '연구과제 참여 이력',
    'section.teaching': '강의 · 강연',
    'section.education': '학력',
    'section.contact': '연락처',
    'eyebrow.research': 'RESEARCH',
    'eyebrow.books': 'BOOKS',
    'eyebrow.projects': 'PROJECTS & GRANTS',
    'eyebrow.teaching': 'TEACHING & TALKS',
    'eyebrow.education': 'EDUCATION',
    'eyebrow.contact': 'CONTACT',
    'contact.body': '공동연구, 강연, 자문 문의를 환영합니다.',
    'contact.email': '이메일 보내기',
    'theme.toggle': '밝기 전환',
    'lang.label': 'EN',
    'footer.built': 'Astro로 제작 · ',
    'skip': '본문으로 건너뛰기',
  },
  en: {
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.books': 'Books',
    'nav.projects': 'Projects',
    'nav.teaching': 'Teaching',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'section.research': 'Research',
    'section.research.sub': 'Selected and ongoing work',
    'section.books': 'Books',
    'section.books.sub': 'Contributed to',
    'section.projects': 'Projects & Grants',
    'section.projects.sub': 'Funded research projects',
    'section.teaching': 'Teaching & Talks',
    'section.education': 'Education',
    'section.contact': 'Get in touch',
    // 영어판 eyebrow는 한글로 — 큰 영문 제목과 병기 효과(동어 반복 방지)
    'eyebrow.research': '연구',
    'eyebrow.books': '저서',
    'eyebrow.projects': '참여연구사업',
    'eyebrow.teaching': '강의 · 강연',
    'eyebrow.education': '학력',
    'eyebrow.contact': '연락처',
    'contact.body': 'Open to collaborations, talks, and advisory work.',
    'contact.email': 'Send an email',
    'theme.toggle': 'Toggle theme',
    'lang.label': '한국어',
    'footer.built': 'Built with Astro · ',
    'skip': 'Skip to content',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['ko'];

export function t(locale: Locale) {
  return (key: UIKey) => ui[locale][key];
}
