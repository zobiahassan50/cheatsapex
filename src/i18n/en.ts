import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Buy Apex Cheats | Apex Legends Aimbot & ESP',
    description:
      'Buy Apex Legends cheats for PC: aimbot, player ESP, loot ESP, no recoil and stream proof. Plans from $15 / week. Updated after EA Javelin patches.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Apex cheats',
    titleLine1: 'Apex Cheats',
    titleLine2: 'Aimbot, ESP & Wallhack',
    subtitle:
      'Buy Apex cheats for PC — aimbot, ESP, wallhack, radar and loot ESP for Battle Royale and Ranked. Updated after every EAC patch.',
    ctaPrimary: 'Buy cheats',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Modes',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Cheat features',
    title: 'Apex cheat modules',
    subtitle:
      'Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass, and Cloud-DMA / AWS options — the live Apex Legends cheat suite for PC.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Combat tracking',
        desc: 'Advanced aimbot for Battle Royale and Ranked with no recoil support so tracking stays consistent in fights.',
        bullets: [
          'Advanced Aimbot',
          'No Recoil',
          'Presets for Pubs and Ranked',
        ],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See enemies through walls',
        desc: 'Player ESP with box, skeleton, health bar and distance so you spot squads before they push.',
        bullets: [
          'Player ESP',
          'Box ESP & Skeleton ESP',
          'Health Bar & Distance ESP',
        ],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon & Loot ESP',
        subtitle: 'Guns and ground loot',
        desc: 'Weapon ESP and loot ESP highlight usable guns and floor loot so you gear up faster.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Faster rotations'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Hide overlays on stream',
        desc: 'You see ESP and aimbot on your screen. OBS and Game Bar capture a clean game feed.',
        bullets: ['Stream Proof', 'OBS-safe capture', 'Toggle when live'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Patch-aware delivery',
        desc: 'EAC bypass builds are retested after Apex and EA Javelin updates. Check status before you launch.',
        bullets: ['EAC Bypass', 'Status after patches', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA & AWS',
        subtitle: 'Delivery options',
        desc: 'CLOUD-DMA OPTION and AWS option for players who need alternate delivery paths listed on the Apex catalog.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Discord help',
        desc: 'Direct Discord support for loader setup, configs and post-patch questions.',
        bullets: ['24/7 Support', 'Setup walkthroughs', 'Config help'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why our cheats',
    title: 'Apex cheats that stay online',
    subtitle:
      'Most cheat shops go down after EAC patches and leave you with bots. We ship loader updates fast, keep aimbot defaults safe for Ranked, and answer on Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'New builds usually go out within hours of an Apex or EA Javelin update. Check Discord #status before you queue.',
      },
      {
        title: 'Smooth aimbot defaults',
        desc: 'Default smoothness, FOV and bone priority are set for Ranked. You can tighten them later if you want.',
      },
      {
        title: 'Discord support',
        desc: 'People on Discord help with loader setup, weapon configs and HWID resets. Coverage is 24/7.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'External loader with OBS-safe mode so overlays stay off your stream.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save Battle Royale, Ranked and per-weapon settings and load them on another PC.',
      },
      {
        title: 'HWID resets',
        desc: 'Hardware resets and license moves go through Discord. Most shops lock you to one PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Usual time to ship a loader after a big Apex or EA Javelin update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Discord help for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Users',
        desc: 'PC players using aimbot, ESP and tools on cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Buy cheats. Play in',
    titleHighlight: 'three steps',
    intro:
      'Buy your Apex cheat, download the loader, load a preset, then open Apex. Discord help is there if you get stuck.',
    ctaPrimary: 'Buy cheats',
    ctaSecondary: 'See FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Buy and download the loader',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load presets',
        desc: 'Run the loader, pick a Pubs or Ranked preset, and set aimbot and ESP.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch Apex on EA App, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after Apex updates before you launch.',
    items: ['Windows 10 & 11', 'EA Launcher', 'Apex client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Apex Elite cheats',
    subtitle:
      'Apex Legends cheats for PC — player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA and AWS. Plans: 1 Week $15 · 1 Month $35 · Lifetime $150.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Buy Apex Legends cheats with player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass and 24/7 Discord support. 1 Week $15 · 1 Month $35 · Lifetime $150.',
        features: [
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
        more: 14,
        href: `${productBase}apex-elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Buy Apex cheats',
    subtitle: 'Elite Apex cheats, HWID spoofer, UGC recovery and Skin Changer — pick what you need.',
    viewAll: 'View all cheats',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Apex HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Buy an Apex HWID spoofer for disk serials, MAC addresses and GPU IDs—run the portal guide before launching cheats again.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Disk serial tools',
          'MAC address rotation',
          'GPU ID spoof',
          'Compatibility scan',
          'Driver conflict check',
          'Post-spoof verification',
          'Cold reboot guide',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Apex UGC Unban Tools',
        subtitle: 'Unban & governance control',
        desc: 'Buy Apex UGC tools for EA account restrictions, EAC bans and security holds—custom appeal workflows and dispute automation.',
        features: [
          'EA account appeals',
          'EAC ban workflows',
          'Dispute automation',
          'Case documentation',
          'Evidence templates',
          'Status tracking dashboard',
          'Restriction holds help',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Apex Skin Changer',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Buy Apex Skin Changer / Unlock All for legend skins, weapon skins and heirlooms—local preview without EA store purchases.',
        features: [
          'Legend skin swap',
          'Weapon skin changer',
          'Heirloom customizer',
          'Unlock All preview',
          'Exclusive set preview',
          'Loadout favorites export',
          'Local client only',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Cheat guides',
    title: 'Apex Legends cheat guides',
    subtitle: 'Aimbot setup, ESP wallhack config, Arenas practice tips and EAC patch-day checks.',
    latestTitle: 'Apex Legends Cheat Guides',
    latestSubtitle: 'Guides for undetected aimbot, ESP wallhack, loot ESP, EA Javelin status and HWID recovery—filter by topic below.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    allArticles: 'All articles',
    inThisArticle: 'In this article',
    relatedGuides: 'Related guides',
    ourProducts: 'Our products',
    buyApexCheats: 'Buy Apex Cheats',
    items: [
      {
        tag: 'Guides',
        title: "Best Apex Legends Cheats & Hacks 2026: Aimbot, ESP & Wallhack",
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: "Compare the best Apex Legends cheats in 2026—undetected aimbot, ESP wallhack, loot ESP and HWID tools built for EA Javelin on PC.",
        date: 'Oct 19, 2026',
        readTime: '14 min read',
      },
      {
        tag: 'Setup',
        title: "Undetected Apex Legends Aimbot Guide for Ranked PC (2026)",
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: "Set up an undetected Apex Legends aimbot for Ranked—smoothness, FOV, bone priority and per-weapon profiles after EA Javelin.",
        date: 'Sep 8, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Setup',
        title: "Apex Legends ESP Wallhack Guide 2026: Player, Glow & Distance",
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: "Apex Legends ESP wallhack guide for 2026—player boxes, glow, health, distance and loot ESP tuned for Ranked and Battle Royale.",
        date: 'Aug 14, 2026',
        readTime: '13 min read',
      },
      {
        tag: 'Updates',
        title: "EA Javelin Anticheat on Apex Legends: Cheat Status & Updates",
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: "EA Javelin Anticheat replaced EAC on Apex Legends PC. How Apex cheats status, patch days and HWID bans work in 2026.",
        date: 'Jul 22, 2026',
        readTime: '11 min read',
      },
      {
        tag: 'Products',
        title: "Apex Legends HWID Spoofer for EA Javelin Bans (2026)",
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: "Apex Legends HWID spoofer guide for EA Javelin hardware bans—when to spoof, when to new-account, and how to check status.",
        date: 'Jun 30, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Setup',
        title: "How to Buy Undetected Apex Cheats in 2026 (Safe Checkout)",
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: "How to buy undetected Apex Legends cheats in 2026—pick a tier, verify EA Javelin status, and complete secure checkout.",
        date: 'Jun 5, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: "Are Apex Legends Cheats Safe in 2026? Detection, Bans & Risk",
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: "Are Apex Legends cheats safe in 2026? How EA Javelin detection, ban waves and “undetected” claims actually work.",
        date: 'May 12, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: "Apex cheats features: aimbot, bots, ESP wallhack and more",
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: "Complete guide to our apex cheats—Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP Wallhack and Auto Shield Break.",
        date: 'Apr 18, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: "Apex Lite vs Pro: which tier fits you",
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: "Map awareness vs aimbot automation—compare Lite and Pro apex cheats for Battle Royale and Ranked.",
        date: 'Mar 27, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: "Apex Skin Changer Cheat / Unlock All Guide",
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: "Preview legend skins, weapon skins and exclusive sets locally with our Unlock All Skin Changer module.",
        date: 'Mar 3, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: "Apex external cheat guide",
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: "Why external apex cheats matter, how the external loader works on PC and what makes private software safer than free tools.",
        date: 'Feb 11, 2026',
        readTime: '16 min read',
      }
    ],
  },
  toolkit: {
    eyebrow: 'Cheat menu',
    title: 'Apex cheat menu, organized',
    subtitle: 'Every cheat module is grouped so you can tune aimbot and ESP mid-match without digging through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tracking that adapts per weapon', desc: 'Smoothness, FOV, Sticky Aim and Bone Priority in one aimbot tab.' },
      { num: '02', label: 'ESP', title: 'Wallhack that stays readable', desc: 'Boxes, skeletons, distance, health and team color filters.' },
      { num: '03', label: 'Radar', title: 'Loot and rotates on lock', desc: 'Enemy dots, loot timers and mini-radar on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon aimbot profiles', desc: 'Save AR, SMG, shotgun and sniper presets and swap with hotkeys.' },
      { num: '05', label: 'Loot', title: 'Chest ESP & loot assist', desc: 'Chest highlights, rare drops and Elite loot-assist pathing.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Battle Royale, Ranked and Arenas presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From buy to',
    titleHighlight: 'in-game cheats.',
    subtitle: 'Buy Apex cheats, download the loader, turn on modules, save your config for next match.',
    ctaLabel: 'Buy cheats',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on cheatsapex.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Lite, Pro or Elite based on which modules you need.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and set up',
        desc: 'Download from the portal, turn on modules, and test in Arenas or a bot lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When the settings feel right, save Battle Royale and Ranked presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check Discord and the portal status before you queue Ranked after an Apex update.' },
      { num: '02', title: 'Start slow', desc: 'Use the default aimbot smoothness and ESP range first, then raise them if you need to.' },
      { num: '03', title: 'Discord help', desc: 'Stuck on the loader or configs? Ask in Discord and someone will walk you through it.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Apex Cheats support',
    subtitle: 'Loader, HWID, checkout and account help.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each product includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader errors, HWID and account issues.',
        linkLabel: 'support@cheatsapex.com',
        href: 'mailto:support@cheatsapex.com',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, bans and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support online 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on cheatsapex.com.' },
      { title: 'Platform', desc: 'Windows 10 or 11, EA Launcher, and your Apex version.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or EA.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Apex Cheats FAQ',
    subtitle:
      'Elite ESP & aimbot, HWID Spoofer, UGC, Skin Changer and EA Javelin status — same answers on the homepage and this page.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Apex cheats are online?',
        a: 'The live status banner is on cheatsapex.com and in the Discord #status channel. Always check after an Apex, EA Javelin, or season update.',
      },
      {
        num: '02',
        q: 'Do Apex Legends cheats work with EA Javelin Anticheat?',
        a: 'Apex Legends PC uses EA Javelin. Private Apex Cheats builds are retested after patches—confirm the status banner before Ranked.',
      },
      {
        num: '03',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Apex.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Apex via EA App on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Apex Elite, HWID Spoofer, UGC and Skin Changer live at cheatsapex.com/products/apex-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Apex cheats for PC: aimbot, ESP, wallhack and tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Elite apex cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/apex-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Apex Cheats | Buy PC Aimbot & ESP',
      description:
        'About Apex Cheats — buy PC Apex cheats (aimbot, ESP, wallhack), utilities and guides at cheatsapex.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Apex Cheats is a PC site for Apex aimbot, ESP, wallhack, radar and Skin Changer products. We post tier comparisons, setup guides and live status notes.',
            'Game and product names are for identification only.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Lite, Pro and Elite Apex cheats, plus HWID Spoofer, Skin Changer and UGC recovery. The blog covers configs, patch checks and Easy Anti-Cheat updates.',
            'Pages are updated when Apex or the loader changes. Check the homepage status banner and Discord #status before you play.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use Discord or email for loader errors, compatibility and checkout questions. Include your order email, EA account and Windows version.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Apex Cheats Shop',
      description:
        'How the Apex cheats shop at cheatsapex.com handles analytics, cookies and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser and approximate region through Google Analytics when it is enabled. Checkout runs on external pages. We do not store payment card data on cheatsapex.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which guides and product pages people use so we can fix broken links and improve pages. Support tickets keep the email and message you send until the issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use basic analytics cookies. You can block cookies in your browser. The site still works without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the Support page. Purchase and refund rules are in Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for Apex Cheats | License & Refunds',
      description:
        'Terms for buying Apex cheats on cheatsapex.com — license use, delivery, refunds and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using cheatsapex.com or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Apex cheat tiers (Lite, Pro, Elite) and tools (HWID Spoofer, UGC, Skin Changer / Unlock All) through a portal and Windows loader for EA.',
            'Product pages list what is included when you buy. Features can change when Apex or Easy Anti-Cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. cheatsapex.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Apex.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Apex on EA App on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Apex build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Apex can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Apex Cheats Support | Loader, HWID & Checkout',
      description:
        'Apex cheats support for loader setup, HWID spoofing and checkout help at cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    homeAria: 'Apex Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Apex Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
