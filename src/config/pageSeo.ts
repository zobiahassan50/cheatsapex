/**
 * Central titles/descriptions for high-traffic routes.
 * One primary keyword per path — see src/config/keywords.ts for H1 + secondary terms.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Apex Cheats | Apex Legends Aimbot & ESP',
    description:
      'Buy Apex Legends cheats for PC — aimbot, player ESP, loot ESP, no recoil and stream proof. Plans from $15 / week. Updated for EA Javelin every patch.',
  },
  '/products/apex-cheats/': {
    title: 'Buy Apex Legends Cheats | Aimbot, ESP & DMA',
    description:
      'Shop Apex Legends cheats for PC: player ESP, advanced aimbot, loot ESP, EAC bypass, Cloud-DMA and AWS options. 1 Week $15 · 1 Month $35 · Lifetime $150.',
  },
  '/products/apex-cheats/apex-elite/': {
    title: 'Buy Apex Legends Cheats | Elite ESP & Aimbot',
    description:
      'Buy Apex Legends cheats with player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass and 24/7 support.',
  },
  '/products/apex-cheats/hwid-spoofer/': {
    title: 'Buy Apex Legends HWID Spoofer | Hardware Ban Fix',
    description:
      'Buy an Apex Legends HWID spoofer for EA Javelin hardware bans — disk/MAC tools, compatibility scan and post-spoof checks.',
  },
  '/products/apex-cheats/ban-appeal/': {
    title: 'Buy Apex Ban Appeal Tools | UGC for EA Javelin',
    description:
      'Buy Apex UGC ban appeal tools to organize EA and Javelin restriction cases, dispute workflows and status tracking.',
  },
  '/products/apex-cheats/unlock-all/': {
    title: 'Buy Apex Skin Changer | Unlock All Cosmetics',
    description:
      'Buy Apex Skin Changer / Unlock All — local legend, weapon skin and heirloom previews with your Apex cheats loadout.',
  },
  '/products/apex-cheats/cheat-tools/': {
    title: 'Apex Cheat Utilities Compared | HWID, UGC & Skins',
    description:
      'Compare Apex cheat utilities: HWID spoofer after hardware bans, UGC ban appeals, and local Skin Changer / Unlock All.',
  },
  '/blog/': {
    title: 'Apex Legends Cheat Guides | Aimbot, ESP & Javelin',
    description:
      'Read Apex Legends cheat guides: aimbot, ESP wallhack, loot ESP, apex anti cheat error help, EA Javelin status and Ranked setups.',
  },
  '/blog/best-cheats/': {
    title: 'Best Apex Legends Cheats 2026 | Aimbot & ESP',
    description:
      'Compare the best Apex Legends cheats for PC in 2026 — aimbot, ESP wallhack, loot ESP and status updates for EA Javelin.',
  },
  '/blog/apex-aimbot/': {
    title: 'Apex Legends Aimbot Guide | Ranked PC 2026',
    description:
      'Set up an Apex Legends aimbot for Ranked — smoothness, FOV, bone priority and per-weapon profiles after EA Javelin.',
  },
  '/blog/esp-wallhack/': {
    title: 'Apex ESP Wallhack Guide 2026 | Player & Loot ESP',
    description:
      'Apex Legends ESP wallhack setup — player boxes, skeleton, health, distance and loot ESP for Ranked and Battle Royale.',
  },
  '/blog/ea-javelin/': {
    title: 'EA Javelin Anticheat & Apex Anti Cheat Errors 2026',
    description:
      'What anti cheat Apex uses, apex anti cheat error fixes, failed backend check, and how EA Javelin affects apex legends cheats on PC.',
  },
  '/blog/hwid-guide/': {
    title: 'Apex HWID Spoofer Guide | EA Javelin Hardware Bans',
    description:
      'When to use an Apex Legends HWID spoofer after EA Javelin hardware bans — workflow, checks and safer next steps.',
  },
  '/blog/buy-cheats/': {
    title: 'How to Buy Apex Legends Cheats 2026',
    description:
      'How to buy Apex Legends cheats safely — pick a plan (week, month, lifetime), verify Javelin status, and complete secure checkout.',
  },
  '/blog/cheat-safety/': {
    title: 'Are Apex Legends Cheats Safe in 2026?',
    description:
      'Are Apex Legends cheats safe in 2026? How EA Javelin detection, ban waves and apex legends cheating risk actually work.',
  },
  '/blog/cheat-features/': {
    title: 'Apex Cheats Features Guide | Aimbot, ESP & More',
    description:
      'Apex cheats features explained — advanced aimbot, player ESP, loot ESP, no recoil, stream proof, EAC bypass and Cloud-DMA.',
  },
  '/blog/elite-guide/': {
    title: 'Apex Elite Cheats Guide | Full ESP & Aimbot Suite',
    description:
      'Apex Elite cheats guide — player ESP, advanced aimbot, loot ESP, stream proof, EAC bypass and 24/7 Discord support.',
  },
  '/blog/skin-guide/': {
    title: 'Apex Skin Changer Guide | Unlock All Preview',
    description:
      'Apex Skin Changer / Unlock All guide — local legend and weapon skin previews without changing your EA inventory.',
  },
  '/blog/external-cheat/': {
    title: 'Apex Legends External Cheat Guide | Loader & DMA',
    description:
      'How apex legends external cheat and apex DMA cheats work — loader setup, stream-proof overlays and EA Javelin-aware updates.',
  },
  '/forum/': {
    title: 'Apex Cheats Forum | Aimbot, ESP & Setup Help',
    description:
      'Apex cheats forum for aimbot configs, ESP wallhack setup, EA Javelin status and product questions before you buy.',
  },
  '/faq/': {
    title: 'Apex Legends Cheats FAQ | Anti Cheat & Errors',
    description:
      'Apex Legends cheats FAQ — what anti cheat Apex uses, anti cheat errors, authentication timeout, aimbot, ESP and loader setup.',
  },
  '/terms/': {
    title: 'Terms of Service | Apex Cheats',
    description:
      'Terms for buying Apex Legends cheats on cheatsapex.com — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Apex Cheats',
    description:
      'How the Apex Legends cheats shop at cheatsapex.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Apex Cheats | PC Aimbot & ESP Shop',
    description:
      'About Apex Cheats — we sell PC Apex Legends cheats (aimbot, ESP wallhack), guides and utilities at cheatsapex.com.',
  },
  '/support/': {
    title: 'Apex Cheats Support | Loader, HWID & Checkout',
    description:
      'Apex cheats support for loader setup, aimbot/ESP configs, anti cheat errors and checkout help — 24/7 Discord.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
