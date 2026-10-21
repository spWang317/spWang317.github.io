// ════════════════════════════════════════════════════════════════
//  이 파일 한 곳만 고치면 사이트 전체에 반영됩니다.
//  { ko: '...', en: '...' } 형태는 한국어/영어를 각각 적으세요.
// ════════════════════════════════════════════════════════════════

export type Locale = 'ko' | 'en';
export type L = Record<Locale, string>;

export const profile = {
  name: { ko: '왕성필', en: 'Sungpil Wang' } as L,

  // 분야 한 줄 — 한/영 모두 영어로 통일
  field: {
    ko: 'Text AI · NLP · Computational Humanities',
    en: 'Text AI · NLP · Computational Humanities',
  } as L,

  roles: {
    ko: ['KAIST 문화기술대학원 박사과정', '고려대학교 강사'],
    en: ['PhD Candidate, KAIST GSCT', 'Lecturer, Korea University'],
  } as Record<Locale, string[]>,

  tagline: {
    ko: '언어 모델 파이프라인을 직접 만드는 NLP 연구자.',
    en: 'An NLP researcher who builds language-model pipelines end to end.',
  } as L,

  email: 'wangsungpil@gmail.com',

  // 아바타: public/ 폴더에 사진을 넣고 파일명을 적으면 사진,
  //         비워두면 이름 첫 글자로 된 그라데이션 원이 표시됩니다.
  avatar: 'profile.jpg',

  // 상단 링크 — 필요할 때 //만 떼서 노출하세요.
  links: [
    // { label: 'CV', href: '/cv.pdf' },
    // { label: 'GitHub', href: 'https://github.com/spWang317' },
    // { label: 'Google Scholar', href: 'https://scholar.google.com/' },
    // { label: 'ORCID', href: 'https://orcid.org/' },
  ],
};

// 자기소개
export const about: L = {
  ko: `Text AI · NLP · Computational Humanities를 연구하고 지식을 공유합니다.

문학, 법령, 방송 등 다양한 도메인의 텍스트를 분석하고 생성해왔습니다.`,
  en: `I research and share knowledge in Text AI, NLP, and Computational Humanities.

I analyze and generate text across many domains — literature, law, and broadcasting.`,
};

