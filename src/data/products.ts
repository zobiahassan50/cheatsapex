import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: [
    'esp-wallhack',
    'best-cheats',
    'cheat-features',
  ],
  pro: [
    'apex-aimbot',
    'best-cheats',
    'elite-guide',
  ],
  'apex-elite': [
    'best-cheats',
    'elite-guide',
    'cheat-features',
    'buy-cheats',
  ],
  'hwid-spoofer': [
    'hwid-guide',
    'ea-javelin',
    'cheat-safety',
  ],
  'ban-appeal': [
    'cheat-safety',
    'ea-javelin',
    'buy-cheats',
  ],
  'unlock-all': [
    'skin-guide',
    'best-cheats',
    'external-cheat',
  ],
};

const productBase = '/products/apex-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on cheatsapex.com and Discord #status before purchase—especially after an Apex or EA Javelin update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite apex cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, EA platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Ranked.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Apex and EA Javelin receive frequent updates. Confirm module availability on the live status panel at cheatsapex.com before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Apex can violate EA Terms of Service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const apexSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqEa', text: 'Current Apex client via EA with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Apex published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

/** Original product images — keep in sync with public/images/gameplay. */
const galleryRaw = {
  gpEspWallhack: {
    src: `${gameplay}/apex-esp-wallhack.png`,
    alt: 'Apex Legends skeleton ESP wallhack showing players through walls with boxes and distances',
    caption: 'ESP wallhack',
    captionDesc: 'Skeleton ESP and boxes through walls in Apex.',
  },
  gpAimbotCombat: {
    src: `${gameplay}/apex-aimbot-combat.png`,
    alt: 'Apex Legends aimbot combat view with scoped ESP box lock on an enemy player',
    caption: 'Aimbot',
    captionDesc: 'Scoped aimbot lock with ESP box on an enemy.',
  },
  gpLootEsp: {
    src: `${gameplay}/apex-loot-radar.png`,
    alt: 'Apex Legends loot and item ESP with Hands markers, enemy boxes, and range labels',
    caption: 'Loot ESP',
    captionDesc: 'Loot markers, enemy boxes and range labels.',
  },
  gpPlayerEsp: {
    src: `${gameplay}/apex-player-esp.png`,
    alt: 'Apex Legends player ESP with green boxes, health bars, and distance tags while ADS',
    caption: 'Player ESP',
    captionDesc: 'Player boxes, health bars and distance while ADS.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'apex-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Apex Lite is built for players who want map awareness first. In ranked, knowing enemy positions, chest locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Apex Pro is the sweet spot for ranked grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aimbot, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with aimbot that stay human at default settings.',
    },
  ],
  'apex-elite': [
    {
      type: 'p',
      text: 'Apex Legends cheats for PC with player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream-proof mode, EAC bypass, and optional Cloud-DMA / AWS delivery. Matches the live Levo Apex catalog.',
    },
    { type: 'h2', text: 'Use Apex responsibly' },
    {
      type: 'p',
      text: 'Start with portal conservative presets, test in a lobby, and scale settings over days—not minutes. Staff in Discord help tune profiles before your first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and respawn-beacon locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Battle Royale and Ranked ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Aimbot, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so aimbot stay natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at cheatsapex.com—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first ranked session.',
    },
  ],
  'apex-elite': [
    { type: 'h2', text: 'Full ESP, aimbot and loot suite' },
    {
      type: 'p',
      text: 'Apex Legends cheats include player ESP, box ESP, skeleton ESP, health bar, distance ESP, loot and weapon ESP, advanced aimbot, and no recoil. Plans: 1 Week $15, 1 Month $35, Lifetime $150. Cloud-DMA and AWS options are available when listed.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Listed status is Active when the build is cleared for the current Apex / EA Javelin (EAC) patch. Re-check the status banner before you buy or launch after an update—especially if you see an Apex anti cheat error or failed anti cheat backend check.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh EA accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/apex-cheats/ban-appeal/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ban-appeal': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for EA account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for EA review. Pair with [HWID Spoofer](/products/apex-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpPlayerEsp', 'gpEspWallhack', 'gpLootEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: apexSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Chest & loot locator',
      'POI awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'Ranked preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Apex Lite ESP wallhack and radar',
      paragraphs: [
        'Lite is for player ESP, chest markers, loot timers and radar. No aimbot. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want Apex Legends ESP wallhack awareness in Battle Royale and Ranked without combat automation. Overlays update after Apex and EA Javelin patches.',
      ],
    },
  },
  pro: {
    images: slide('gpAimbotCombat', 'gpPlayerEsp', 'gpEspWallhack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: apexSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon aimbot profiles',
      'Third-party alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Apex Pro undetected aimbot plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus undetected Apex aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most buyers pick Pro for Battle Royale and Ranked. Bone priority and macros help in fights while defaults stay smooth under EA Javelin.',
      ],
    },
  },
  'apex-elite': {
    images: slide('gpAimbotCombat', 'gpPlayerEsp', 'gpLootEsp', 'gpEspWallhack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: apexSystemRequirements,
    fullFeatures: [
      'Player ESP',
      'Advanced Aimbot',
      'Weapon ESP',
      'Health Bar',
      'Distance ESP',
      'Box ESP',
      'Skeleton ESP',
      'Loot ESP',
      'No Recoil',
      'EAC Bypass',
      'Stream Proof',
      '24/7 Support',
      'CLOUD-DMA OPTION',
      'AWS option',
    ],
    overview: {
      title: 'Apex Legends cheats — player ESP, aimbot & loot',
      paragraphs: [
        'Buy Apex Legends cheats for PC with player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream-proof mode, and EAC bypass. Optional Cloud-DMA and AWS delivery match the live Levo Apex listing.',
        'Plans: 1 Week $15, 1 Month $35, Lifetime $150. Confirm Active status on cheatsapex.com before you buy or launch after a patch.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpEspWallhack', 'gpPlayerEsp', 'gpAimbotCombat'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Apex.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Apex after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Apex Legends HWID spoofer for PC bans',
      paragraphs: [
        'Use the Apex Legends HWID spoofer when EA Javelin flags your PC hardware but the EA account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only bans. After spoofing, use a safer cheat profile before Ranked.',
      ],
    },
  },
  'ban-appeal': {
    images: slide('gpLootEsp', 'gpPlayerEsp', 'gpEspWallhack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on cheatsapex.com.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for EA restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpPlayerEsp', 'gpAimbotCombat', 'gpLootEsp'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify EA inventory or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: apexSystemRequirements,
    fullFeatures: [
      'Legend skin swap',
      'Legend & weapon skin preview',
      'Heirloom customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview legend skins, weapon skins and heirlooms on your Apex client. It does not change your EA inventory or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Apex Lite' : cheat.name === 'Pro' ? 'Apex Pro' : 'Apex Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide(
  'gpEspWallhack',
  'gpAimbotCombat',
  'gpPlayerEsp',
  'gpLootEsp',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Apex Legends cheats with player ESP, advanced aimbot, loot ESP, EAC bypass, Cloud-DMA and AWS options — plans from $15 / week.',
  buyUrl: checkoutPath('apex'),
};
