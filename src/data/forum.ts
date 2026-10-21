export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'best-tier', title: 'Best Apex Legends cheats 2026 — Lite, Pro or Elite?', upvotes: 96,
    excerpt: 'Community thread mirroring the 2026 best Apex cheats guide: ESP-only vs aimbot vs full Elite stack under EA Javelin.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Best Apex Legends cheats 2026', sourcePath: '/blog/best-cheats/',
    answer: 'For best Apex Legends cheats 2026: Lite is the Apex ESP wallhack path, Pro adds undetected Apex aimbot for Ranked, and Elite adds loot assist plus Skin Changer. Always verify EA Javelin status before you queue.',
    detail: 'Rank modules by buyer intent—Apex aimbot, player ESP, loot ESP, and HWID recovery—not free-paste feature spam.',
    tip: 'Start Lite for information only; move to Pro after you can run humanized aimbot presets without rage tells.',
  }),
  guideDiscussion({
    slug: 'javelin-status', title: 'Should I wait for EA Javelin status before Ranked?', upvotes: 88,
    excerpt: 'Patch-talk: what anti cheat does Apex use, apex anti cheat error days, and when Apex cheats status is safe for Ranked after EA Javelin updates.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'EA Javelin Anticheat guide', sourcePath: '/blog/ea-javelin/',
    answer: 'Yes. Apex Legends uses EA Javelin on PC. If status says Updating or you see an apex anti cheat error, do not load an old build—wait for Online, then use a Ranked preset.',
    detail: 'Javelin replaced EAC on PC in September 2026. Failed anti cheat backend check and authentication timeout threads belong to the same patch-day checklist.',
    tip: 'Bookmark the EA Javelin guide; check Discord #status after every Apex update before Ranked.',
  }),
  guideDiscussion({
    slug: 'safe-undetected', title: 'Are Apex Legends cheats actually safe / undetected?', upvotes: 81,
    excerpt: 'Are Apex Legends cheats safe in 2026? What undetected means under EA Javelin, ban waves, and player reports.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Are Apex Legends cheats safe 2026', sourcePath: '/blog/cheat-safety/',
    answer: 'No private Apex Legends cheat is permanently safe. Undetected means the current build is not flagged today—not a lifetime guarantee against EA Javelin or manual reports.',
    detail: 'Humanized Apex aimbot, limited ESP wallhack range, and status checks reduce risk versus rage defaults and free pastes.',
    tip: 'Read the cheat safety guide before you buy Apex cheats, then pick conservative presets.',
  }),
  guideDiscussion({
    slug: 'map-awareness', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'Apex ESP wallhack map awareness: player ESP, chest markers, loot ESP, smoke alerts, and distance tags.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Apex ESP wallhack setup guide', sourcePath: '/blog/esp-wallhack/',
    answer: 'Map awareness covers player ESP, box/skeleton overlays, chest and respawn-beacon markers, loot ESP, smoke alerts, and last-seen positions—core Apex ESP wallhack tools.',
    detail: 'Start with a restrained layout and enable only the information you can read during a team fight.',
    tip: 'Keep the wallhack overlay uncluttered: core indicators first, then range and visibility one at a time.',
  }),
  guideDiscussion({
    slug: 'map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Apex ESP wallhack setup guide', sourcePath: '/blog/esp-wallhack/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a bot lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'zoom-settings', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making your player hard to control.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Apex radar hack guide', sourcePath: '/blog/esp-wallhack/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your legend, ability ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short Firing Range session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'aimbot-delay', title: 'How do delay settings affect aimbot feel?', upvotes: 32,
    excerpt: 'A practical question about smoothness, reaction delay, and why the aimbot guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Apex aimbot for ranked play', sourcePath: '/blog/apex-aimbot/',
    answer: 'Delay and smoothness settings control how aggressive tracking feels. The guide recommends starting slower and testing in the Firing Range before Ranked.',
    detail: 'A consistent preset is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'aimbot-practice', title: 'What is a good way to practice aimbot presets?', upvotes: 29,
    excerpt: 'Use a repeatable legend and loadout in the Firing Range, then verify bone priority and smoothness before Ranked.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Undetected Apex Legends aimbot', sourcePath: '/blog/apex-aimbot/',
    answer: 'Choose one legend and one weapon profile to practice at a time. The guide covers bone priority, prediction, and smoothness for Ranked lobbies.',
    detail: 'The Firing Range or Arenas lets you repeat tracking drills without the pressure of a Ranked match.',
    tip: 'Learn manual aim first; that makes it much easier to spot when a preset is too sticky or too slow.',
  }),
  guideDiscussion({
    slug: 'elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Apex Elite tier guide', sourcePath: '/blog/elite-guide/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Loot Assist, Auto Finish, Auto Shield Break, and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'tier-compare', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on awareness features, while Pro adds aimbot modules; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Apex Lite vs Pro: which tier fits you', sourcePath: '/blog/elite-guide/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, chest and loot information, and radar. Pro adds aimbot automation features on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the aimbot modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'skin-tips', title: 'What should I know about the Skin Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Apex Skin Changer guide', sourcePath: '/blog/skin-guide/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'javelin-verify', title: 'What should I do if EA / Javelin cannot verify my Apex install?', upvotes: 24,
    excerpt: 'Start with EA App file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'EA Javelin and Apex install verification', sourcePath: '/blog/ea-javelin/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify Apex files through the EA App.',
    detail: 'It also recommends fully exiting the EA App, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal EA App launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'external-loader', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Apex external cheat guide', sourcePath: '/blog/external-cheat/',
    answer: 'The article uses “external” to describe software that runs separately from the Apex process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Apex receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-proof', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Apex', sourcePath: '/blog/external-cheat/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Apex HWID spoofer after ban', sourcePath: '/blog/hwid-guide/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'install-check', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Apex cheats features guide', sourcePath: '/blog/cheat-features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-tier', title: 'How do I choose the right Apex product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Apex cheats in 2026', sourcePath: '/blog/buy-cheats/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'after-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Apex patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EA Javelin patch-day checklist', sourcePath: '/blog/ea-javelin/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in the Firing Range or a Pubs lobby before returning to Ranked.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'range_tester', age: '8 hours ago', score: 12, body: 'Testing after the update before Ranked is the part I used to skip. Now I check the build note and run a quick Firing Range session.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'aimbot-tier', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes aimbot?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds aimbot modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Apex Lite vs Pro: feature comparison', sourcePath: '/blog/elite-guide/',
    body: ['According to the comparison guide, Lite centers on map awareness features such as player ESP, chest and loot information, radar, and stream-proof options. Pro includes those features and adds aimbot modules such as Aimbot, Smooth Aim, Sticky Aim, Bone Priority, and Hotkey macros.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
