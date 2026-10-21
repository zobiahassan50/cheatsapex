import type { LocaleCode } from '../../i18n/locales';
import { getBlogOverlay } from './locales';
import type { BlogPostFull } from './types';

/** Merge English post with locale overlay (title/desc/body). Falls back to EN when missing. */
export function localizeBlogPost(post: BlogPostFull, locale: LocaleCode = 'en'): BlogPostFull {
  if (locale === 'en') return post;
  const overlay = getBlogOverlay(locale, post.slug);
  if (!overlay) return post;
  return {
    ...post,
    ...overlay,
    body: overlay.body ?? post.body,
  };
}

export function localizeBlogPosts(posts: BlogPostFull[], locale: LocaleCode = 'en'): BlogPostFull[] {
  if (locale === 'en') return posts;
  return posts.map((post) => localizeBlogPost(post, locale));
}
