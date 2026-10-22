import { t } from '../i18n';
import { SITE_DOMAIN, SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getPageSeoEntry } from './pageSeo';

/** Always the custom domain (cheatsapex.com), never www or pages.dev. */
export const SITE_ORIGIN = SITE_URL;

export const DEFAULT_OG_IMAGE = '/images/gameplay/apex-esp-wallhack.png';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @apexcheats */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

/**
 * Absolute canonical for trailingSlash: 'always'.
 * Strips host/query/hash if a full URL sneaks in; never emits www or pages.dev.
 */
export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  try {
    if (/^https?:\/\//i.test(path)) {
      const u = new URL(path);
      path = u.pathname || '/';
    }
  } catch {
    /* keep path as-is */
  }
  // Drop accidental host prefixes like //cheatsapex.pages.dev/blog/
  path = path.replace(/^\/\/[^/]+/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  // Collapse duplicate slashes except root
  path = path.replace(/\/{2,}/g, '/');
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  // Force production origin (ignore preview hosts)
  return `https://${SITE_DOMAIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

/** Keep meta descriptions blunt about Apex cheats for SERP snippets. */
export function cheatMetaDescription(text: string): string {
  const trimmed = text.trim();
  if (/apex\s*cheat/i.test(trimmed)) return trimmed;
  return `Apex cheats guide: ${trimmed}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
