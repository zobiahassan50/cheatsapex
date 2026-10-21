/**
 * Geographic conversion ranking for cheatsapex.com
 *
 * Domain-specific Search Console geo exports were not available in-repo.
 * Ranking uses public Apex-cheats demand proxies (cheat-search studies +
 * non-English Apex market size), strongest → weakest for localization ROI.
 * English-default markets (US, UK, CA, AU) stay on `/` (en).
 *
 * 1. Brazil (pt) — strongest: #1 country for Apex Legends cheat search volume
 * 2. Russia (ru) — #1 overall gaming-cheat search index
 * 3. Turkey (tr) — top-10 cheat index, large non-EN Apex audience
 * 4. Germany (de) — major EU Apex market / high ARPU
 * 5. Poland (pl) — top-20 cheat index, strong Eastern EU gaming
 * 6. France (fr) — large FR Apex community
 * 7. Spain / LATAM ES (es) — Argentina & Spanish LATAM demand
 */

export type LocaleCode = 'en' | 'pt' | 'ru' | 'tr' | 'de' | 'pl' | 'fr' | 'es';

export type ConversionTier = 'full' | 'medium' | 'light' | 'default';

export interface LocaleDefinition {
  code: LocaleCode;
  /** BCP 47 language tag for <html lang> / hreflang */
  hreflang: string;
  /** og:locale */
  ogLocale: string;
  name: string;
  nativeName: string;
  /** Country this locale primarily targets */
  country: string;
  /** Strongest → weakest (1 = strongest non-EN market) */
  rank: number;
  tier: ConversionTier;
  /** URL path prefix; empty for default English */
  pathPrefix: string;
}

export const DEFAULT_LOCALE: LocaleCode = 'en';

export const LOCALES: LocaleDefinition[] = [
  {
    code: 'en',
    hreflang: 'en',
    ogLocale: 'en_US',
    name: 'English',
    nativeName: 'English',
    country: 'United States / UK / Global EN',
    rank: 0,
    tier: 'default',
    pathPrefix: '',
  },
  {
    code: 'pt',
    hreflang: 'pt-BR',
    ogLocale: 'pt_BR',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português',
    country: 'Brazil',
    rank: 1,
    tier: 'full',
    pathPrefix: '/pt',
  },
  {
    code: 'ru',
    hreflang: 'ru',
    ogLocale: 'ru_RU',
    name: 'Russian',
    nativeName: 'Русский',
    country: 'Russia',
    rank: 2,
    tier: 'medium',
    pathPrefix: '/ru',
  },
  {
    code: 'tr',
    hreflang: 'tr',
    ogLocale: 'tr_TR',
    name: 'Turkish',
    nativeName: 'Türkçe',
    country: 'Turkey',
    rank: 3,
    tier: 'medium',
    pathPrefix: '/tr',
  },
  {
    code: 'de',
    hreflang: 'de',
    ogLocale: 'de_DE',
    name: 'German',
    nativeName: 'Deutsch',
    country: 'Germany',
    rank: 4,
    tier: 'medium',
    pathPrefix: '/de',
  },
  {
    code: 'pl',
    hreflang: 'pl',
    ogLocale: 'pl_PL',
    name: 'Polish',
    nativeName: 'Polski',
    country: 'Poland',
    rank: 5,
    tier: 'light',
    pathPrefix: '/pl',
  },
  {
    code: 'fr',
    hreflang: 'fr',
    ogLocale: 'fr_FR',
    name: 'French',
    nativeName: 'Français',
    country: 'France',
    rank: 6,
    tier: 'light',
    pathPrefix: '/fr',
  },
  {
    code: 'es',
    hreflang: 'es',
    ogLocale: 'es_ES',
    name: 'Spanish',
    nativeName: 'Español',
    country: 'Spain / LATAM',
    rank: 7,
    tier: 'light',
    pathPrefix: '/es',
  },
];

export const LOCALE_BY_CODE = Object.fromEntries(
  LOCALES.map((locale) => [locale.code, locale]),
) as Record<LocaleCode, LocaleDefinition>;

export const NON_DEFAULT_LOCALES = LOCALES.filter((locale) => locale.code !== DEFAULT_LOCALE);

/** Locales that get a full site mirror (all pages + blogs). */
export const FULL_LOCALES = NON_DEFAULT_LOCALES.filter((locale) => locale.tier === 'full').map(
  (locale) => locale.code,
);

/** Homepage + main products + top blogs. */
export const MEDIUM_LOCALES = NON_DEFAULT_LOCALES.filter((locale) => locale.tier === 'medium').map(
  (locale) => locale.code,
);

/** Key pages only. */
export const LIGHT_LOCALES = NON_DEFAULT_LOCALES.filter((locale) => locale.tier === 'light').map(
  (locale) => locale.code,
);

export const TOP_BLOG_SLUGS_FOR_MEDIUM = [
  'best-cheats',
  'apex-aimbot',
  'esp-wallhack',
  'buy-cheats',
  'ea-javelin',
  'hwid-guide',
  'cheat-safety',
  'cheat-features',
] as const;

export function isLocaleCode(value: string): value is LocaleCode {
  return value in LOCALE_BY_CODE;
}
