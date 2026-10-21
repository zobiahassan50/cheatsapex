/**
 * Build full-bleed hero background from `_hero-source.jpg` (or legacy WhatsApp path).
 * Quality-first JPEG + responsive WebP (640–1920).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const srcCandidates = [
  path.join(root, '_hero-source.jpg'),
  path.join(root, 'hero-apex.jpg'),
  path.join(root, 'WhatsApp Image 2026-10-19 at 6.01.52 PM (2).jpeg'),
];
const src = srcCandidates.find((p) => fs.existsSync(p));
if (!src) throw new Error('Hero source image not found (_hero-source.jpg)');

const outDir = path.join(root, 'public/images');
const widths = [640, 960, 1280, 1920];

fs.mkdirSync(outDir, { recursive: true });

const meta = await sharp(src).metadata();
console.log('source', path.basename(src), `${meta.width}x${meta.height}`);

/** Master pipeline: max 1920w, lanczos, no upscale. */
const master = () =>
  sharp(src)
    .rotate()
    .resize({
      width: 1920,
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });

await master()
  .jpeg({ quality: 92, mozjpeg: true, progressive: true })
  .toFile(path.join(outDir, 'hero-apex.jpg'));

await master()
  .webp({ quality: 92, effort: 6, smartSubsample: true })
  .toFile(path.join(outDir, 'hero-apex.webp'));

for (const width of widths) {
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(path.join(outDir, `hero-apex-${width}.webp`));
  console.log('webp', width);
}

// Clean temp / duplicate root sources (keep public/images only)
for (const name of ['_hero-source.jpg', 'hero-apex.jpg']) {
  const p = path.join(root, name);
  if (fs.existsSync(p) && path.resolve(p) !== path.resolve(outDir, 'hero-apex.jpg')) {
    fs.unlinkSync(p);
    console.log('removed', name);
  }
}

for (const f of fs.readdirSync(outDir).filter((n) => n.startsWith('hero-apex'))) {
  const kb = (fs.statSync(path.join(outDir, f)).size / 1024).toFixed(0);
  console.log(`${f}: ${kb}KB`);
}
