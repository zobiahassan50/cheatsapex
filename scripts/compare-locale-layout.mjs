const BASE = process.env.SITE_URL || 'http://localhost:4321';
const locs = [
  { path: '/', code: 'en' },
  { path: '/pt/', code: 'pt' },
  { path: '/ru/', code: 'ru' },
  { path: '/tr/', code: 'tr' },
  { path: '/de/', code: 'de' },
  { path: '/pl/', code: 'pl' },
  { path: '/fr/', code: 'fr' },
  { path: '/es/', code: 'es' },
];

const en = await (await fetch(BASE + '/')).text();
const enSections = [...en.matchAll(/<section[^>]*id="([^"]+)"/g)].map((m) => m[1]);
const enH2 = [...en.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].length;
const enFeatureCards = (en.match(/bento|feature-card|data-feature/gi) || []).length;
// count feature titles in features section roughly via h3 in first features region
const enH3 = [...en.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].length;

console.log('EN sections:', enSections.join(','));
console.log('EN h2/h3:', enH2, enH3);

for (const loc of locs) {
  const html = await (await fetch(BASE + loc.path)).text();
  const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"/g)].map((m) => m[1]);
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].length;
  const h3 = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].length;
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]
    ?.replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
  const sectionDiff =
    sections.join(',') === enSections.join(',') ? 'same' : `DIFF want=${enSections.join(',')} got=${sections.join(',')}`;
  const countDiff = h2 === enH2 && h3 === enH3 ? 'same counts' : `h2 ${h2}/${enH2} h3 ${h3}/${enH3}`;
  const switcherVals = [...html.matchAll(/data-locale="([^"]+)"/g)].map((m) => m[1]);
  console.log(loc.code, { h1, sectionDiff, countDiff, switcherLocales: [...new Set(switcherVals)].join(',') });
}
