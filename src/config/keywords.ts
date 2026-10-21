/**
 * One primary keyword cluster per URL (+ secondary support terms).
 * Intent: transactional | commercial | informational
 */
export type KeywordIntent = 'transactional' | 'commercial' | 'informational';

export interface PageKeywordPlan {
  primary: string;
  secondary: string[];
  intent: KeywordIntent;
  /** Visible H1 (clarity / message match). */
  h1: string;
}

export const PAGE_KEYWORDS: Record<string, PageKeywordPlan> = {
  '/': {
    primary: 'apex cheats',
    secondary: [
      'apex legends cheats',
      'apex legends cheat',
      'apex aimbot',
      'apex legends esp wallhack',
      'buy apex cheats',
      'apex dma cheats',
      'apex external cheat',
      'ea javelin apex cheats',
    ],
    intent: 'transactional',
    h1: 'Apex Cheats',
  },
  '/products/apex-cheats/': {
    primary: 'apex legends cheats',
    secondary: [
      'apex cheats',
      'apex legends cheat',
      'apex aimbot',
      'apex esp wallhack',
      'apex dma cheats',
      'apex legends external cheat',
    ],
    intent: 'transactional',
    h1: 'Buy Apex Legends Cheats for PC',
  },
  '/products/apex-cheats/apex-elite/': {
    primary: 'apex legends cheats',
    secondary: [
      'apex cheats',
      'apex legends cheat',
      'apex aimbot',
      'apex legends external cheat',
      'apex dma cheats',
    ],
    intent: 'transactional',
    h1: 'Buy Apex Legends Cheats',
  },
  '/products/apex-cheats/hwid-spoofer/': {
    primary: 'apex legends hwid spoofer',
    secondary: ['apex hwid ban', 'ea javelin hwid spoofer', 'apex hardware ban'],
    intent: 'transactional',
    h1: 'Buy Apex Legends HWID Spoofer',
  },
  '/products/apex-cheats/ban-appeal/': {
    primary: 'apex ban appeal tools',
    secondary: ['apex unban', 'ea javelin ban appeal', 'apex ugc'],
    intent: 'transactional',
    h1: 'Buy Apex Ban Appeal (UGC) Tools',
  },
  '/products/apex-cheats/unlock-all/': {
    primary: 'apex skin changer',
    secondary: ['apex unlock all', 'apex legends skin changer', 'apex heirloom unlock'],
    intent: 'transactional',
    h1: 'Buy Apex Skin Changer / Unlock All',
  },
  '/products/apex-cheats/cheat-tools/': {
    primary: 'apex cheat utilities',
    secondary: ['apex hwid spoofer', 'apex skin changer', 'apex ugc'],
    intent: 'commercial',
    h1: 'Apex Cheat Utilities Compared',
  },
  '/blog/': {
    primary: 'apex legends cheat guides',
    secondary: [
      'apex legends cheats',
      'apex anti cheat error',
      'apex esp wallhack guide',
      'ea javelin apex',
      'best apex legends cheats 2026',
    ],
    intent: 'informational',
    h1: 'Apex Legends Cheat Guides',
  },
  '/blog/best-cheats/': {
    primary: 'best apex legends cheats 2026',
    secondary: ['apex legends hacks', 'undetected apex cheats', 'apex aimbot', 'apex esp wallhack'],
    intent: 'commercial',
    h1: 'Best Apex Legends Cheats 2026',
  },
  '/blog/apex-aimbot/': {
    primary: 'apex legends aimbot',
    secondary: ['undetected apex aimbot', 'apex aimbot ranked', 'apex soft aim'],
    intent: 'informational',
    h1: 'Apex Legends Aimbot Guide',
  },
  '/blog/esp-wallhack/': {
    primary: 'apex esp wallhack',
    secondary: ['apex legends esp', 'apex wallhack', 'apex loot esp', 'player esp apex'],
    intent: 'informational',
    h1: 'Apex ESP Wallhack Guide',
  },
  '/blog/ea-javelin/': {
    primary: 'ea javelin apex',
    secondary: [
      'what anti cheat does apex use',
      'apex anti cheat error',
      'apex legends failed anti cheat backend check',
      'does apex legends have anti cheat',
    ],
    intent: 'informational',
    h1: 'EA Javelin Anticheat on Apex',
  },
  '/blog/hwid-guide/': {
    primary: 'apex legends hwid spoofer',
    secondary: ['apex hwid ban', 'ea javelin hwid spoofer', 'apex hardware ban'],
    intent: 'informational',
    h1: 'Apex HWID Spoofer Guide',
  },
  '/blog/buy-cheats/': {
    primary: 'buy apex cheats',
    secondary: ['how to buy apex legends cheats', 'undetected apex cheats checkout'],
    intent: 'transactional',
    h1: 'How to Buy Apex Legends Cheats',
  },
  '/blog/cheat-safety/': {
    primary: 'are apex legends cheats safe',
    secondary: ['apex legends cheating risk', 'apex dma cheats', 'undetected apex cheats'],
    intent: 'informational',
    h1: 'Are Apex Legends Cheats Safe?',
  },
  '/blog/cheat-features/': {
    primary: 'apex cheats features',
    secondary: ['apex aimbot', 'apex esp wallhack', 'apex loot esp', 'apex stream proof'],
    intent: 'informational',
    h1: 'Apex Cheats Features Guide',
  },
  '/blog/elite-guide/': {
    primary: 'apex elite cheats',
    secondary: ['apex lite vs pro', 'apex legends cheats tiers'],
    intent: 'commercial',
    h1: 'Apex Elite Cheats Guide',
  },
  '/blog/skin-guide/': {
    primary: 'apex skin changer',
    secondary: ['apex unlock all', 'apex legends skin changer'],
    intent: 'informational',
    h1: 'Apex Skin Changer Guide',
  },
  '/blog/external-cheat/': {
    primary: 'apex legends external cheat',
    secondary: ['apex dma cheats', 'apex external loader', 'apex stream proof'],
    intent: 'informational',
    h1: 'Apex Legends External Cheat Guide',
  },
  '/faq/': {
    primary: 'apex cheats faq',
    secondary: [
      'what anti cheat does apex use',
      'apex anti cheat error',
      'does apex legends have anti cheat',
      'can you cheat in apex legends',
      'apex legends failed anti cheat backend check',
    ],
    intent: 'informational',
    h1: 'Apex Legends Cheats FAQ',
  },
  '/forum/': {
    primary: 'apex cheats forum',
    secondary: ['apex aimbot help', 'apex esp setup', 'ea javelin status'],
    intent: 'informational',
    h1: 'Apex Cheats Forum',
  },
  '/support/': {
    primary: 'apex cheats support',
    secondary: [
      'apex loader help',
      'apex anti cheat error',
      'apex anti cheat authentication timeout',
      'apex checkout help',
    ],
    intent: 'informational',
    h1: 'Apex Cheats Support',
  },
  '/about/': {
    primary: 'about apex cheats',
    secondary: ['apex legends cheats shop', 'buy apex aimbot'],
    intent: 'informational',
    h1: 'About Apex Cheats',
  },
  '/privacy/': {
    primary: 'apex cheats privacy policy',
    secondary: [],
    intent: 'informational',
    h1: 'Privacy Policy',
  },
  '/terms/': {
    primary: 'apex cheats terms',
    secondary: [],
    intent: 'informational',
    h1: 'Terms of Service',
  },
};

export function getPageKeywords(pathname: string): PageKeywordPlan | undefined {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  const exact = PAGE_KEYWORDS[path];
  if (exact) return exact;
  // Fallbacks keep meta keywords filled without per-URL UI changes
  if (path.startsWith('/blog/') && path !== '/blog/') return PAGE_KEYWORDS['/blog/'];
  if (path.startsWith('/forum/') && path !== '/forum/') return PAGE_KEYWORDS['/forum/'];
  if (path.startsWith('/products/apex-cheats/') && path !== '/products/apex-cheats/') {
    return PAGE_KEYWORDS['/products/apex-cheats/'];
  }
  return undefined;
}
