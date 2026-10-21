export type { BlogBlock, BlogPostFull } from './blog/types';
export { blogPosts } from './blog/posts';
export { localizeBlogPost, localizeBlogPosts } from './blog/localize';

import type { LocaleCode } from '../i18n/locales';
import { blogPosts } from './blog/posts';
import { getBlogOverlay } from './blog/locales';
import { localizeBlogPost, localizeBlogPosts } from './blog/localize';

export function getBlogPost(slug: string, locale: LocaleCode = 'en') {
  const post = blogPosts.find((p) => p.slug === slug);
  return post ? localizeBlogPost(post, locale) : undefined;
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedBlogPost(locale: LocaleCode = 'en') {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  return featured ? localizeBlogPost(featured, locale) : undefined;
}

export function getNonFeaturedBlogPosts(locale: LocaleCode = 'en') {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  return localizeBlogPosts(
    blogPosts.filter((p) => p.slug !== featured?.slug),
    locale,
  );
}

export function getFeaturedBlogPosts(limit = 3, locale: LocaleCode = 'en') {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);
  const ordered = featured ? [featured, ...rest].slice(0, limit) : blogPosts.slice(0, limit);
  return localizeBlogPosts(ordered, locale);
}

export function getRelatedBlogPosts(slug: string, limit = 3, locale: LocaleCode = 'en') {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return [];

  const sameTag = blogPosts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = blogPosts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  const pool = [...sameTag, ...others];

  // Prefer posts that have a locale overlay so related titles stay translated.
  if (locale !== 'en') {
    const translated = pool.filter((p) => getBlogOverlay(locale, p.slug));
    const fallback = pool.filter((p) => !getBlogOverlay(locale, p.slug));
    return localizeBlogPosts([...translated, ...fallback].slice(0, limit), locale);
  }

  return localizeBlogPosts(pool.slice(0, limit), locale);
}

export function getBlogPostsBySlugs(slugs: string[], locale: LocaleCode = 'en') {
  return localizeBlogPosts(
    slugs
      .map((slug) => blogPosts.find((p) => p.slug === slug))
      .filter((post): post is NonNullable<typeof post> => post != null),
    locale,
  );
}

export function getRelatedBlogPostsForProduct(
  relatedSlugs: string[],
  limit = 6,
  locale: LocaleCode = 'en',
) {
  const curated = getBlogPostsBySlugs(relatedSlugs, locale);
  if (curated.length >= limit) return curated.slice(0, limit);

  const used = new Set(curated.map((p) => p.slug));
  const fill = localizeBlogPosts(
    blogPosts.filter((p) => !used.has(p.slug)),
    locale,
  );
  return [...curated, ...fill].slice(0, limit);
}

export function getBlogTags(locale: LocaleCode = 'en') {
  const posts = localizeBlogPosts(blogPosts, locale);
  return [...new Set(posts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));
}

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

/** Stable heading ids that keep Unicode letters (PT/DE/RU/TR). */
export function slugifyHeading(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
