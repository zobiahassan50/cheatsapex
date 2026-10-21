import { PRODUCT_BASE } from '../config/site';
import {
  BLOG_SLUG_REDIRECTS,
  FORUM_SLUG_REDIRECTS,
  PRODUCT_PATH_REDIRECTS,
} from '../../scripts/slug-redirects.mjs';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* URLs → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': `${PRODUCT_BASE}apex-elite/`,
  '/cheats/elite/': `${PRODUCT_BASE}apex-elite/`,
  '/cheats/compare': '/blog/elite-guide/',
  '/cheats/compare/': '/blog/elite-guide/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/products/apex-cheats/account-recovery': `${PRODUCT_BASE}ban-appeal/`,
  '/products/apex-cheats/account-recovery/': `${PRODUCT_BASE}ban-appeal/`,
  ...PRODUCT_PATH_REDIRECTS,
};

function resolveSlugRedirects(pathname: string): string {
  const blog = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (blog) {
    const next = BLOG_SLUG_REDIRECTS[blog[1] as keyof typeof BLOG_SLUG_REDIRECTS];
    if (next) return `/blog/${next}/`;
  }
  const forum = pathname.match(/^\/forum\/([^/]+)\/?$/);
  if (forum) {
    const next = FORUM_SLUG_REDIRECTS[forum[1] as keyof typeof FORUM_SLUG_REDIRECTS];
    if (next) return `/forum/${next}/`;
  }
  return pathname;
}

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;
  pathname = resolveSlugRedirects(pathname);

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsElite: `${PRODUCT_BASE}apex-elite/`,
  productsUtilities: `${PRODUCT_BASE}cheat-tools/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