// ── 대표 연구 (히어로 아래 카드 그리드) ─────────────────────────
export const research: {
  title: L;
  summary: L;
  tags: string[];
  href?: string;
  presented?: string[]; // 선행 학회 발표 (카드 아래 작은 글씨)
}[] = [
  {
    title: {
      ko: '초단편소설 서사 구조 분석',
      en: 'Narrative Structure in Flash Fiction',
    },
    summary: {
      ko: '한국어 초단편소설의 문장별 의미 흐름을 분석해 다섯 가지 서사 유형과, 이야기가 한 번 꺾였다가 도약하는 패턴을 발견했습니다.',
      en: 'Analyzed the sentence-level flow of meaning in Korean flash fiction to reveal five narrative types and a recurring pattern of stories breaking and then leaping forward.',
    },
    tags: ['Narrative Analysis', 'NLP', 'Literature'],
  },
  {
    title: {
      ko: '산문시와 초단편소설의 구조 비교',
      en: 'Prose Poetry vs. Flash Fiction',
    },
    summary: {
      ko: '장르 정보를 모두 가린 채, 글이 의미 공간에서 그리는 궤적의 모양만으로 산문시와 초단편소설을 구분할 수 있음을 보였습니다.',
      en: 'Showed that prose poetry and flash fiction can be told apart purely from the shape of their trajectory through meaning space, with every genre cue removed.',
    },
    tags: ['Embeddings', 'Narrative Analysis', 'Poetry'],
  },
  {
    title: {
      ko: '초단편소설 생성 AI 에이전트',
      en: 'Flash Fiction Generation Agent',
    },
    summary: {
      ko: '한국어 언어 모델로 초단편소설을 생성하고, 에이전트가 그 결과를 스스로 점검해 다시 쓰는 파이프라인을 만들었습니다.',
      en: 'Built a pipeline in which a Korean language model writes flash fiction and an agent reviews and rewrites its own output.',
    },
    tags: ['Generative AI', 'AI Agent', 'NLP'],
  },
  {
    title: {
      ko: '서사 구조와 이야기 검색',
      en: 'Narrative Structure and Story Retrieval',
    },
    summary: {
      ko: '이야기를 어떤 구조로 요약해 표현하느냐가 검색 성능에 영향을 주는지 비교 실험으로 살펴봤습니다.',
      en: 'Ran controlled experiments on whether the structure used to summarize a story affects how well it can be retrieved.',
    },
    tags: ['Information Retrieval', 'NLP'],
  },
  {
    title: {
      ko: '방송 음성 전사 파이프라인',
      en: 'Broadcast Speech Transcription',
    },
    summary: {
      ko: '지상파·라디오 15개 채널 녹음에서 사람 목소리를 분리해 텍스트로 옮기는 파이프라인을 만들었습니다. 음악과 잡음이 섞인 환경에서도 안정적으로 작동하도록 설계했습니다. (KOCCA)',
      en: 'Built a pipeline that separates speech from 15 TV and radio channels and transcribes it to text, designed to stay reliable even when music and noise overlap. (KOCCA)',
    },
    tags: ['Speech-to-Text', 'Audio', 'Pipeline'],
  },
  {
    title: {
      ko: '단어-색상 연관 분석',
      en: 'Word–Color Association',
    },
    summary: {
      ko: '대규모 웹 이미지를 모아 단어와 색상의 연관을 수치로 측정하는 방법을 만들었습니다. 글로벌 100대 브랜드와 20세기 영미시의 색채 상징에서 검증했습니다.',
      en: 'Developed a way to measure how strongly words associate with colors from large-scale web images, validated on the world’s top 100 brands and color symbolism in 20th-century Anglo-American poetry.',
    },
    tags: ['Multimodal', 'Computer Vision', 'Computational Humanities'],
    href: 'https://doi.org/10.1371/journal.pone.0360407',
    presented: [
      'CHR 2024, Aarhus · Long Presentation',
      'NetSci 2023, Vienna · Poster',
    ],
  },
  {
    title: {
      ko: '법령 네트워크 분석',
      en: 'Legal Network Analysis',
    },
    summary: {
      ko: '한국 법령 전체(1948–2024)를 네트워크로 구성하고, 법 사이의 인용을 동조와 상충으로 분류했습니다. 2000년대 중반 특별법이 늘면서 법체계의 정합성이 떨어졌음을 보였습니다.',
      en: 'Modeled the entire body of Korean law (1948–2024) as a network and classified citations as reinforcing or conflicting, showing that legal coherence declined as special laws proliferated in the mid-2000s.',
    },
    tags: ['Network Analysis', 'NLP', 'Law'],
  },
  {
    title: {
      ko: '한국 산문시 주제 분석',
      en: 'Topics in Korean Prose Poetry',
    },
    summary: {
      ko: '한국 현대 산문시를 토픽 모델링으로 분석하고, 조건을 바꿔가며 안정적으로 유지되는 주제가 무엇인지 검증했습니다.',
      en: 'Applied topic modeling to contemporary Korean prose poetry and tested which topics remain stable under changing conditions.',
    },
    tags: ['Topic Modeling', 'Computational Humanities', 'Poetry'],
  },
  {
    title: {
      ko: '서정주 시세계의 변화: 키워드·토픽·감성',
      en: "Evolution of Seo Jeong-Ju's Poetic World",
    },
    summary: {
      ko: '서정주의 시 950편을 키워드·토픽·감성으로 분석해, 「신라 정신」이 자리 잡은 시점과 1975년 이후 정서가 긍정으로 돌아서는 흐름을 수치로 보였습니다. (DH2022)',
      en: 'Analyzed 950 poems by Seo Jeong-Ju through keywords, topics, and sentiment, quantifying when the “Silla spirit” took hold and how his tone turned positive after 1975. (DH2022)',
    },
    tags: ['Computational Humanities', 'Poetry', 'Seo Jeong-Ju'],
    href: 'https://dh-abstracts.library.virginia.edu/works/11973',
  },
  {
    title: {
      ko: '땐싱뽕사: XR 협동 댄스 게임',
      en: 'Dancing Bbongsa: XR Co-op Dance Game',
    },
    summary: {
      ko: 'XR 협동 댄스 게임 개발에서 사용자 인식 조사를 맡았습니다. 춤 관련 뉴스 1만 2천 건을 분석해 사회적 인식의 차이를 밝히고 게임 방향 설정에 활용했습니다. (HCI Korea 2024)',
      en: 'Led the user-perception study for an XR co-op dance game, analyzing 12,000 news articles about dancing to surface how public perception differs and to inform the game’s direction. (HCI Korea 2024)',
    },
    tags: ['Text Mining', 'HCI', 'Games'],
    href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11714856',
  },
  {
    title: {
      ko: 'Spiritfarer 게임과 사별 경험',
      en: 'Spiritfarer & Coping with Loss',
    },
    summary: {
      ko: '죽음을 다룬 게임 〈Spiritfarer〉가 플레이어의 사별 경험을 어떻게 위로하는지 인터뷰로 분석해, 상실과 회복 사이를 오가는 감정 패턴을 밝혔습니다. (CHI EA 2021)',
      en: 'Studied how the death-themed game Spiritfarer helps players cope with loss, using in-depth interviews to trace how grief oscillates between loss and restoration. (CHI EA 2021)',
    },
    tags: ['HCI', 'Qualitative Research', 'Games'],
    href: 'https://dl.acm.org/doi/abs/10.1145/3411763.3451608',
  },
];

