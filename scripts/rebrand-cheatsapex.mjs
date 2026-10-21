/**
 * Rewrite leftover Dota/Fortnite copy + domain → Apex Cheats / cheatsapex.com
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);

const TEXT_EXT = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.astro',
  '.md',
  '.json',
  '.toml',
  '.txt',
  '.html',
  '.css',
  '.webmanifest',
]);

/** Phrase / token rewrites (order matters — longer first). */
const REWRITES = [
  // Domain (product path /products/apex-cheats/ is unaffected)
  ['apex-cheats.com', 'cheatsapex.com'],
  ['https://apex-cheats.com', 'https://cheatsapex.com'],
  ['apex-cheats-com', 'cheatsapex-com'],

  // Fortnite launcher / store leftovers → EA / Apex
  ['Epic store purchases', 'EA store purchases'],
  ['Epic locker items', 'EA Apex inventory items'],
  ['Epic locker', 'EA Apex inventory'],
  ['Epic account restrictions', 'EA account restrictions'],
  ['fresh Epic account', 'fresh EA account'],
  ['Epic account', 'EA account'],
  ['Apex on Epic', 'Apex on EA App'],
  ['launch Apex on Epic', 'launch Apex on EA App'],
  ['hours of Epic updates', 'hours of Apex / EA updates'],
  ['via Epic with latest', 'via EA App / Steam with latest'],

  // Fortnite cosmetics → Apex cosmetics
  ['outfits, wraps and pickaxes', 'legend skins, weapon skins and heirlooms'],
  ['outfits, wraps, and pickaxes', 'legend skins, weapon skins, and heirlooms'],
  ['Preview outfits, wraps and pickaxes', 'Preview legend skins, weapon skins and heirlooms'],
  ['Unlock All for outfits, wraps and pickaxes', 'Unlock All for legend skins, weapon skins and heirlooms'],
  ['Preview skins and wraps locally', 'Preview legend and weapon skins locally'],

  // Fortnite storm / Dota mixed nonsense → Apex
  ['storm edge and fights', 'ring edge and fights'],
  ['Storm and POI markers', 'Ring and POI markers'],
  ['Storm Ball, shockwave utility, or assault rifle sun strike', 'grenades, abilities, or AR tracking'],
  ['ARs, SMGs, and snipers, Storm', 'ARs, SMGs, and snipers in the ring'],

  // Dota leftovers still in Apex copy
  ['kill steal and Skin Changer', 'Auto Finish and Skin Changer'],
  ['kill-steal topics', 'Auto Finish topics'],
  ['kill steal, and Skin Changer', 'Auto Finish, and Skin Changer'],
  ['Use kill steal in Ranked', 'Use Auto Finish in Ranked'],
  ['Enable farm bot only', 'Enable loot assist only'],
  ['bots, kill steal', 'bots, Auto Finish'],
  ['adds bots, kill steal', 'adds bots, Auto Finish'],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (TEXT_EXT.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

let filesChanged = 0;
let replacements = 0;

for (const file of walk(root)) {
  // Skip this script and historical one-shot scripts that intentionally mention old brands
  if (file.includes(`${path.sep}rebrand-cheatsapex.mjs`)) continue;

  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  for (const [from, to] of REWRITES) {
    if (!text.includes(from)) continue;
    const parts = text.split(from);
    replacements += parts.length - 1;
    text = parts.join(to);
  }
  if (text !== original) {
    fs.writeFileSync(file, text);
    filesChanged++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done: ${filesChanged} files, ${replacements} replacements`);
