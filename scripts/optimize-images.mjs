import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const dirs = [
  'public/images/gameplay',
  'public/images/blog',
];

async function writeIfSmaller(output, buffer) {
  if (fs.existsSync(output) && fs.statSync(output).size <= buffer.length) return false;
  fs.writeFileSync(output, buffer);
  return true;
}

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter((file) => /\.png$/i.test(file) && !/-\d+\.webp$/i.test(file));

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.png$/i, '');

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      const buffer = await sharp(input)
        .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 78, effort: 6, smartSubsample: true })
        .toBuffer();
      if (await writeIfSmaller(output, buffer)) {
        console.log(`Wrote ${path.relative(root, output)}`);
      }
    }
  }
}

/** Crush LCP hero assets (responsive webp + jpg fallback). */
async function optimizeHero() {
  const heroJpg = path.join(root, 'public/images/hero-apex.jpg');
  const heroWidths = [640, 960, 1280, 1920];
  if (!fs.existsSync(heroJpg)) return;

  const source = await sharp(heroJpg).toBuffer();

  for (const width of heroWidths) {
    const output = path.join(root, `public/images/hero-apex-${width}.webp`);
    try {
      const buffer = await sharp(source)
        .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 68, effort: 6, smartSubsample: true })
        .toBuffer();
      fs.writeFileSync(output, buffer);
      console.log(`Hero ${width}w → ${(buffer.length / 1024).toFixed(0)}KB`);
    } catch (err) {
      console.warn(`Skip hero ${width}w:`, err.message);
    }
  }

  try {
    const fullWebp = await sharp(source)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 70, effort: 6, smartSubsample: true })
      .toBuffer();
    fs.writeFileSync(path.join(root, 'public/images/hero-apex.webp'), fullWebp);
  } catch (err) {
    console.warn('Skip hero-apex.webp:', err.message);
  }

  try {
    const jpgBuf = await sharp(source)
      .jpeg({ quality: 68, mozjpeg: true, progressive: true })
      .toBuffer();
    fs.writeFileSync(heroJpg, jpgBuf);
    console.log(`Hero jpg → ${(jpgBuf.length / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.warn('Skip hero-apex.jpg:', err.message);
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}
await optimizeHero();

console.log('Image optimization complete.');
