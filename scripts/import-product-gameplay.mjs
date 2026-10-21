/**
 * Import root WhatsApp gameplay screenshots → public/images/gameplay
 * High-quality PNG masters + responsive WebP variants (320–960).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outDir = path.join(root, 'public/images/gameplay');
const WIDTHS = [320, 400, 512, 640, 960];

/** Source WhatsApp file → SEO slug used by product showcase + galleries */
const IMAGE_MAP = [
  {
    src: 'WhatsApp Image 2026-10-19 at 8.54.53 PM (1).jpeg',
    slug: 'apex-player-esp',
    alt: 'Apex Legends player ESP with green boxes, health bars, and distance tags while ADS',
  },
  {
    src: 'WhatsApp Image 2026-10-19 at 8.54.54 PM.jpeg',
    slug: 'apex-loot-radar',
    alt: 'Apex Legends loot and item ESP with Hands markers, enemy boxes, and range labels',
  },
  {
    src: 'WhatsApp Image 2026-10-19 at 8.54.54 PM (2).jpeg',
    slug: 'apex-esp-wallhack',
    alt: 'Apex Legends skeleton ESP wallhack showing players through walls with boxes and distances',
  },
  {
    src: 'WhatsApp Image 2026-10-19 at 8.54.54 PM (3).jpeg',
    slug: 'apex-aimbot-combat',
    alt: 'Apex Legends aimbot combat view with scoped ESP box lock on an enemy player',
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const { src, slug } of IMAGE_MAP) {
  const input = path.join(root, src);
  if (!fs.existsSync(input)) throw new Error(`Missing ${src}`);

  const destPng = path.join(outDir, `${slug}.png`);
  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(destPng);

  const meta = await sharp(destPng).metadata();
  console.log(`png ${slug}.png ${meta.width}x${meta.height}`);

  for (const width of WIDTHS) {
    const out = path.join(outDir, `${slug}-${width}.webp`);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 92, effort: 6, smartSubsample: true })
      .toFile(out);
    console.log(`webp ${slug}-${width}.webp`);
  }

  fs.unlinkSync(input);
  console.log(`removed source ${src}`);
}

fs.writeFileSync(
  path.join(root, 'scripts/product-gameplay-alts.json'),
  JSON.stringify(
    IMAGE_MAP.map(({ slug, alt }) => ({ file: `${slug}.png`, alt })),
    null,
    2,
  ),
);

console.log('Done import-product-gameplay');
