/**
 * Verify every locale: built pages, translated chrome, switcher targets exist.
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_BY_CODE,
  TOP_BLOG_SLUGS_FOR_MEDIUM,
} from '../src/i18n/locales.ts';
import { localesForPage } from '../src/i18n/routing.ts';
import { switchLocalePath, withLocalePrefix, localizeHref, useTranslations } from '../src/i18n/utils.ts';

const root = process.cwd();
const dist = path.join(root, 'dist');
let failures = 0;

function fail(msg) {
  failures++;
  console.error('FAIL:', msg);
}

function ok(msg) {
  console.log('ok:', msg);
}

function pageExists(urlPath) {
  const clean = urlPath.replace(/\/$/, '') || '';
  const candidates = [
    path.join(dist, clean, 'index.html'),
    path.join(dist, clean || 'index.html'),
  ];
  if (!clean) candidates.unshift(path.join(dist, 'index.html'));
  return candidates.some((p) => fs.existsSync(p));
}

function readHtml(urlPath) {
  const clean = urlPath.replace(/\/$/, '') || '';
  const file = clean
    ? path.join(dist, clean, 'index.html')
    : path.join(dist, 'index.html');
  return fs.readFileSync(file, 'utf8');
}

// Expected pages per tier
const expectedByLocale = {
  en: ['/', '/blog/', '/products/apex-cheats/', '/products/apex-cheats/elite/', '/faq/', '/support/', '/forum/', '/about/'],
  pt: [
    '/pt/',
    '/pt/blog/',
    '/pt/products/apex-cheats/',
    '/pt/products/apex-cheats/elite/',
    '/pt/faq/',
    '/pt/support/',
    '/pt/about/',
    '/pt/privacy/',
    '/pt/terms/',
    ...TOP_BLOG_SLUGS_FOR_MEDIUM.map((s) => `/pt/blog/${s}/`),
  ],
  ru: [
    '/ru/',
    '/ru/blog/',
    '/ru/products/apex-cheats/',
    '/ru/products/apex-cheats/elite/',
    '/ru/products/apex-cheats/utilities/',
    ...TOP_BLOG_SLUGS_FOR_MEDIUM.map((s) => `/ru/blog/${s}/`),
  ],
  tr: [
    '/tr/',
    '/tr/blog/',
    '/tr/products/apex-cheats/',
    '/tr/products/apex-cheats/elite/',
    ...TOP_BLOG_SLUGS_FOR_MEDIUM.map((s) => `/tr/blog/${s}/`),
  ],
  de: [
    '/de/',
    '/de/blog/',
    '/de/products/apex-cheats/',
    '/de/products/apex-cheats/elite/',
    ...TOP_BLOG_SLUGS_FOR_MEDIUM.map((s) => `/de/blog/${s}/`),
  ],
  pl: ['/pl/', '/pl/products/apex-cheats/', '/pl/products/apex-cheats/elite/'],
  fr: ['/fr/', '/fr/products/apex-cheats/', '/fr/products/apex-cheats/elite/'],
  es: ['/es/', '/es/products/apex-cheats/', '/es/products/apex-cheats/elite/'],
};

console.log('=== 1. Built pages per locale ===');
for (const [locale, pages] of Object.entries(expectedByLocale)) {
  for (const p of pages) {
    if (!pageExists(p)) fail(`missing page ${p} (${locale})`);
  }
  ok(`${locale}: ${pages.length} expected pages present`);
}

console.log('\n=== 2. Language switcher targets resolve ===');
const probePaths = [
  '/',
  '/blog/',
  '/blog/undetected-apex-legends-aimbot/',
  '/blog/apex-skin-changer-guide/',
  '/products/apex-cheats/',
  '/products/apex-cheats/hwid-spoofer/',
  '/products/apex-cheats/elite/',
  '/faq/',
  '/forum/',
  '/support/',
  '/pt/faq/',
  '/de/blog/',
  '/es/products/apex-cheats/elite/',
];

for (const from of probePaths) {
  if (!pageExists(from) && from !== '/forum/') {
    // forum exists
  }
  if (!pageExists(from)) {
    fail(`probe source missing: ${from}`);
    continue;
  }
  for (const locale of LOCALES) {
    const target = switchLocalePath(from, locale.code);
    if (!pageExists(target)) {
      fail(`switch ${from} -> ${locale.code} = ${target} (missing)`);
    }
  }
}
ok('all switchLocalePath targets exist');

console.log('\n=== 3. Translated chrome (hero H1 not English on non-EN homes) ===');
const enHero = 'Undetected Apex Cheats';
for (const locale of LOCALES.filter((l) => l.code !== 'en')) {
  const home = withLocalePrefix('/', locale.code);
  const html = readHtml(home);
  const t = useTranslations(locale.code);
  if (!html.includes(t.hero.titleLine1) && !html.includes(t.hero.titleLine2)) {
    fail(`${locale.code} home missing translated hero title`);
  }
  if (html.includes(`>${enHero}<`) && locale.code !== 'en') {
    // Some locales might keep similar English brand words; check titleLine1 specifically
    if (t.hero.titleLine1 !== enHero && html.includes(enHero) && !html.includes(t.hero.titleLine1)) {
      fail(`${locale.code} home still shows English hero only`);
    }
  }
  if (!html.includes('data-language-select')) fail(`${locale.code} home missing language switcher`);
  if (!html.includes(`lang="${locale.hreflang}"`)) fail(`${locale.code} wrong html lang`);
  ok(`${locale.code}: hero + switcher + lang=${locale.hreflang}`);
}

console.log('\n=== 4. Nav links on each home resolve ===');
for (const locale of LOCALES) {
  const home = withLocalePrefix('/', locale.code);
  const html = readHtml(home);
  const navMatch = html.match(/<nav[^>]*aria-label="Primary"[^>]*>([\s\S]*?)<\/nav>/);
  const hrefs = navMatch?.[1] ?? '';
  const links = [...hrefs.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of links) {
    if (href.startsWith('http') || href.startsWith('/go/')) continue;
    if (!pageExists(href)) fail(`${locale.code} nav broken: ${href}`);
  }
  ok(`${locale.code}: ${links.length} primary nav links ok`);
}

console.log('\n=== 5. localizeHref sanity ===');
const checks = [
  ['/faq/', 'de', '/faq/'],
  ['/faq/', 'pt', '/pt/faq/'],
  ['/forum/', 'pt', '/forum/'],
  ['/blog/', 'pl', '/blog/'],
  ['/blog/', 'de', '/de/blog/'],
  ['/products/apex-cheats/elite/', 'es', '/es/products/apex-cheats/elite/'],
];
for (const [href, locale, expect] of checks) {
  const got = localizeHref(href, locale);
  if (got !== expect) fail(`localizeHref(${href},${locale})=${got} want ${expect}`);
}
ok('localizeHref checks passed');

console.log('\n=== 6. localesForPage coverage ===');
for (const kind of ['home', 'products-hub', 'product-elite', 'blog-index', 'faq', 'forum']) {
  const list = localesForPage(kind);
  ok(`${kind}: [${list.join(', ') || 'en-only'}]`);
}

console.log('\n' + (failures ? `FAILED ${failures}` : 'ALL LOCALES OK'));
process.exit(failures ? 1 : 0);
