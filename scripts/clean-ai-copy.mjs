import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['ApexCheats Editorial', 'Apex Cheats'],
  ['ApexCheats Community Forum', 'Apex Cheats Forum'],
  ['ApexCheats Blog', 'Apex Cheats Blog'],
  ['ApexCheats Support', 'Apex Cheats Support'],
  ['Join ApexCheats on Discord', 'Join Apex Cheats on Discord'],
  ['ApexCheats home', 'Apex Cheats home'],
  ['ApexCheats', 'Apex Cheats'],
  ["TITLE_PREFIX = 'Apex Cheats & Hacks'", "TITLE_PREFIX = 'Apex Cheats'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with apex aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked Apex aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private apex cheats for Windows PC Battle Royale and Ranked—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Apex cheats for Windows PC Battle Royale and Ranked. Check status before you queue after a patch.',
  ],
  [
    'maintains private apex cheats for Windows PC Battle Royale and Ranked. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Apex cheats for Windows PC Battle Royale and Ranked. Check status before you queue after a patch.',
  ],
  [
    'maintains private apex cheats for Windows PC Battle Royale and Ranked. Check live status before every patch-day queue.',
    'sells Apex cheats for Windows PC Battle Royale and Ranked. Check status before you queue after a patch.',
  ],
  [
    'maintains private apex cheats for Windows PC Battle Royale and Ranked.',
    'sells Apex cheats for Windows PC Battle Royale and Ranked.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Aimbot tracks targets, loot assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external Apex cheats for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