// ── 참여연구사업 (Projects 섹션) ────────────────────────────────
export const projects: {
  term: L;
  role: L;
  org: L;
  title: L;
}[] = [
  {
    term: { ko: '2023.07 – 2025.12', en: '2023.07 – 2025.12' },
    role: { ko: '참여기관 실무책임자', en: 'Project Manager (Participating Org.)' },
    org: { ko: '한국콘텐츠진흥원 (KOCCA)', en: 'Korea Creative Content Agency (KOCCA)' },
    title: {
      ko: '문학예술 저작물의 정산·분배를 위한 방송 모니터링 기술개발',
      en: 'Broadcast monitoring technology for royalty settlement of literary and artistic works',
    },
  },
  {
    term: { ko: '2023.06 – 2026.05', en: '2023.06 – 2026.05' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '한국연구재단 (NRF)', en: 'National Research Foundation (NRF)' },
    title: {
      ko: '포스트 AI 시대 법과 발전 이해를 위한 복잡계 네트워크 과학 기반 법령정보 분석 연구',
      en: 'Network-science analysis of legal information for understanding law and development in the post-AI era',
    },
  },
  {
    term: { ko: '2022.03 – 2025.02', en: '2022.03 – 2025.02' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '한국산업기술진흥원 (KIAT)', en: 'Korea Institute for Advancement of Technology (KIAT)' },
    title: {
      ko: '(RCMS) 가상증강현실 전문인력양성사업',
      en: 'VR/AR specialist training program (RCMS)',
    },
  },
  {
    term: { ko: '2021.08 – 2023.12', en: '2021.08 – 2023.12' },
    role: { ko: '주관기관 실무책임자 (2023)', en: 'Project Manager, Lead Org. (2023)' },
    org: { ko: '한국과학기술원 (KAIST)', en: 'Korea Advanced Institute of Science and Technology (KAIST)' },
    title: {
      ko: '포스트 AI 문화기술 상상 연구',
      en: 'Imagining post-AI culture technology',
    },
  },
  {
    term: { ko: '2023.07 – 2023.12', en: '2023.07 – 2023.12' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '한국지능정보사회진흥원 (NIA)', en: 'National Information Society Agency (NIA)' },
    title: {
      ko: '한국어 텍스트-비디오-사운드 데이터',
      en: 'Korean text–video–sound multimodal dataset',
    },
  },
  {
    term: { ko: '2022.02 – 2022.12', en: '2022.02 – 2022.12' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '국가사이버안보연구소 (NCSL)', en: 'National Cyber Security Lab (NCSL)' },
    title: {
      ko: 'AI 기반 영상 요약 및 캡셔닝 기술 연구',
      en: 'AI-based video summarization and captioning',
    },
  },
  {
    term: { ko: '2021.05 – 2021.12', en: '2021.05 – 2021.12' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '한국지능정보사회진흥원 (NIA)', en: 'National Information Society Agency (NIA)' },
    title: {
      ko: '26번 영상 및 이미지 편집기술 데이터',
      en: 'Video and image editing technology dataset (No. 26)',
    },
  },
  {
    term: { ko: '2020.09 – 2020.12', en: '2020.09 – 2020.12' },
    role: { ko: '참여연구원', en: 'Researcher' },
    org: { ko: '한국지능정보사회진흥원 (NIA)', en: 'National Information Society Agency (NIA)' },
    title: {
      ko: '35번 감정인식 및 요약영상 AI 데이터: 공공 DB와 학습머신 구축 및 응용서비스 설계 개발',
      en: 'Emotion-recognition and video-summarization AI dataset (No. 35): public DB, training pipeline, and applications',
    },
  },
];

