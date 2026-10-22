/**
 * Copy user cheat screenshots (long Windows paths) into public/images,
 * then write SEO-named PNGs for gameplay + blog.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-cheatsapex-com-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

/** Skip non-Apex screenshots by filename fragment. */
const SKIP_SUBSTRINGS = ['065800-cb09d0b5'];

const GAMEPLAY = [
  { file: 'apex-esp-wallhack.png', alt: 'Apex ESP wallhack cheat gameplay with player boxes distance tags and aimbot FOV' },
  { file: 'apex-aimbot-combat.png', alt: 'Apex aimbot cheat gameplay with FOV circle and green skeleton ESP on enemy' },
  { file: 'apex-player-esp.png', alt: 'Apex player ESP wallhack showing skeletons boxes and distance meters' },
  { file: 'apex-radar-hack.png', alt: 'Apex radar and ESP overlay with enemy name tags health and range markers' },
  { file: 'apex-auto-aim.png', alt: 'Apex sniper aimbot cheat with green ESP box weapon label and FOV circle' },
  { file: 'apex-loot-radar.png', alt: 'Apex loot and chest ESP gameplay with enemy boxes and distance trackers' },
  { file: 'apex-skin-changer.png', alt: 'Apex cheat gameplay with chams skeleton ESP and aim lock on pier' },
  { file: 'apex-thermal-esp.png', alt: 'Apex thermal vision ESP showing skeleton wallhack HP and distance' },
  { file: 'apex-fight-esp.png', alt: 'Apex gunfight ESP wallhack with names HP bars and FOV circle' },
  { file: 'apex-arena-wallhack.png', alt: 'Apex arena wallhack ESP with wireframe players and weapon tags' },
  { file: 'apex-dropship-esp.png', alt: 'Apex dropship ESP with skeleton boxes and aimbot reticle' },
  { file: 'apex-long-range-esp.png', alt: 'Apex long range ESP wallhack with enemy names health and weapons' },
  { file: 'apex-aimbot-lock.png', alt: 'Apex aimbot lock with green skeleton ESP FOV circle and head priority' },
  { file: 'apex-chams-esp.png', alt: 'Apex chams and skeleton ESP cheat on wooden pier' },
  { file: 'apex-squad-esp.png', alt: 'Apex multi-player ESP wallhack with boxes skeletons and distances' },
  { file: 'apex-combat-esp.png', alt: 'Apex combat ESP and aimbot overlay in open field fight' },
];

const BLOG = [
  'apex-cheats-features-guide.png',
  'apex-lite-vs-pro.png',
  'apex-elite-tier-guide.png',
  'apex-aimbot-ranked-guide.png',
  'apex-esp-wallhack-setup.png',
  'apex-radar-hack-guide.png',
  'apex-skin-changer-guide.png',
  'eac-patch-day-checklist.png',
  'apex-hwid-spoofer-after-ban.png',
  'how-to-buy-apex-cheats-2026.png',
  'apex-aimbot-combat-guide.png',
  'eac-bypass-apex-guide.png',
  'apex-external-cheat-guide.png',
  'apex-stream-proof-setup.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  if (resolved.startsWith('\\\\?\\')) return resolved;
  return `\\\\?\\${resolved}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listAssetPngs() {
  const entries = fs.readdirSync(longPath(assetsDir));
  return entries
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .filter((f) => !SKIP_SUBSTRINGS.some((s) => f.includes(s)))
    .sort();
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), buf.length);
}

ensureDir(importDir);
ensureDir(gameplayDir);
ensureDir(blogDir);

const sources = listAssetPngs();
console.log(`Found ${sources.length} source screenshots`);

const shortFiles = [];
for (let i = 0; i < sources.length; i++) {
  const name = sources[i];
  const short = `shot-${String(i + 1).padStart(2, '0')}.png`;
  const from = longPath(path.join(assetsDir, name));
  const to = path.join(importDir, short);
  fs.copyFileSync(from, to);
  shortFiles.push(to);
  console.log('copied', short, '←', name.slice(-40));
}

if (!shortFiles.length) {
  console.error('No screenshots copied.');
  process.exit(1);
}

const alts = [];
for (let i = 0; i < GAMEPLAY.length; i++) {
  const src = shortFiles[i % shortFiles.length];
  const dest = path.join(gameplayDir, GAMEPLAY[i].file);
  await writeResizedPng(src, dest);
  alts.push({ file: GAMEPLAY[i].file, alt: GAMEPLAY[i].alt, srcIndex: i % shortFiles.length });
}

for (let i = 0; i < BLOG.length; i++) {
  // Offset so blog covers prefer different frames than gameplay slots when possible
  const src = shortFiles[(i + 3) % shortFiles.length];
  await writeResizedPng(src, path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'),
  JSON.stringify({ gameplay: alts, sourceCount: shortFiles.length }, null, 2),
);

console.log('Done. Next: npm run optimize:images');
