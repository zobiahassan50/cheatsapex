import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string };

/** Silo role: pillar = category hub; cluster = supporting long-tail article. */
export type SiloType = 'pillar' | 'cluster';

export interface BlogPostFull extends BlogPost {
  featured?: boolean;
  author?: string;
  body: BlogBlock[];
  /** Pillar hub vs cluster supporting page (zero-backlink silo). */
  type?: SiloType;
  /** Cluster → pillar slug (omit on pillars). */
  parentPillar?: string;
  /** Long-tail keyword targets for this page. */
  relatedKeywords?: string[];
}
