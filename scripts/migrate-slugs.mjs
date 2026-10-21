/**
 * Rewrite long slugs → 2-word SEO slugs. Preserves /images/ paths.
 * Run: node scripts/migrate-slugs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

export const BLOG = {
  'best-apex-legends-cheats-2026': 'best-cheats',
  'undetected-apex-legends-aimbot': 'apex-aimbot',
  'apex-legends-esp-wallhack-2026': 'esp-wallhack',
  'ea-javelin-anticheat-apex-cheats': 'ea-javelin',
  'apex-legends-hwid-spoofer-javelin': 'hwid-guide',
  'buy-undetected-apex-cheats': 'buy-cheats',
  'are-apex-legends-cheats-safe-2026': 'cheat-safety',
  'apex-cheats-features-guide': 'cheat-features',
  'apex-lite-vs-pro': 'elite-guide',
  'apex-skin-changer-guide': 'skin-guide',
  'apex-external-cheat-guide': 'external-cheat',
};

export const FORUM = {
  'best-apex-cheats-2026-which-tier': 'best-tier',
  'ea-javelin-status-before-ranked': 'javelin-status',
  'are-apex-cheats-safe-undetected': 'safe-undetected',
  'what-does-apex-map-awareness-include': 'map-awareness',
  'how-to-set-up-map-overlay': 'map-overlay',
  'what-zoom-settings-are-comfortable': 'zoom-settings',
  'how-to-tune-script-delay-settings': 'aimbot-delay',
  'how-to-practice-aimbot-presets': 'aimbot-practice',
  'what-is-in-the-elite-tier': 'elite-tier',
  'how-do-lite-and-pro-differ': 'tier-compare',
  'what-to-know-about-skin-changer': 'skin-tips',
  'what-to-do-if-eac-cannot-verify': 'javelin-verify',
  'how-does-an-external-loader-work': 'external-loader',
  'how-to-check-stream-proof-capture': 'stream-proof',
  'what-to-do-after-hwid-change': 'hwid-change',
  'what-to-check-before-installing-tools': 'install-check',
  'how-to-choose-apex-2-product-tier': 'choose-tier',
  'what-to-check-after-a-apex-2-patch': 'after-patch',
  'apex-lite-or-pro-aimbot': 'aimbot-tier',
};

const PRODUCT_PAIRS = [
  ['elite', 'apex-elite'],
  ['ugc', 'ban-appeal'],
  ['utilities', 'cheat-tools'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|astro|mjs|js|css|md|txt)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function protectImages(content) {
  const tokens = [];
  const next = content.replace(/\/images\/[^\s"'`)]+/g, (match) => {
    const key = `__IMG_${tokens.length}__`;
    tokens.push(match);
    return key;
  });
  return {
    content: next,
    restore: (c) => {
      let out = c;
      tokens.forEach((img, i) => {
        out = out.split(`__IMG_${i}__`).join(img);
      });
      return out;
    },
  };
}

function applyBlog(content) {
  let next = content;
  const entries = Object.entries(BLOG).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    next = next.split(`/blog/${from}/`).join(`/blog/${to}/`);
    next = next.split(`/blog/${from}'`).join(`/blog/${to}'`);
    next = next.split(`/blog/${from}"`).join(`/blog/${to}"`);
    next = next.split(`/blog/${from}\``).join(`/blog/${to}\``);
    next = next.split(`slug: "${from}"`).join(`slug: "${to}"`);
    next = next.split(`slug: '${from}'`).join(`slug: '${to}'`);
    next = next.split(`'${from}':`).join(`'${to}':`);
    next = next.split(`"${from}":`).join(`"${to}":`);
    next = next.split(`'${from}'`).join(`'${to}'`);
    next = next.split(`"${from}"`).join(`"${to}"`);
  }
  return next;
}

function applyForum(content) {
  let next = content;
  const entries = Object.entries(FORUM).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    next = next.split(`/forum/${from}/`).join(`/forum/${to}/`);
    next = next.split(`/forum/${from}'`).join(`/forum/${to}'`);
    next = next.split(`/forum/${from}"`).join(`/forum/${to}"`);
    next = next.split(`slug: '${from}'`).join(`slug: '${to}'`);
    next = next.split(`slug: "${from}"`).join(`slug: "${to}"`);
  }
  return next;
}

function applyProducts(content) {
  let next = content;
  for (const [from, to] of PRODUCT_PAIRS) {
    next = next.split(`/products/apex-cheats/${from}/`).join(`/products/apex-cheats/${to}/`);
    next = next.split(`/products/apex-cheats/${from}'`).join(`/products/apex-cheats/${to}'`);
    next = next.split(`/products/apex-cheats/${from}"`).join(`/products/apex-cheats/${to}"`);
    next = next.split(`productPath('${from}')`).join(`productPath('${to}')`);
    next = next.split(`productPath("${from}")`).join(`productPath("${to}")`);
    next = next.split(`\${productBase}${from}/`).join(`\${productBase}${to}/`);
    next = next.split(`scopes: ['${from}']`).join(`scopes: ['${to}']`);
    next = next.split(`case '${from}':`).join(`case '${to}':`);
    next = next.split(`case "${from}":`).join(`case "${to}":`);
    next = next.replace(new RegExp(`(^|\\n)(\\s*)${from}:(\\s*[\\[{])`, 'g'), `$1$2'${to}':$3`);
    next = next.replace(new RegExp(`(^|\\n)(\\s*)'${from}':`, 'g'), `$1$2'${to}':`);
    next = next.replace(new RegExp(`(^|\\n)(\\s*)"${from}":`, 'g'), `$1$2"${to}":`);
  }
  return next;
}

const files = [
  ...walk(path.join(root, 'src')),
  path.join(root, 'astro.config.mjs'),
  path.join(root, 'public', '_redirects'),
];

const SKIP = new Set([
  'src/components/Hero.astro',
  'src/components/FeaturesSection.astro',
  'src/components/WorkflowSection.astro',
]);

let changed = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (SKIP.has(rel)) continue;

  const original = fs.readFileSync(file, 'utf8');
  const { content: protectedContent, restore } = protectImages(original);
  let next = applyBlog(protectedContent);
  next = applyForum(next);
  next = applyProducts(next);
  next = restore(next);

  if (next !== original) {
    fs.writeFileSync(file, next);
    changed++;
    console.log('updated', rel);
  }
}

console.log(`Done. Files changed: ${changed}`);
