import type { BlogLocaleOverlays, BlogPostOverlay } from './types';
import { deBlogOverlays } from './de';
import { ptBlogOverlays } from './pt';
import { ruBlogOverlays } from './ru';
import { trBlogOverlays } from './tr';

export type { BlogLocaleOverlays, BlogPostOverlay } from './types';
export { deBlogOverlays, ptBlogOverlays, ruBlogOverlays, trBlogOverlays };

/** Locales that ship translated blog post pages. */
export type BlogOverlayLocale = 'pt' | 'de' | 'ru' | 'tr';

export const blogOverlaysByLocale: Record<BlogOverlayLocale, BlogLocaleOverlays> = {
  pt: ptBlogOverlays,
  de: deBlogOverlays,
  ru: ruBlogOverlays,
  tr: trBlogOverlays,
};

/**
 * Translated overlay for a blog post, or `undefined` when the locale has no
 * translation for that slug (callers should fall back to the English post).
 */
export function getBlogOverlay(locale: string, slug: string): BlogPostOverlay | undefined {
  const overlays = (blogOverlaysByLocale as Record<string, BlogLocaleOverlays | undefined>)[locale];
  return overlays?.[slug];
}
