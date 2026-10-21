import type { Translations } from './types';
import {
  DEFAULT_LOCALE,
  isLocaleCode,
  LOCALE_BY_CODE,
  LOCALES,
  TOP_BLOG_SLUGS_FOR_MEDIUM,
  type LocaleCode,
} from './locales';
import { localesForPage, type LocalizedPageKind } from './routing';
import { en } from './en';
import { pt } from './pt';
import { ru } from './ru';
import { tr } from './tr';
import { de } from './de';
import { pl } from './pl';
import { fr } from './fr';
import { es } from './es';
import { homeSectionOverlays } from './home-sections';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

const overlays: Record<Exclude<LocaleCode, 'en'>, DeepPartial<Translations>> = {
  pt,
  ru,
  tr,
  de,
  pl,
  fr,
  es,
};

/** Footer explore link labels (order matches en.footer.exploreLinks). */
const FOOTER_EXPLORE_LABELS: Partial<
  Record<LocaleCode, { label: string; ariaLabel: string }[]>
> = {
  pt: [
    { label: 'Visão geral dos recursos', ariaLabel: 'Recursos' },
    { label: 'Cheats Elite', ariaLabel: 'Elite' },
    { label: 'Produtos e utilitários', ariaLabel: 'Produtos' },
    { label: 'Guias de patch', ariaLabel: 'Blog' },
    { label: 'FAQ pré-compra', ariaLabel: 'FAQ' },
  ],
  ru: [
    { label: 'Обзор функций', ariaLabel: 'Функции' },
    { label: 'Читы Elite', ariaLabel: 'Elite' },
    { label: 'Продукты и утилиты', ariaLabel: 'Продукты' },
    { label: 'Гайды по патчам', ariaLabel: 'Блог' },
    { label: 'FAQ перед покупкой', ariaLabel: 'FAQ' },
  ],
  tr: [
    { label: 'Özellik özeti', ariaLabel: 'Özellikler' },
    { label: 'Elite hileler', ariaLabel: 'Elite' },
    { label: 'Ürünler ve araçlar', ariaLabel: 'Ürünler' },
    { label: 'Yama rehberleri', ariaLabel: 'Blog' },
    { label: 'Satın alma SSS', ariaLabel: 'SSS' },
  ],
  de: [
    { label: 'Feature-Übersicht', ariaLabel: 'Features' },
    { label: 'Elite-Cheats', ariaLabel: 'Elite' },
    { label: 'Produkte & Utilities', ariaLabel: 'Produkte' },
    { label: 'Patch-Guides', ariaLabel: 'Blog' },
    { label: 'FAQ vor dem Kauf', ariaLabel: 'FAQ' },
  ],
  pl: [
    { label: 'Przegląd funkcji', ariaLabel: 'Funkcje' },
    { label: 'Cheaty Elite', ariaLabel: 'Elite' },
    { label: 'Produkty i narzędzia', ariaLabel: 'Produkty' },
    { label: 'Poradniki patchy', ariaLabel: 'Blog' },
    { label: 'FAQ przed zakupem', ariaLabel: 'FAQ' },
  ],
  fr: [
    { label: 'Aperçu des fonctions', ariaLabel: 'Fonctions' },
    { label: 'Cheats Elite', ariaLabel: 'Elite' },
    { label: 'Produits et outils', ariaLabel: 'Produits' },
    { label: 'Guides de patch', ariaLabel: 'Blog' },
    { label: 'FAQ avant achat', ariaLabel: 'FAQ' },
  ],
  es: [
    { label: 'Resumen de funciones', ariaLabel: 'Funciones' },
    { label: 'Cheats Elite', ariaLabel: 'Elite' },
    { label: 'Productos y utilidades', ariaLabel: 'Productos' },
    { label: 'Guías de parches', ariaLabel: 'Blog' },
    { label: 'FAQ antes de comprar', ariaLabel: 'FAQ' },
  ],
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge<T>(base: T, overlay: DeepPartial<T> | undefined): T {
  if (!overlay) return base;
  // Keep base array length when overlay is shorter so layouts (e.g. feature bento) stay identical.
  if (Array.isArray(base)) {
    if (!Array.isArray(overlay)) return (overlay as T) ?? base;
    const baseArr = base as unknown[];
    const overArr = overlay as unknown[];
    const len = Math.max(baseArr.length, overArr.length);
    const merged: unknown[] = [];
    for (let i = 0; i < len; i += 1) {
      if (i >= overArr.length) {
        merged.push(baseArr[i]);
      } else if (i >= baseArr.length) {
        merged.push(overArr[i]);
      } else if (isPlainObject(baseArr[i]) && isPlainObject(overArr[i])) {
        merged.push(deepMerge(baseArr[i], overArr[i] as DeepPartial<typeof baseArr[i]>));
      } else {
        merged.push(overArr[i]);
      }
    }
    return merged as T;
  }
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return (overlay as T) ?? base;
  }

  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    const current = result[key];
    result[key] = isPlainObject(current) && isPlainObject(value)
      ? deepMerge(current, value as DeepPartial<typeof current>)
      : Array.isArray(current) && Array.isArray(value)
        ? deepMerge(current, value as DeepPartial<typeof current>)
        : value;
  }
  return result as T;
}

