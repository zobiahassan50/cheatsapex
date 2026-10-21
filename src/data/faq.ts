import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Apex Elite', productPath('apex-elite'));
const productsHub = link('Apex products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC', productPath('ban-appeal'));
const skin = link('Skin Changer', productPath('unlock-all'));
const blog = link('blog guides', ROUTES.blog);

/** Ordered IDs shared by homepage FAQ section and /faq/ — Apex Cheats catalog only. */
export const SHARED_FAQ_IDS = [
  'status',
  'javelin',
  'what-anti-cheat',
  'has-anti-cheat',
  'kernel-anti-cheat',
  'anti-cheat-error',
  'auth-timeout',
  'can-you-cheat',
  'how-people-cheat',
  'apex-learning',
  'after-buy',
  'platforms',
  'license-move',
  'products-page',
  'best-cheats',
  'what-is-esp',
  'esp-vs-aimbot',
  'who-elite',
  'stream-proof',
  'undetected',
  'eac-update',
  'hwid-when',
  'ugc-what',
  'skin-changer',
  'external-loader',
  'discord-help',
  'private-cheats',
  'pubs-ranked',
] as const;

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Apex cheats are online?',
    a: a(
      'The live status banner is on cheatsapex.com and in the Discord #status channel. Always check after an Apex, EA Javelin, or season update.',
    ),
  },
  {
    id: 'javelin',
    topic: 'safety',
    icon: 'faqStatus',
    q: 'Do Apex Legends cheats work with EA Javelin Anticheat?',
    a: a(
      'Apex Legends PC uses EA Javelin. Private Apex Cheats builds on cheatsapex.com are retested after Javelin and game patches—always confirm the status banner before Ranked. Read the Javelin guide on the blog.',
    ),
  },
  {
    id: 'what-anti-cheat',
    topic: 'safety',
    icon: 'faqStatus',
    q: 'What anti cheat does Apex use?',
    a: a(
      'Apex Legends on PC uses EA Javelin Anticheat (formerly Easy Anti-Cheat). Searches for “apex anti cheat,” “apex legends anti cheat,” or “does apex use easy anti cheat” all point to that stack. Confirm live status after any anticheat or season patch.',
    ),
  },
  {
    id: 'has-anti-cheat',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Does Apex Legends have anti cheat?',
    a: a(
      'Yes. Apex Legends has anti cheat on PC (EA Javelin). Console platforms use different enforcement. Private apex cheats are retested against the current PC anticheat—never launch when the status banner shows updating.',
    ),
  },
  {
    id: 'kernel-anti-cheat',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'Does Apex Legends have kernel level anti cheat?',
    a: a(
      'EA Javelin includes kernel-level components on PC. That is why loader delivery, EAC bypass status, and patch-day checks matter for any apex legends cheat. Check Discord #status after game or anticheat updates.',
    ),
  },
  {
    id: 'anti-cheat-error',
    topic: 'setup',
    icon: 'faqEacUpdate',
    q: 'What is an Apex anti cheat error or Easy Anti-Cheat error?',
    a: a(
      'An apex anti cheat error, apex legends easy anti cheat error, or “error validating easy anti cheat apex” usually means the game or anticheat service failed to start—corrupt install, blocked files, or a patch mismatch. Repair Apex via EA App, reboot, and avoid launching third-party tools until the anticheat service is healthy. “Failed anti cheat backend check” is a related server-side validation failure—retry after EA services recover.',
    ),
  },
  {
    id: 'auth-timeout',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What is Apex anti cheat authentication timeout?',
    a: a(
      'Apex anti cheat authentication timeout, apex code anti cheat authentication timeout, or “unable to connect to EA servers anti cheat” means the client could not finish anticheat handshake with EA. Check EA server status, disable VPN briefly, repair Easy Anti-Cheat / Javelin components via the EA App, then relaunch Apex alone before any cheat loader.',
    ),
  },
  {
    id: 'can-you-cheat',
    topic: 'plans',
    icon: 'faqBlogSlugEsp',
    q: 'Can you cheat in Apex Legends?',
    a: `On PC, third-party apex legends cheats exist (ESP, aimbot, external loaders) but violate EA Terms of Service and can lead to bans. ${elite} is sold for PC only—not for console. Using cheats is at your own risk.`,
  },
  {
    id: 'how-people-cheat',
    topic: 'plans',
    icon: 'faqEspVsScripts',
    q: 'How do people cheat in Apex Legends?',
    a: a(
      'On PC, players typically use external apex legends cheats or DMA-style setups for ESP wallhack, aimbot, and loot ESP. Ranked Season cheating searches (for example ranked S26) spike after patches—always verify current status. Console “how to cheat” searches usually have no safe path; we only support Windows PC.',
    ),
  },
  {
    id: 'apex-learning',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'Does Apex Learning detect cheating?',
    a: a(
      'Apex Learning is an education platform—not Apex Legends. Questions like “does apex learning detect cheating” or “can you cheat on apex learning” are unrelated to this shop. For Apex Legends anticheat, see EA Javelin and the status banner on cheatsapex.com.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Apex.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Apex via EA App on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${elite}, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'best-cheats',
    topic: 'plans',
    icon: 'faqBlogSlugEsp',
    q: 'What are the best Apex Legends cheats in 2026?',
    a: `For player ESP, advanced aimbot, loot ESP, no recoil, stream proof and EAC bypass choose ${elite} (1 Week $15 · 1 Month $35 · Lifetime $150). Add ${hwid} for hardware bans or ${ugc} for account appeals. Compare modules on ${productsHub} and read the ${blog}.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Apex ESP wallhack / ESP?',
    a: `${elite} ships player ESP, box, skeleton, glow, health/shield bars, distance tags, loot ESP and weapon ESP—enemy and loot visibility through walls on PC.`,
    scopes: ['apex-elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP wallhack and aimbot?',
    a: `ESP wallhack is an information overlay (positions, loot, distance). Aimbot assists aiming—smoothness, FOV and bone priority. ${elite} includes both, plus no recoil and stream-proof mode.`,
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Players who want the full Apex Legends cheat suite—player ESP, advanced aimbot, weapon/loot ESP, no recoil, stream proof, EAC bypass, and optional Cloud-DMA / AWS delivery with 24/7 Discord support.`,
    scopes: ['apex-elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${elite} hides overlays from OBS and Discord screen share. Test a local recording before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Apex cheats guaranteed?',
    a: a(
      'No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.',
    ),
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after an Apex or EA Javelin update?',
    a: a(
      'Check cheatsapex.com status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.',
    ),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh EA accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only bans; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for EA account restrictions and EAC bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ban-appeal'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my EA inventory?',
    a: `${skin} previews cosmetics locally on your client. Other players see your real inventory. Included with ${elite}; also available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the EA folder?',
    a: `Apex Cheats runs external with cloud config sync—no files injected into the Apex directory. Anti-cheat risk still applies. See ${productsHub}.`,
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version and Apex client build. Staff walk through loader setup live.',
    ),
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Apex cheats?',
    a: a(
      'Private means per-user keys and maintained builds—not public zip packs. Apex Cheats ships portal delivery for Elite ESP, aimbot and related modules.',
    ),
  },
  {
    id: 'pubs-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do Apex Cheats work in Pubs and Ranked?',
    a: `Yes—${elite} includes Pubs and Ranked presets in the portal. Tune distance caps and aimbot smoothness before your first queue.`,
  },
];

function faqsByIds(ids: readonly string[]): SiteFaqItem[] {
  const byId = new Map(siteFaqs.map((f) => [f.id, f]));
  return ids.map((id) => byId.get(id)).filter((f): f is SiteFaqItem => Boolean(f));
}

/** Homepage FAQ section and /faq/ — identical Apex Cheats list. */
export function getLandingFaqs(): SiteFaqItem[] {
  return faqsByIds(SHARED_FAQ_IDS);
}

/** Alias of getLandingFaqs — keep home and FAQ landing in sync. */
export function getAllFaqs(): SiteFaqItem[] {
  return getLandingFaqs();
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Apex Cheats FAQ',
  subtitle:
    'ESP wallhack, aimbot, Elite slots, HWID Spoofer, UGC, Skin Changer and EA Javelin status—same answers as the homepage.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'safety',
  'products',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'Apex cheats questions',
  subtitle: 'Straight answers on aimbot, ESP, utilities and setup for Apex Legends on PC.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const shared = getLandingFaqs();
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const extras = shared.filter((f) =>
    ['undetected', 'eac-update', 'javelin', 'status', 'after-buy', 'platforms'].includes(f.id),
  );

  const combined =
    kind === 'tier' ? [...scoped, ...extras, ...shared.slice(0, 10)] : [...scoped, ...extras, ...shared.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Can I practice aimbot settings before Ranked?',
      a: a(
        'Yes. Use the Firing Range or Arenas with conservative presets, then queue Ranked with Apex Elite from cheatsapex.com.',
      ),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `Combat, ESP and loot guides map to ${elite}. Hardware bans → ${hwid}. Account appeals → ${ugc}. Cosmetic preview → ${skin}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a(
        'Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.',
      ),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a lobby first?',
      a: a(
        'Yes. Load conservative presets in a lobby before Ranked. Tune aimbot smoothness and ESP distance caps over several sessions.',
      ),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this article guarantee undetected status?',
      a: a(
        'No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.',
      ),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${elite}, ${hwid}, ${ugc} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a(
      'Re-check status after every Apex update. Portal presets update with patch notes—reload configs instead of copying old sliders.',
    ),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (
    slug.includes('map-hack') ||
    slug.includes('esp') ||
    slug.includes('wallhack') ||
    slug.includes('radar') ||
    slug.includes('loot')
  ) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP wallhack from this article?',
      a: `${elite} includes player ESP, loot ESP, weapon ESP and related overlays for Apex Legends on PC.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('auto-combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes the aimbot in this article?',
      a: `${elite} ships Aimbot, no recoil and related combat modules for Apex Legends.`,
    });
  }
  if (
    slug.includes('hwid') ||
    slug.includes('ban') ||
    slug.includes('eac') ||
    slug.includes('javelin') ||
    slug.includes('safe')
  ) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('triggerbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'blog-slug-aimbot',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes undetected Apex aimbot from this guide?',
      a: `${elite} includes humanized aimbot modules with portal presets for Pubs and Ranked.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & player boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Chest & loot locator', icon: 'compareLootLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot spawn timers', icon: 'compareLootTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Radar', icon: 'compareRadar' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'MiniESP wallhack overlay', icon: 'compareRadarHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot', icon: 'compareAimbot' as const, lite: false, pro: true, elite: true },
  { feature: 'Smooth Aim & Sticky Aim', icon: 'compareSmoothAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Bone Priority', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Hotkey macros (heals/shields)', icon: 'compareHotkeyMacros' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV radius drawing', icon: 'compareFovRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoke alert integration', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Loot Assist', icon: 'compareLootAssist' as const, lite: false, pro: false, elite: true },
  { feature: 'Auto Finish', icon: 'compareAutoFinish' as const, lite: false, pro: false, elite: true },
  { feature: 'Auto Shield Break', icon: 'compareAutoShieldBreak' as const, lite: false, pro: false, elite: true },
  { feature: 'Full ESP wallhack suite', icon: 'compareFullEsp' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
