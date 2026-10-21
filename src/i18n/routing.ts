import {
  FULL_LOCALES,
  LIGHT_LOCALES,
  MEDIUM_LOCALES,
  NON_DEFAULT_LOCALES,
  TOP_BLOG_SLUGS_FOR_MEDIUM,
  type LocaleCode,
} from './locales';

export type LocalizedPageKind =
  | 'home'
  | 'products-hub'
  | 'product-elite'
  | 'product-utilities'
  | 'product-detail'
  | 'blog-index'
  | 'blog-post'
  | 'faq'
  | 'support'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'forum';

const ALL_NON_DEFAULT = NON_DEFAULT_LOCALES.map((locale) => locale.code);

export function localesForPage(kind: LocalizedPageKind, blogSlug?: string): LocaleCode[] {
  switch (kind) {
    case 'home':
    case 'products-hub':
    case 'product-elite':
      return ALL_NON_DEFAULT;
    case 'product-utilities':
    case 'blog-index':
      return [...FULL_LOCALES, ...MEDIUM_LOCALES];
    case 'product-detail':
      return [...FULL_LOCALES, ...MEDIUM_LOCALES];
    case 'blog-post': {
      const full = [...FULL_LOCALES];
      const mediumAllowed =
        blogSlug && (TOP_BLOG_SLUGS_FOR_MEDIUM as readonly string[]).includes(blogSlug)
          ? [...MEDIUM_LOCALES]
          : [];
      return [...full, ...mediumAllowed];
    }
    case 'faq':
    case 'support':
    case 'about':
    case 'privacy':
    case 'terms':
      return [...FULL_LOCALES];
    case 'forum':
      // Forum stays English-only (no [lang]/forum pages).
      return [];
    default:
      return [...LIGHT_LOCALES];
  }
}

export function langStaticPaths(kind: LocalizedPageKind, blogSlug?: string) {
  return localesForPage(kind, blogSlug).map((lang) => ({ params: { lang } }));
}
