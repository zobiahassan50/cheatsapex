/**
 * Single-hop path redirects (301). Every destination is a final URL —
 * never point at another redirect source (avoids ERR_TOO_MANY_REDIRECTS).
 */
import {
  BLOG_SLUG_REDIRECTS,
  FORUM_SLUG_REDIRECTS,
  PRODUCT_PATH_REDIRECTS,
} from './slug-redirects.mjs';

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

/** @type {Map<string, string>} */
export const PATH_REDIRECTS = new Map();

function add(from, to) {
  const dest = to.endsWith('/') || to.startsWith('http') ? to : `${to}/`;
  for (const key of from.endsWith('/') ? [from, from.slice(0, -1)] : [from, `${from}/`]) {
    if (key === '/' || key === dest) continue;
    PATH_REDIRECTS.set(key, dest);
  }
}

// Legacy shop
add('/contact', '/support/');
add('/cheats', '/products/apex-cheats/');
add('/cheats/lite', '/products/apex-cheats/');
add('/cheats/pro', '/products/apex-cheats/');
add('/cheats/elite', '/products/apex-cheats/apex-elite/');
add('/cheats/compare', '/blog/elite-guide/');

// Product short aliases → final product URLs
for (const [from, to] of Object.entries(PRODUCT_PATH_REDIRECTS)) {
  add(from.replace(/\/$/, ''), to);
}

// Account-recovery alias (final: ban-appeal)
add('/products/apex-cheats/account-recovery', '/products/apex-cheats/ban-appeal/');

// Legacy Dota / Fortnite product trees → Apex finals
add('/products/dota-2-cheats', '/products/apex-cheats/');
add('/products/dota-2-cheats/elite', '/products/apex-cheats/apex-elite/');
add('/products/dota-2-cheats/utilities', '/products/apex-cheats/cheat-tools/');
add('/products/fortnite-cheats', '/products/apex-cheats/');
add('/products/fortnite-cheats/elite', '/products/apex-cheats/apex-elite/');
add('/products/fortnite-cheats/utilities', '/products/apex-cheats/cheat-tools/');
add('/products/fortnite-cheats/hwid-spoofer', '/products/apex-cheats/hwid-spoofer/');
add('/products/fortnite-cheats/ugc', '/products/apex-cheats/ban-appeal/');
add('/products/fortnite-cheats/unlock-all', '/products/apex-cheats/unlock-all/');

// Blog slug shortenings → final pillars
for (const [from, to] of Object.entries(BLOG_SLUG_REDIRECTS)) {
  add(`/blog/${from}`, `/blog/${to}/`);
}

// Merged / retired Apex blog URLs
const MERGED_BLOG = {
  'apex-aimbot-ranked-guide': 'apex-aimbot',
  'apex-aimbot-combat-guide': 'apex-aimbot',
  'apex-legends-triggerbot-recoil-control': 'apex-aimbot',
  'apex-esp-wallhack-setup': 'esp-wallhack',
  'apex-radar-hack-guide': 'esp-wallhack',
  'apex-legends-loot-esp-guide': 'esp-wallhack',
  'eac-patch-day-checklist': 'ea-javelin',
  'eac-bypass-apex-guide': 'ea-javelin',
  'apex-hwid-spoofer-after-ban': 'hwid-guide',
  'how-to-buy-apex-cheats-2026': 'buy-cheats',
  'apex-legends-dma-cheats-explained': 'cheat-safety',
  'apex-stream-proof-setup': 'external-cheat',
  'apex-elite-tier-guide': 'elite-guide',
  'apex-cheat-codes-guide': '',
  'apex-console-cheats-tips': '',
  'how-to-use-apex-cheat-codes': '',
  'apex-console-commands-cheats': '',
  'fortnite-cheat-codes-guide': '',
  'fortnite-console-cheats-tips': '',
  'how-to-use-fortnite-cheat-codes': '',
  'fortnite-console-commands-cheats': '',
  'fortnite-aimbot-combat-guide': 'apex-aimbot',
  'fortnite-aimbot-ranked-guide': 'apex-aimbot',
  'fortnite-cheats-features-guide': 'cheat-features',
  'fortnite-esp-wallhack-setup': 'esp-wallhack',
  'fortnite-radar-hack-guide': 'esp-wallhack',
  'fortnite-external-cheat-guide': 'external-cheat',
  'fortnite-hwid-spoofer-after-ban': 'hwid-guide',
  'fortnite-lite-vs-pro': 'elite-guide',
  'fortnite-skin-changer-guide': 'skin-guide',
  'fortnite-stream-proof-setup': 'external-cheat',
  'fortnite-elite-tier-guide': 'elite-guide',
  'how-to-buy-fortnite-cheats-2026': 'buy-cheats',
  'eac-bypass-fortnite-guide': 'ea-javelin',
};
for (const [from, to] of Object.entries(MERGED_BLOG)) {
  add(`/blog/${from}`, to ? `/blog/${to}/` : '/blog/');
}

// Forum slug shortenings → final threads
for (const [from, to] of Object.entries(FORUM_SLUG_REDIRECTS)) {
  add(`/forum/${from}`, `/forum/${to}/`);
}

/** Resolve a pathname to a single final Location (or null). */
export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    // Only add slash when the slashed path is NOT itself a redirect source
    // that would create a second hop for the same logical URL.
    const withSlash = `${pathname}/`;
    const viaSlash = PATH_REDIRECTS.get(withSlash);
    if (viaSlash) return viaSlash;
    return withSlash;
  }

  return null;
}

/** Detect multi-hop / loop issues (used by audit + sync). */
export function auditRedirectGraph() {
  const issues = [];
  for (const [from, to] of PATH_REDIRECTS) {
    let cur = to;
    const seen = new Set([from]);
    let hops = 0;
    while (PATH_REDIRECTS.has(cur) || PATH_REDIRECTS.has(cur.replace(/\/$/, '') + '/')) {
      const next = PATH_REDIRECTS.get(cur) ?? PATH_REDIRECTS.get(cur.replace(/\/$/, '') + '/');
      if (!next) break;
      hops += 1;
      if (seen.has(next) || hops > 5) {
        issues.push({ type: 'loop', from, via: to, stuck: next });
        break;
      }
      seen.add(next);
      cur = next;
    }
    if (hops > 0 && !issues.some((i) => i.from === from && i.type === 'loop')) {
      issues.push({ type: 'chain', from, to, final: cur, hops: hops + 1 });
    }
  }
  return issues;
}
