/** Shared old→new slug maps for redirects (astro.config + public/_redirects). */
export const BLOG_SLUG_REDIRECTS = {
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

export const FORUM_SLUG_REDIRECTS = {
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
  // prior legacy aliases
  'how-to-practice-auto-combos': 'aimbot-practice',
  'apex-2-lite-or-pro-hero-scripts': 'aimbot-tier',
};

export function blogRedirectEntries() {
  return Object.fromEntries(
    Object.entries(BLOG_SLUG_REDIRECTS).map(([from, to]) => [`/blog/${from}/`, `/blog/${to}/`]),
  );
}

export function forumRedirectEntries() {
  return Object.fromEntries(
    Object.entries(FORUM_SLUG_REDIRECTS).map(([from, to]) => [`/forum/${from}/`, `/forum/${to}/`]),
  );
}

export const PRODUCT_PATH_REDIRECTS = {
  '/products/apex-cheats/elite/': '/products/apex-cheats/apex-elite/',
  '/products/apex-cheats/ugc/': '/products/apex-cheats/ban-appeal/',
  '/products/apex-cheats/utilities/': '/products/apex-cheats/cheat-tools/',
};