// ── 수상 (시간 순, 최신부터) ────────────────────────────────────
export const awards: {
  term: L;
  prize: L;
  event: L;
  work?: L;
}[] = [
  {
    term: { ko: '2026.08', en: '2026.08' },
    prize: { ko: '대상 (KAIST 총장상)', en: "Grand Prize (KAIST President's Award)" },
    event: {
      ko: '2026 KAIST AI×실패 아이디어 공모전 · KAIST 실패연구소',
      en: '2026 KAIST AI×Failure Idea Competition · KAIST Center for Ambitious Failure',
    },
    work: {
      ko: '「예술의 정의에서 AI를 지운 대가」 — AI 협업 예술의 이분법적 라벨링이 초래할 실패의 사전 분석(Pre-Mortem)',
      en: '"The Cost of Erasing AI from the Definition of Art" — a pre-mortem of failures caused by binary AI labeling of hybrid art',
    },
  },
  {
    term: { ko: '2026.08', en: '2026.08' },
    prize: { ko: '대상', en: 'Grand Prize' },
    event: {
      ko: '2026 KAISTian 실패 에세이 공모전 · KAIST 실패연구소',
      en: '2026 KAISTian Failure Essay Contest · KAIST Center for Ambitious Failure',
    },
    work: {
      ko: '「거절당하지 못한 논문들」 — 융합 연구가 제출처를 찾지 못하는 실패에 관한 에세이 (기획주제: 미래와 실패)',
      en: '"Papers That Could Not Even Be Rejected" — an essay on interdisciplinary work that cannot find a venue (theme: Future and Failure)',
    },
  },
  {
    term: { ko: '2026.07', en: '2026.07' },
    prize: {
      ko: 'AI Agent 기반 1인 창업 프로그램 100인 선정',
      en: 'Selected — Top 100, AI Agent-Based Solo Founder Program',
    },
    event: {
      ko: '2026 KAIST OverEdge(오엣) · KAIST 창업원 · KAIST AI 대학원',
      en: '2026 KAIST OverEdge · KAIST Startup Center · KAIST AI Graduate School',
    },
  },
  {
    term: { ko: '2019.08', en: '2019.08' },
    prize: {
      ko: '아이디어 기획 부문 장려상 (한국동서발전 사장상)',
      en: "Encouragement Award, Idea Planning Track (Korea East-West Power CEO's Award)",
    },
    event: {
      ko: '제7회 공공데이터 활용 비즈니스 아이디어 공모전 · 산업통상자원부',
      en: 'The 7th Public Data Utilization Business Idea Contest · Ministry of Trade, Industry and Energy',
    },
    work: {
      ko: '「따라와」 — 교통사고다발지 등 공공데이터 기반 따릉이 경로 탐색·안전 정보 제공 시스템',
      en: '"Ttarawa" — public-data-driven route navigation and safety information system for Seoul bike-share',
    },
  },
];

// 논문 섹션은 사용하지 않습니다 (페이지에서 import 안 함).
// 논문 목록은 research/publications.yaml 에서 자동 생성됩니다.
// 내용을 고치려면 그 파일을 수정한 뒤 `python3 sync.py` 를 실행하세요.
export { publications, type Publication } from './publications.generated';

