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

];
