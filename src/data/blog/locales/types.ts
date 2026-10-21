import type { BlogPostFull } from '../types';

/** Locale-specific fields layered on top of the English `BlogPostFull`. */
export type BlogPostOverlay = Partial<
  Pick<BlogPostFull, 'tag' | 'title' | 'seoTitle' | 'desc' | 'date' | 'readTime' | 'body'>
>;

/** Overlays keyed by blog post slug. */
export type BlogLocaleOverlays = Record<string, BlogPostOverlay>;