const cache = new Map<LocaleCode, Translations>();

export function useTranslations(locale: LocaleCode = DEFAULT_LOCALE): Translations {
  const cached = cache.get(locale);
  if (cached) return cached;

  if (locale === DEFAULT_LOCALE) {
    cache.set(locale, en);
    return en;
  }

  let merged = deepMerge(en, overlays[locale]);
  const homeExtra = homeSectionOverlays[locale as keyof typeof homeSectionOverlays];
  if (homeExtra) {
    merged = deepMerge(merged, homeExtra as DeepPartial<Translations>);
  }

  // Prefix nav / footer hrefs with locale path (skip missing localized pages)
  merged.nav = merged.nav.map((link) => ({
    ...link,
    href: localizeHref(link.href, locale),
  }));
  const exploreLabels = FOOTER_EXPLORE_LABELS[locale];
  merged.footer.exploreLinks = merged.footer.exploreLinks.map((link, index) => {
    const labels = exploreLabels?.[index];
    return {
      ...link,
      ...(labels ? { label: labels.label, ariaLabel: labels.ariaLabel } : {}),
      href: link.href.startsWith('#') || link.scrollTarget ? link.href : localizeHref(link.href, locale),
    };
  });
  merged.setup.ctaPrimaryHref = localizeHref(merged.setup.ctaPrimaryHref, locale);
  merged.setup.ctaSecondaryHref = localizeHref(merged.setup.ctaSecondaryHref, locale);
  merged.workflow.ctaHref = localizeHref(merged.workflow.ctaHref, locale);
  merged.workflow.ctaSecondaryHref = localizeHref(merged.workflow.ctaSecondaryHref, locale);
  merged.cheats.items = merged.cheats.items.map((item) => ({
    ...item,
    href: localizeHref(item.href, locale),
  }));
  merged.products.items = merged.products.items.map((item) => ({
    ...item,
    href: localizeHref(item.href, locale),
  }));

  cache.set(locale, merged);
  return merged;
}

