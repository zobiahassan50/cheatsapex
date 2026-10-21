export type { Translations } from './types';
export { en as t } from './en';
export {
  DEFAULT_LOCALE,
  FULL_LOCALES,
  LIGHT_LOCALES,
  LOCALES,
  LOCALE_BY_CODE,
  MEDIUM_LOCALES,
  NON_DEFAULT_LOCALES,
  TOP_BLOG_SLUGS_FOR_MEDIUM,
  isLocaleCode,
  type ConversionTier,
  type LocaleCode,
  type LocaleDefinition,
} from './locales';
export {
  getLocaleFromPathname,
  hreflangAlternates,
  isEnglishOnlyPath,
  localizeHref,
  localizedBlogCard,
  localizeProductShowcaseUrls,
  stripLocalePrefix,
  switchLocalePath,
  useTranslations,
  withLocalePrefix,
} from './utils';

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=111215,2d6ee2,1b1c24,e9a82f,0c0c12`;
}