// ── 학회 발표 (시간 순, 최신부터) ──────────────────────────────
export const presentations: {
  term: string;
  title: string;
  authors: string;
  venue: string;
  kind: L;
  ledTo?: { label: L; href: string }; // 이 발표가 발전한 논문
}[] = [
  {
    term: '2024.12',
    title: 'Quantitative Framework for Word-Color Association and Application to 20th Century Anglo-American Poetry',
    authors: 'Sungpil Wang, Juyong Park',
    venue: 'Computational Humanities Research (CHR) 2024, Aarhus',
    kind: { ko: '구두 발표 (Long)', en: 'Long Presentation' },
    ledTo: {
      label: { ko: 'PLOS ONE (2026) 논문으로 발전', en: 'Developed into PLOS ONE (2026)' },
      href: 'https://doi.org/10.1371/journal.pone.0360407',
    },
  },
  {
    term: '2024.06',
    title: 'Understanding Congruous-Conflicting Relationships in Legal Citations via Signed Network Analysis',
    authors: 'Dongju Park, Sungpil Wang et al.',
    venue: 'NetSci 2024, Quebec',
    kind: { ko: '포스터', en: 'Poster' },
  },
  {
    term: '2024.04',
    title: "The Network of Republic of Korea's Legal Code",
    authors: 'Halla Kim, Dongju Park, Sungpil Wang et al.',
    venue: 'CompleNet 2024, Exeter',
    kind: { ko: '포스터', en: 'Poster' },
  },
  {
    term: '2024.01',
    title: '땐싱뽕사: XR 협동 댄스 게임',
    authors: '배선아, 김기락, 왕성필, 우운택',
    venue: 'HCI Korea 2024, Gangwon',
    kind: { ko: '학술대회 논문', en: 'Conference Paper' },
  },
  {
    term: '2023.11',
    title: 'Network Analysis of 21st-Century Korean Prose Poetry',
    authors: 'Sungpil Wang, Juyong Park',
    venue: 'Complex Networks & Their Applications 2023, Menton',
    kind: { ko: '포스터', en: 'Poster' },
  },
  {
    term: '2023.07',
    title: 'Color–Word Matching Analysis of Color Images in Literature',
    authors: 'Sungpil Wang, Juyong Park',
    venue: 'NetSci 2023, Vienna',
    kind: { ko: '포스터', en: 'Poster' },
    ledTo: {
      label: { ko: 'PLOS ONE (2026) 논문으로 발전', en: 'Developed into PLOS ONE (2026)' },
      href: 'https://doi.org/10.1371/journal.pone.0360407',
    },
  },
  {
    term: '2022.07',
    title: "Quantitative Understanding of the Evolution of Seo Jeong-Ju's Poetic World",
    authors: 'Sungpil Wang, Juyong Park',
    venue: 'Digital Humanities 2022 (ADHO), Tokyo',
    kind: { ko: '구두 발표 (Short)', en: 'Short Presentation' },
  },
  {
    term: '2021.05',
    title: 'How the Death-themed Game Spiritfarer Can Help Players Cope with the Loss of a Loved One',
    authors: 'Karam Eum, Valérie Erb, Subin Lin, Sungpil Wang, Young Yim Doh',
    venue: 'CHI 2021 Extended Abstracts',
    kind: { ko: '확장 초록', en: 'Extended Abstract' },
  },
];

// ── 강의 · 강연 (시간 순, 최신부터) ──────────────────────────────
export const teaching: {
  term: L;
  role?: L;
  course: L;
  org: L;
}[] = [
  {
    term: { ko: '2025.09 – ', en: '2025.09 – ' },
    role: { ko: '강사', en: 'Lecturer' },
    course: {
      ko: '디지털인문학응용 (정규강좌)',
      en: 'Applied Digital Humanities (regular course)',
    },
    org: { ko: '고려대학교 문과대학', en: 'Korea University, College of Liberal Arts' },
  },
  {
    term: { ko: '2024.01', en: '2024.01' },
    role: { ko: '조교', en: 'Teaching Assistant' },
    course: {
      ko: '제2회 디지털인문학 겨울학교 (특별강좌)',
      en: '2nd Digital Humanities Winter School (special course)',
    },
    org: { ko: '고려대학교 문과대학', en: 'Korea University, College of Liberal Arts' },
  },
  {
    term: { ko: '2023', en: '2023' },
    role: { ko: '초청강연', en: 'Invited Talk' },
    course: {
      ko: 'AI와 문학 — 과학자의 정원 프로그램',
      en: 'AI and Literature — Scientist’s Garden program',
    },
    org: {
      ko: '대전사이언스페스티벌, 대전엑스포시민광장',
      en: 'Daejeon Science Festival',
    },
  },
  {
    term: { ko: '2023.01', en: '2023.01' },
    role: { ko: '조교', en: 'Teaching Assistant' },
    course: {
      ko: '제1회 디지털인문학 겨울학교 (특별강좌)',
      en: '1st Digital Humanities Winter School (special course)',
    },
    org: { ko: 'KAIST 디지털인문사회과학부', en: 'KAIST School of Digital Humanities & Social Sciences' },
  },
  {
    term: { ko: '2022 – 2023', en: '2022 – 2023' },
    role: { ko: '조교', en: 'Teaching Assistant' },
    course: {
      ko: '한국문학의 이해 · 한국소설다시읽기 · 논리적 글쓰기 (정규강좌)',
      en: 'Understanding Korean Literature · Rereading Korean Fiction · Logical Writing',
    },
    org: { ko: 'KAIST 디지털인문사회과학부', en: 'KAIST School of Digital Humanities & Social Sciences' },
  },
  {
    term: { ko: '2022.05', en: '2022.05' },
    role: { ko: '초청강연', en: 'Invited Talk' },
    course: {
      ko: '한국어 인공지능 데이터과학 (특별강좌)',
      en: 'Korean AI & Data Science (special lecture)',
    },
    org: { ko: '성균관대학교 문과대학', en: 'Sungkyunkwan University, College of Liberal Arts' },
  },
  {
    term: { ko: '2020 – 2022', en: '2020 – 2022' },
    role: { ko: '조교', en: 'Teaching Assistant' },
    course: {
      ko: '문화기술대학원 웹사이트 설계 및 구축',
      en: 'GSCT website design and development',
    },
    org: { ko: 'KAIST 문화기술대학원', en: 'KAIST Graduate School of Culture Technology' },
  },
];

