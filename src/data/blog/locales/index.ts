import type { BlogLocaleOverlays, BlogPostOverlay } from './types';
import { deBlogOverlays } from './de';
import { esBlogOverlays } from './es';
import { frBlogOverlays } from './fr';
import { plBlogOverlays } from './pl';
import { ptBlogOverlays } from './pt';
import { ruBlogOverlays } from './ru';
import { trBlogOverlays } from './tr';

export type { BlogLocaleOverlays, BlogPostOverlay } from './types';
export {
  deBlogOverlays,
  esBlogOverlays,
  frBlogOverlays,
  plBlogOverlays,
  ptBlogOverlays,
  ruBlogOverlays,
  trBlogOverlays,
};

/** Locales that ship translated blog post pages. */
export type BlogOverlayLocale = 'pt' | 'de' | 'ru' | 'tr' | 'pl' | 'fr' | 'es';

export const blogOverlaysByLocale: Record<BlogOverlayLocale, BlogLocaleOverlays> = {
  pt: ptBlogOverlays,
  de: deBlogOverlays,
  ru: ruBlogOverlays,
  tr: trBlogOverlays,
  pl: plBlogOverlays,
  fr: frBlogOverlays,
  es: esBlogOverlays,
};

/**
 * Translated overlay for a blog post, or `undefined` when the locale has no
 * translation for that slug (callers should fall back to the English post).
 */
export function getBlogOverlay(locale: string, slug: string): BlogPostOverlay | undefined {
  const overlays = (blogOverlaysByLocale as Record<string, BlogLocaleOverlays | undefined>)[locale];
  return overlays?.[slug];
}