/** Strip known locale prefix from a pathname. */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];
  if (maybeLocale && isLocaleCode(maybeLocale) && maybeLocale !== DEFAULT_LOCALE) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}/`.replace(/\/{2,}/g, '/') : '/';
  }
  return pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
}

export function getLocaleFromPathname(pathname: string): LocaleCode {
  const first = pathname.split('/').filter(Boolean)[0];
  if (first && isLocaleCode(first) && first !== DEFAULT_LOCALE) return first;
  return DEFAULT_LOCALE;
}

/** Paths that are English-only and must never get a locale prefix. */
const ENGLISH_ONLY_PREFIXES = ['/forum', '/go/'];

export function isEnglishOnlyPath(pathname: string): boolean {
  const bare = stripLocalePrefix(pathname);
  return ENGLISH_ONLY_PREFIXES.some(
    (prefix) => bare === prefix || bare === `${prefix}/` || bare.startsWith(`${prefix}/`),
  );
}

export function withLocalePrefix(href: string, locale: LocaleCode): string {
  if (!href.startsWith('/')) return href;
  if (href.startsWith('/go/')) return href;
  // Forum (and other EN-only sections) stay on unprefixed URLs for every locale.
  if (isEnglishOnlyPath(href)) {
    const bare = stripLocalePrefix(href);
    return bare.endsWith('/') || bare === '/' ? bare : `${bare}/`;
  }
  const bare = stripLocalePrefix(href);
  const prefix = LOCALE_BY_CODE[locale].pathPrefix;
  if (!prefix) return bare === '/' ? '/' : bare.endsWith('/') ? bare : `${bare}/`;
  if (bare === '/') return `${prefix}/`;
  return `${prefix}${bare.endsWith('/') ? bare : `${bare}/`}`;
}

export function switchLocalePath(pathname: string, nextLocale: LocaleCode): string {
  const bare = stripLocalePrefix(pathname);

  // Prefer the same page in the target locale when it exists.
  if (localeHasPage(nextLocale, bare)) {
    return withLocalePrefix(bare, nextLocale);
  }

  // Light locales: non-elite product details → elite hub page.
  if (LOCALE_BY_CODE[nextLocale].tier === 'light' && bare.startsWith('/products/apex-cheats/')) {
    if (bare === '/products/apex-cheats/' || bare === '/products/apex-cheats') {
      return withLocalePrefix('/products/apex-cheats/', nextLocale);
    }
    return withLocalePrefix('/products/apex-cheats/apex-elite/', nextLocale);
  }

  // Medium/full: blog post missing in that locale → blog index when available.
  if (bare.startsWith('/blog/') && localeHasPage(nextLocale, '/blog/')) {
    return withLocalePrefix('/blog/', nextLocale);
  }

  // Products detail missing → products hub when available.
  if (bare.startsWith('/products/apex-cheats/') && localeHasPage(nextLocale, '/products/apex-cheats/')) {
    return withLocalePrefix('/products/apex-cheats/', nextLocale);
  }

  // Always-safe fallback: localized home (or EN home).
  return withLocalePrefix('/', nextLocale);
}

function pageKindFromPath(bare: string): { kind: LocalizedPageKind; blogSlug?: string } | null {
  if (bare === '/' || bare === '') return { kind: 'home' };
  if (bare === '/blog/' || bare === '/blog') return { kind: 'blog-index' };
  if (bare.startsWith('/blog/')) {
    const slug = bare.replace(/^\/blog\//, '').replace(/\/$/, '');
    return { kind: 'blog-post', blogSlug: slug };
  }
  if (bare === '/products/apex-cheats/' || bare === '/products/apex-cheats') return { kind: 'products-hub' };
  if (bare === '/products/apex-cheats/cheat-tools/' || bare === '/products/apex-cheats/cheat-tools') {
    return { kind: 'product-utilities' };
  }
  if (bare === '/products/apex-cheats/apex-elite/' || bare === '/products/apex-cheats/apex-elite') {
    return { kind: 'product-elite' };
  }
  if (bare.startsWith('/products/apex-cheats/')) return { kind: 'product-detail' };
  if (bare.startsWith('/faq')) return { kind: 'faq' };
  if (bare.startsWith('/support')) return { kind: 'support' };
  if (bare.startsWith('/about')) return { kind: 'about' };
  if (bare.startsWith('/privacy')) return { kind: 'privacy' };
  if (bare.startsWith('/terms')) return { kind: 'terms' };
  if (bare.startsWith('/forum')) return { kind: 'forum' };
  return null;
}

function localeHasPage(locale: LocaleCode, bare: string): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  const info = pageKindFromPath(bare);
  if (!info) return false;
  const allowed = localesForPage(info.kind, info.blogSlug);
  if (!allowed.includes(locale)) return false;
  // Light locales only ship elite product detail, not other slugs
  if (info.kind === 'product-detail' && LOCALE_BY_CODE[locale].tier === 'light') {
    return bare.includes('/apex-elite');
  }
  if (info.kind === 'blog-post' && LOCALE_BY_CODE[locale].tier === 'medium') {
    return !!info.blogSlug && (TOP_BLOG_SLUGS_FOR_MEDIUM as readonly string[]).includes(info.blogSlug);
  }
  return true;
}

export function hreflangAlternates(pathname: string, siteOrigin: string): { hreflang: string; href: string }[] {
  const bare = stripLocalePrefix(pathname);
  const locales = LOCALES.filter((locale) => localeHasPage(locale.code, bare));
  return locales
    .map((locale) => ({
      hreflang: locale.hreflang,
      href: `${siteOrigin}${withLocalePrefix(bare, locale.code)}`,
    }))
    .concat([
      {
        hreflang: 'x-default',
        href: `${siteOrigin}${withLocalePrefix(bare, DEFAULT_LOCALE)}`,
      },
    ]);
}

export function localizeProductShowcaseUrls(
  buyUrl: string,
  detailsUrl: string,
  locale: LocaleCode,
): { buyUrl: string; detailsUrl: string } {
  return {
    buyUrl:
      buyUrl.startsWith('/go/') || buyUrl.startsWith('http://') || buyUrl.startsWith('https://')
        ? buyUrl
        : withLocalePrefix(buyUrl, locale),
    detailsUrl: withLocalePrefix(detailsUrl, locale),
  };
}

/** Prefer locale overlay blog card copy when present. */
export function localizedBlogCard(
  slug: string,
  locale: LocaleCode,
): Pick<Translations['blog']['items'][number], 'title' | 'desc' | 'tag' | 'date' | 'readTime'> | undefined {
  if (locale === 'en') return undefined;
  const items = useTranslations(locale).blog.items;
  const match = items.find((item) => item.slug === slug);
  if (!match) return undefined;
  return {
    title: match.title,
    desc: match.desc,
    tag: match.tag,
    date: match.date,
    readTime: match.readTime,
  };
}

/**
 * Locale-aware internal link: use localized URL when that page exists,
 * otherwise fall back to the English page (never a 404 under /{lang}/).
 */
export function localizeHref(href: string, locale: LocaleCode): string {
  if (!href.startsWith('/') || href.startsWith('#') || href.startsWith('/go/')) return href;
  const bare = stripLocalePrefix(href);
  if (isEnglishOnlyPath(bare)) return withLocalePrefix(bare, DEFAULT_LOCALE);
  if (localeHasPage(locale, bare)) return withLocalePrefix(bare, locale);
  return withLocalePrefix(bare, DEFAULT_LOCALE);
}
