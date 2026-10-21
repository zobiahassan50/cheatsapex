/**
 * Live-test every locale home + key pages: HTTP, lang, H1, feature count, switcher links.
 */
const BASE = process.env.SITE_URL || 'http://localhost:4321';

const homes = [
  { path: '/', code: 'en', lang: 'en', h1: 'Undetected Apex Cheats' },
  { path: '/pt/', code: 'pt', lang: 'pt-BR', h1: 'Comprar Cheats Apex Legends Undetected' },
  { path: '/ru/', code: 'ru', lang: 'ru', h1: 'Купить читы Apex Legends Undetected' },
  { path: '/tr/', code: 'tr', lang: 'tr', h1: 'Undetected Apex Legends Cheat Satın Al' },
  { path: '/de/', code: 'de', lang: 'de', h1: 'Undetected Apex Legends Cheats kaufen' },
  { path: '/pl/', code: 'pl', lang: 'pl', h1: 'Kup undetected cheaty Apex Legends' },
  { path: '/fr/', code: 'fr', lang: 'fr', h1: 'Acheter des cheats Apex Legends undetected' },
  { path: '/es/', code: 'es', lang: 'es', h1: 'Comprar cheats Apex Legends undetected' },
];

const extraPages = [
  '/products/apex-cheats/',
  '/products/apex-cheats/elite/',
  '/blog/',
  '/pt/products/apex-cheats/',
  '/pt/products/apex-cheats/elite/',
  '/pt/blog/',
  '/ru/products/apex-cheats/',
  '/ru/blog/',
  '/de/products/apex-cheats/elite/',
  '/de/blog/',
  '/tr/products/apex-cheats/',
  '/es/products/apex-cheats/',
  '/es/products/apex-cheats/elite/',
  '/pl/products/apex-cheats/elite/',
  '/fr/products/apex-cheats/',
];

const EN_SECTIONS = ['hero', 'features', 'products', 'why-us', 'setup-guide', 'workflow', 'blog', 'faq'];
let failed = 0;

function fail(msg) {
  failed += 1;
  console.log('FAIL', msg);
}

async function get(path) {
  const res = await fetch(BASE + path);
  const html = await res.text();
  return { res, html };
}

console.log('=== Homes ===');
for (const home of homes) {
  const { res, html } = await get(home.path);
  if (!res.ok) fail(`${home.path} HTTP ${res.status}`);
  if (!html.includes(`lang="${home.lang}"`)) fail(`${home.path} lang!=${home.lang}`);
  if (!html.includes(home.h1)) fail(`${home.path} missing H1 "${home.h1}"`);

  const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"/g)].map((m) => m[1]);
  if (sections.join(',') !== EN_SECTIONS.join(',')) {
    fail(`${home.path} sections ${sections.join(',')} != ${EN_SECTIONS.join(',')}`);
  }

  const h3 = [...html.matchAll(/<h3[^>]*>/g)].length;
  // EN baseline ~22; allow small variance but PT must match now
  if (h3 < 20) fail(`${home.path} too few h3 (${h3}) — layout likely missing feature cards`);

  for (const code of ['en', 'pt', 'ru', 'tr', 'de', 'pl', 'fr', 'es']) {
    if (!html.includes(`data-locale="${code}"`)) fail(`${home.path} switcher missing ${code}`);
  }
  // link-based switcher targets
  const expectedHrefs = ['/', '/pt/', '/ru/', '/tr/', '/de/', '/pl/', '/fr/', '/es/'];
  for (const href of expectedHrefs) {
    if (!html.includes(`href="${href}"`)) {
      // allow prefixed paths when switching from nested pages; on home these exact hrefs exist
      if (home.path === '/' || home.path.match(/^\/[a-z]{2}\/$/)) {
        // From localized home, English is href="/" and others are /xx/
        if (!html.includes(`href="${href}"`)) fail(`${home.path} missing switcher href ${href}`);
      }
    }
  }

  console.log('ok', home.path, home.code, `h3=${h3}`);
}

console.log('\n=== Extra pages ===');
for (const path of extraPages) {
  const { res, html } = await get(path);
  if (!res.ok) fail(`${path} HTTP ${res.status}`);
  if (!html.includes('data-language-switcher') && !html.includes('data-language-option')) {
    fail(`${path} missing language switcher`);
  }
  console.log('ok', path, res.status);
}

console.log('\n=== Switcher path matrix ===');
const samples = [
  ['/', 'pt', '/pt/'],
  ['/blog/', 'es', '/es/'], // light: blog → home
  ['/products/apex-cheats/lite/', 'pl', '/pl/products/apex-cheats/elite/'],
  ['/pt/blog/', 'en', '/blog/'],
  ['/de/products/apex-cheats/elite/', 'fr', '/fr/products/apex-cheats/elite/'],
];

for (const [from, to, expect] of samples) {
  const { html } = await get(from);
  const re = new RegExp(`href="${expect.replace(/\//g, '\\/')}"[^>]*data-locale="${to}"|data-locale="${to}"[^>]*href="${expect.replace(/\//g, '\\/')}"`);
  if (!re.test(html) && !html.includes(`href="${expect}"`)) {
    fail(`from ${from} → ${to} expected href ${expect}`);
  } else {
    console.log('ok', from, '→', to, expect);
  }
}

if (failed) {
  console.error(`\n${failed} FAILURE(S)`);
  process.exit(1);
}
console.log('\nALL LIVE TESTS PASSED');
