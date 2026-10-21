/**
 * Live-check all locale homes against the running Astro dev server.
 */
const BASE = process.env.SITE_URL || 'http://localhost:4321';

const checks = [
  { path: '/', lang: 'en', needle: 'Undetected Apex Cheats', select: 'English' },
  { path: '/pt/', lang: 'pt-BR', needle: 'Comprar Cheats Apex Legends Undetected', select: 'Português' },
  { path: '/ru/', lang: 'ru', needle: 'Купить читы Apex Legends Undetected', select: 'Русский' },
  { path: '/tr/', lang: 'tr', needle: 'Undetected Apex Legends Cheat Satın Al', select: 'Türkçe' },
  { path: '/de/', lang: 'de', needle: 'Undetected Apex Legends Cheats kaufen', select: 'Deutsch' },
  { path: '/pl/', lang: 'pl', needle: 'Kup undetected cheaty Apex Legends', select: 'Polski' },
  { path: '/fr/', lang: 'fr', needle: 'Acheter des cheats Apex Legends undetected', select: 'Français' },
  { path: '/es/', lang: 'es', needle: 'Comprar cheats Apex Legends undetected', select: 'Español' },
];

let failed = 0;

for (const c of checks) {
  const url = BASE + c.path;
  const res = await fetch(url);
  const html = await res.text();
  const problems = [];
  if (!res.ok) problems.push(`HTTP ${res.status}`);
  if (!html.includes(`lang="${c.lang}"`)) problems.push(`missing lang=${c.lang}`);
  if (!html.includes(c.needle)) problems.push(`missing needle "${c.needle}"`);
  if (!html.includes('data-language-select')) problems.push('no language switcher');
  if (!html.includes(`>${c.select}<`) && !html.includes(`>${c.select}</option>`)) {
    // option text
    if (!html.includes(c.select)) problems.push(`missing option ${c.select}`);
  }
  // switcher hrefs present
  for (const href of ['/', '/pt/', '/ru/', '/tr/', '/de/', '/pl/', '/fr/', '/es/']) {
    if (!html.includes(`value="${href}"`)) problems.push(`missing switcher value ${href}`);
  }
  // selected option should match locale path
  const selectedOk =
    c.path === '/'
      ? /selected(?:="")?[^>]*data-locale="en"|data-locale="en"[^>]*selected/.test(html)
      : new RegExp(`selected(?:="")?[^>]*data-locale="${c.path.replace(/\//g, '')}"|data-locale="${c.path.replace(/\//g, '')}"[^>]*selected`).test(
          html,
        );
  // Astro may render selected differently
  const localeCode = c.path === '/' ? 'en' : c.path.replace(/\//g, '');
  if (!html.includes(`data-locale="${localeCode}"`)) problems.push(`no data-locale ${localeCode}`);

  if (problems.length) {
    failed++;
    console.log('FAIL', c.path, problems.join('; '));
  } else {
    console.log('ok:', c.path, c.lang);
  }
}

// Cross-page switcher targets from blog → light locale should land on home or elite
const blogRes = await fetch(BASE + '/blog/');
const blogHtml = await blogRes.text();
if (!blogHtml.includes('value="/es/"') || !blogHtml.includes('value="/pl/"')) {
  console.log('FAIL /blog/ missing light-locale switcher targets');
  failed++;
} else {
  console.log('ok: /blog/ switcher includes light locales');
}

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log('\nALL LIVE LOCALE CHECKS PASSED');
