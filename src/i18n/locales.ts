/**
 * Geographic conversion ranking for cheatsapex.com
 *
 * All non-EN locales are tier `full`: every page + every blog post is mirrored.
 * Rank still reflects localization ROI (strongest → weakest non-EN market).
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
    tier: 'full',
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
    tier: 'full',
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
    tier: 'full',
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
    tier: 'full',
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
    tier: 'full',
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
    tier: 'full',
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

/** @deprecated All non-EN locales are full; kept for import compatibility. */
export const MEDIUM_LOCALES = NON_DEFAULT_LOCALES.filter((locale) => locale.tier === 'medium').map(
  (locale) => locale.code,
);

/** @deprecated All non-EN locales are full; kept for import compatibility. */
export const LIGHT_LOCALES = NON_DEFAULT_LOCALES.filter((locale) => locale.tier === 'light').map(
  (locale) => locale.code,
);

/** @deprecated Prefer full locale blog mirrors; kept for older imports. */
export const TOP_BLOG_SLUGS_FOR_MEDIUM = [
  'best-cheats',
  'apex-aimbot',
  'esp-wallhack',
  'buy-cheats',
  'ea-javelin',
  'hwid-guide',
  'cheat-safety',
  'cheat-features',
  'elite-guide',
  'skin-guide',
  'external-cheat',
] as const;

export function isLocaleCode(value: string): value is LocaleCode {
  return value in LOCALE_BY_CODE;
}
