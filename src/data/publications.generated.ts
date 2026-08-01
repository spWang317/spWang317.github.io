// ⚠️ 자동 생성 파일 — 직접 고치지 마세요.
// 원본: research/publications.yaml → `python3 sync.py` 로 재생성됩니다.

import type { L } from './content';

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  status: L;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    year: 2026,
    authors: "Sungpil Wang, Juyong Park",
    title: "Word–Color Association from Large-Scale Online Data: Methodology and Applications",
    venue: "PLOS ONE",
    status: { ko: "리비전 심사 중 (PONE-D-26-04810)", en: "Revision under review (PONE-D-26-04810)" },
    links: [{ label: "Code", href: "https://github.com/spWang317/Word_Color_Association" }],
  },
  {
    year: 2026,
    authors: "Sungpil Wang",
    title: "Information dynamics in compressed narratives: five dynamical regimes and a fracture-and-leap cycle",
    venue: "Physica A: Statistical Mechanics and its Applications",
    status: { ko: "심사 중 · 2026.05 제출", en: "Under review · submitted 2026.05" },
    links: [{ label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-8619161/v1" }, { label: "Code", href: "https://github.com/spWang317/Flash_Fiction_Analysis" }],
  },
  {
    year: 2026,
    authors: "Sungpil Wang",
    title: "From Kinetic to Resonant Regimes: Geometric Differentiation of Prose Poetry against Flash Fiction",
    venue: "Scientific Reports",
    status: { ko: "심사 중 · 2026.01 제출", en: "Under review · submitted 2026.01" },
    links: [{ label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-8722451/v1" }, { label: "Code", href: "https://github.com/spWang317/ProsePoetry_against_FlashFiction" }],
  },
  {
    year: 2026,
    authors: "Sungpil Wang",
    title: "Prosepoem Atlas: An Atlas of Korean Prose Poetry without Line Breaks (Four Major Publisher Series, 2000–2024)",
    venue: "Zenodo",
    status: { ko: "공개 데이터셋 · CC BY 4.0", en: "Open dataset · CC BY 4.0" },
    links: [{ label: "DOI", href: "https://doi.org/10.5281/zenodo.20149336" }, { label: "Code", href: "https://github.com/spWang317/prosepoem-atlas" }],
  },
];
