import { NON_DEFAULT_LOCALES, type LocaleCode } from './locales';

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

/** Every non-EN locale mirrors the full site (all pages + all blog posts). */
const ALL_NON_DEFAULT = NON_DEFAULT_LOCALES.map((locale) => locale.code);

export function localesForPage(kind: LocalizedPageKind, _blogSlug?: string): LocaleCode[] {
  switch (kind) {
    case 'forum':
      // Forum stays English-only (no [lang]/forum pages yet).
      return [];
    default:
      return ALL_NON_DEFAULT;
  }
}

export function langStaticPaths(kind: LocalizedPageKind, blogSlug?: string) {
  return localesForPage(kind, blogSlug).map((lang) => ({ params: { lang } }));
}