// ── 저서 (Books 섹션) ──────────────────────────────────────────
export const books: {
  title: L;
  role: L;
  authors?: L;
  publisher: L;
  year: string;
  cover?: string;
  href?: string;
  summary?: L;
}[] = [
  {
    title: { ko: '불안', en: 'Anxiety' },
    role: { ko: '공저', en: 'Co-author' },
    publisher: { ko: '파도', en: 'Pado' },
    year: '2024.09',
    cover: 'book-anxiety.jpg',
    href: 'https://www.yes24.com/product/goods/133292431',
  },
  {
    title: { ko: '부패하지 않는 심장을 갖게 돼', en: 'Having an Incorruptible Heart' },
    role: { ko: '공저', en: 'Co-author' },
    publisher: { ko: '주머니시', en: 'Jumeoni-si' },
    year: '2024.07',
    cover: 'book-heart.jpg',
    href: 'https://www.yes24.com/product/goods/129886537',
  },
];

// ── 학력 (Education 섹션) ──────────────────────────────────────
export const education: {
  period: string;
  degree: L;
  org: L;
  thesis?: L;
  thesisHref?: string;   // 논문 원문 링크(있으면 제목이 링크가 됩니다)
}[] = [
  {
    period: '2022 – 2027',
    degree: {
      ko: '이학박사 (수료 2024.08 / 졸업예정 2027.02)',
      en: 'Ph.D. in Science (coursework completed Aug 2024 / expected Feb 2027)',
    },
    org: { ko: 'KAIST 문화기술대학원', en: 'KAIST Graduate School of Culture Technology' },
    thesis: {
      ko: 'Constructing Word-Color Associations from Web-Scale Image Data: Framework and Applications',
      en: 'Constructing Word-Color Associations from Web-Scale Image Data: Framework and Applications',
    },
  },
  {
    period: '2020 – 2022',
    degree: { ko: '공학석사', en: 'M.S. in Engineering' },
    org: { ko: 'KAIST 문화기술대학원', en: 'KAIST Graduate School of Culture Technology' },
    thesis: {
      ko: "Characterising the Evolution of Seo Jeong-Ju's Poetic World Through Computational Analysis on Keywords, Topics, and Sentiments",
      en: "Characterising the Evolution of Seo Jeong-Ju's Poetic World Through Computational Analysis on Keywords, Topics, and Sentiments",
    },
    thesisHref: 'https://koasas.kaist.ac.kr/handle/10203/308294',
  },
  {
    period: '2015 – 2020',
    degree: {
      ko: '공학사 · 문화예술융합소프트웨어학사 · 문학사',
      en: 'B.E. · B.S. in Culture & Arts Convergence Software · B.A.',
    },
    org: {
      ko: '동국대학교 — 산업시스템공학과 / 문화예술소프트웨어학과(연계전공) / 문예창작학과(복수전공)',
      en: 'Dongguk University — Industrial & Systems Engineering / Culture & Arts Software (linked) / Creative Writing (double major)',
    },
  },
];
