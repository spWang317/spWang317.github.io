// ⚠️ 자동 생성 파일 — 직접 고치지 마세요.
// 원본: research/publications.yaml → `python3 sync.py` 로 재생성됩니다.

import type { L } from './content';

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  status?: L;
  redacted?: boolean;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    year: 2026,
    authors: "Sungpil Wang, Juyong Park",
    title: "Word–Color Association from Large-Scale Online Data: Methodology and Applications",
    venue: "PLOS ONE",
    status: { ko: "게재 · PLOS ONE 21(10): e0360407 (2026.10.16)", en: "Published · PLOS ONE 21(10): e0360407 (Oct 16, 2026)" },
    links: [{ label: "Paper", href: "https://doi.org/10.1371/journal.pone.0360407" }, { label: "Code", href: "https://github.com/spWang317/Word_Color_Association" }],
  },
];
