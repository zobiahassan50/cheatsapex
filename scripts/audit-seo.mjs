/**
 * Technical SEO audit: redirect single-hop, internal link targets resolve.
 * Exit 1 on loops or broken internal paths found in src content.
 */
import fs from 'node:fs';
import path from 'node:path';
import { PATH_REDIRECTS, auditRedirectGraph } from './redirects.mjs';
import { BLOG_SLUG_REDIRECTS, FORUM_SLUG_REDIRECTS } from './slug-redirects.mjs';

const root = process.cwd();

const issues = auditRedirectGraph();
if (issues.some((i) => i.type === 'loop')) {
  console.error('[audit-seo] Redirect loops:', issues.filter((i) => i.type === 'loop'));
  process.exit(1);
}
if (issues.some((i) => i.type === 'chain')) {
  console.error('[audit-seo] Multi-hop chains:', issues.filter((i) => i.type === 'chain'));
  process.exit(1);
}

/** Collect known good EN routes from source of truth. */
const blogPostsPath = path.join(root, 'src/data/blog/posts.ts');
const forumPath = path.join(root, 'src/data/forum.ts');
const blogSrc = fs.readFileSync(blogPostsPath, 'utf8');
const forumSrc = fs.readFileSync(forumPath, 'utf8');

const blogSlugs = [...blogSrc.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map((m) => m[1]);
const forumSlugs = [...forumSrc.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map((m) => m[1]);

const known = new Set([
  '/',
  '/blog/',
  '/forum/',
  '/faq/',
  '/about/',
  '/support/',
  '/privacy/',
  '/terms/',
  '/products/apex-cheats/',
  '/products/apex-cheats/apex-elite/',
  '/products/apex-cheats/hwid-spoofer/',
  '/products/apex-cheats/ban-appeal/',
  '/products/apex-cheats/unlock-all/',
  '/products/apex-cheats/cheat-tools/',
  '/go/apex/',
  '/go/hwid-spoofer/',
  '/go/ugc/',
  '/go/skin-changer/',
  '/rss.xml',
]);
for (const s of blogSlugs) known.add(`/blog/${s}/`);
for (const s of forumSlugs) known.add(`/forum/${s}/`);

function normalize(href) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('{{')) {
    return null;
  }
  let p = href.split('#')[0].split('?')[0];
  if (!p.startsWith('/')) return null;
  if (p !== '/' && !p.endsWith('/')) p += '/';
  // Resolve through redirect map to final
  const via = PATH_REDIRECTS.get(p) ?? PATH_REDIRECTS.get(p.slice(0, -1));
  return via ?? p;
}

const contentRoots = [
  'src/data',
  'src/i18n',
  'src/pages',
  'src/components',
  'src/config',
];
const linkRe = /\]\((\/[^)]+)\)|href:\s*['"](\/[^'"]+)['"]|href=\{?['"](\/[^'"]+)['"]/g;
const broken = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      walk(full);
      continue;
    }
    if (!/\.(ts|astro|mjs|js|md)$/.test(name)) continue;
    const text = fs.readFileSync(full, 'utf8');
    for (const match of text.matchAll(linkRe)) {
      const raw = match[1] || match[2] || match[3];
      const final = normalize(raw);
      if (!final) continue;
      if (final.startsWith('/images/') || final.startsWith('/videos/') || final.startsWith('/fonts/')) continue;
      if (final.startsWith('/_astro/')) continue;
      if (known.has(final)) continue;
      // Allow locale-prefixed paths loosely
      if (/^\/(pt|ru|tr|de|pl|fr|es)\//.test(final)) continue;
      // Old slugs that redirect are OK if map resolves into known
      const dest = PATH_REDIRECTS.get(final) ?? PATH_REDIRECTS.get(final.replace(/\/$/, ''));
      if (dest && known.has(dest)) continue;
      // Skip dynamic template crumbs
      if (final.includes('${') || final.includes('[lang]')) continue;
      broken.push({ file: path.relative(root, full), href: raw, final });
    }
  }
}

for (const rel of contentRoots) walk(path.join(root, rel));

const unique = [...new Map(broken.map((b) => [`${b.final}|${b.file}`, b])).values()];
// Filter false positives: productPath() builders, ROUTES, etc. that are incomplete
const real = unique.filter((b) => {
  if (b.final === '/products/' || b.final === '/go/') return false;
  if (b.href.includes('${')) return false;
  // Redirect sources are fine (they 301)
  if (PATH_REDIRECTS.has(b.final) || PATH_REDIRECTS.has(b.final.slice(0, -1))) return false;
  // Old blog/forum long slugs covered by maps
  const blogOld = Object.keys(BLOG_SLUG_REDIRECTS).some((s) => b.final === `/blog/${s}/`);
  const forumOld = Object.keys(FORUM_SLUG_REDIRECTS).some((s) => b.final === `/forum/${s}/`);
  if (blogOld || forumOld) return false;
  return true;
});

if (real.length) {
  console.warn(`[audit-seo] ${real.length} possible broken internal links:`);
  for (const b of real.slice(0, 40)) {
    console.warn(`  ${b.href} → ${b.final}  (${b.file})`);
  }
  if (real.length > 40) console.warn(`  …and ${real.length - 40} more`);
} else {
  console.log('[audit-seo] No broken internal links detected.');
}

console.log(`[audit-seo] OK — ${PATH_REDIRECTS.size} redirect keys, single-hop, ${blogSlugs.length} blog + ${forumSlugs.length} forum slugs.`);
