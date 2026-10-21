import { checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

/** Levo-aligned Apex Legends cheat plans. */
export const apexHubPlans = [
  {
    id: 'weekly',
    label: '1 Week',
    price: '$15',
    note: 'USD / 7 days',
    blurb: 'Short trial for Pubs or a ranked weekend. Full ESP, aimbot and EAC bypass while Active.',
  },
  {
    id: 'monthly',
    label: '1 Month',
    price: '$35',
    note: 'USD / month',
    blurb: 'Most popular plan for Ranked grinders who want patch updates and Discord support all season.',
    popular: true,
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    price: '$150',
    note: 'USD · one-time',
    blurb: 'One payment for ongoing Apex Legends cheats access—best value if you play every split.',
  },
] as const;

/** Full module list matching the live Apex catalog. */
export const apexHubModules: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Player ESP', desc: 'See enemies through walls with clear tags.', icon: 'eye' },
  { title: 'Advanced Aimbot', desc: 'Tracking for Battle Royale and Ranked fights.', icon: 'crosshair' },
  { title: 'Weapon ESP', desc: 'Highlight usable guns on the ground and in fights.', icon: 'toolkitWeapons' },
  { title: 'Health Bar', desc: 'Read HP and shield state before you push.', icon: 'reqShieldGuide' },
  { title: 'Distance ESP', desc: 'Range labels so you time peeks and third-parties.', icon: 'radar' },
  { title: 'Box ESP', desc: 'Clean boxes on players through cover and fog.', icon: 'featureEsp' },
  { title: 'Skeleton ESP', desc: 'Bone outlines for tracking through walls.', icon: 'skeletonEsp' },
  { title: 'Loot ESP', desc: 'Floor loot and high-tier drops with filters.', icon: 'lootEsp' },
  { title: 'No Recoil', desc: 'Stabilize spray patterns mid-fight.', icon: 'noRecoil' },
  { title: 'EAC Bypass', desc: 'Retested after Apex / EA Javelin patches.', icon: 'shieldCheck' },
  { title: 'Stream Proof', desc: 'Hide overlays from OBS and Game Bar capture.', icon: 'streamProof' },
  { title: '24/7 Support', desc: 'Discord help for loader setup and configs.', icon: 'support247' },
  { title: 'CLOUD-DMA OPTION', desc: 'Optional Cloud-DMA delivery when listed Active.', icon: 'compareCloudBackup' },
  { title: 'AWS option', desc: 'Alternate AWS delivery path for supported setups.', icon: 'settings' },
];

export const apexHubSteps = [
  {
    num: '01',
    title: 'Check live status',
    desc: 'Confirm Apex cheats are Active on cheatsapex.com and Discord #status after every patch.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Choose 1 Week ($15), 1 Month ($35), or Lifetime ($150)—same modules on every plan.',
  },
  {
    num: '03',
    title: 'Checkout & portal',
    desc: 'Buy via secure checkout, open the operator portal, and download the latest Windows loader.',
  },
  {
    num: '04',
    title: 'Load & queue',
    desc: 'Apply a Pubs or Ranked preset, test in a lobby, then queue when the banner stays Online.',
  },
] as const;

export const apexHubFaq = [
  {
    q: 'What do Apex Legends cheats include?',
    a: 'Player ESP, advanced aimbot, weapon ESP, health bar, distance ESP, box ESP, skeleton ESP, loot ESP, no recoil, EAC bypass, stream proof, 24/7 support, plus optional Cloud-DMA and AWS delivery.',
  },
  {
    q: 'Do these Apex cheats work with EA Javelin?',
    a: 'Apex Legends PC uses EA Javelin. Builds are retested after game and anticheat patches—always check the status banner before Ranked.',
  },
  {
    q: 'Is this for PC only?',
    a: 'Yes. Windows 10/11 via EA App. Console platforms are not supported.',
  },
] as const;

export const apexHubBuyUrl = checkoutPath('apex');

export const apexHubSeoBlocks = [
  {
    title: 'Buy Apex Legends cheats for PC',
    paragraphs: [
      'This Apex Legends products hub is the home for apex cheats on cheatsapex.com—player ESP, advanced aimbot, loot ESP, no recoil, stream proof, and EAC bypass tuned for Battle Royale and Ranked.',
      'Plans start at $15 for 1 Week, $35 for 1 Month, or $150 Lifetime. Optional Cloud-DMA and AWS delivery match the live catalog when those paths are listed Active.',
    ],
  },
  {
    title: 'ESP wallhack, aimbot and loot tools',
    paragraphs: [
      'Apex legends cheat buyers usually want information first: box ESP, skeleton ESP, health bar and distance tags so you see squads before they push. Advanced aimbot and no recoil sit on top when you need tracking in close fights.',
      'Loot ESP and weapon ESP speed up rotations. Stream proof keeps overlays off OBS while you still see ESP on your monitor.',
    ],
  },
  {
    title: 'EA Javelin status and safe habits',
    paragraphs: [
      'Apex Legends uses EA Javelin anticheat on PC. After a season update or anticheat patch, wait for the Online banner, reload the loader, and use conservative presets before your first Ranked queue.',
      'Pair combat modules with utilities when needed—HWID Spoofer for hardware bans, UGC for account appeals, or Skin Changer for local cosmetic previews.',
    ],
  },
] as const;
