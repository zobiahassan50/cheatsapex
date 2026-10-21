/**
 * Rename leftover Dota/Fortnite identifiers + fix residual copy.
 */
import fs from 'node:fs';
import path from 'node:path';

const renames = [
  ['compareWardLocator', 'compareLootLocator'],
  ['compareRuneTimer', 'compareLootTimer'],
  ['compareZoomHack', 'compareRadar'],
  ['compareAutoCombo', 'compareAimbot'],
  ['compareAbilityRadius', 'compareFovRadius'],
  ['compareAutoFarm', 'compareLootAssist'],
  ['compareAutoKillSteal', 'compareAutoFinish'],
  ['compareFullMapHack', 'compareFullEsp'],
  ['faqZoomHack', 'faqRadar'],
  ['faqAutoFarm', 'faqLootAssist'],
  ['compatEpic', 'compatEa'],
  ['reqEpic', 'reqEa'],
  ['gpMapHack', 'gpEspWallhack'],
  ['gpZoomHack', 'gpRadar'],
  ['gpFarmBot', 'gpLootEsp'],
  ['gpHeroEsp', 'gpPlayerEsp'],
  ['gpAutoKill', 'gpSniperAimbot'],
  ['gpBuildFight', 'gpGunfight'],
  ['gpScripts', 'gpAimbotCombat'],
  ["id: 'zoom-hack'", "id: 'radar'"],
  ["id: 'auto-farm'", "id: 'loot-assist'"],
  ['Does Skin Changer modify my Apex locker?', 'Does Skin Changer modify my EA inventory?'],
  ['Do tiers work in Ranked and ranked?', 'Do tiers work in Pubs and Ranked?'],
  ['include Ranked and ranked presets', 'include Pubs and Ranked presets'],
  ['without bot farming', 'without Elite loot bots'],
];

const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const EXT = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.css', '.md', '.json']);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (EXT.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

let files = 0;
let reps = 0;
for (const file of walk(path.join(process.cwd(), 'src'))) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  for (const [from, to] of renames) {
    if (!text.includes(from)) continue;
    reps += text.split(from).length - 1;
    text = text.split(from).join(to);
  }
  if (text !== original) {
    fs.writeFileSync(file, text);
    files++;
    console.log('updated', path.relative(process.cwd(), file));
  }
}
console.log(`Done: ${files} files, ${reps} renames`);
