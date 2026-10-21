/**
 * Import root WhatsApp images → blog PNGs, optimize WebPs, import hero video.
 * Quality-first: high WebP quality, video CRF 18 + faststart.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();

const IMAGE_MAP = [
  ['WhatsApp Image 2026-10-19 at 6.01.51 PM.jpeg', 'best-apex-legends-cheats-2026'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM.jpeg', 'undetected-apex-legends-aimbot'],
  ['WhatsApp Image 2026-10-19 at 6.01.51 PM (1).jpeg', 'apex-legends-esp-wallhack-2026'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (4).jpeg', 'ea-javelin-anticheat-apex-cheats'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (5).jpeg', 'apex-legends-hwid-spoofer-javelin'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (6).jpeg', 'buy-undetected-apex-cheats'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (9).jpeg', 'are-apex-legends-cheats-safe-2026'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (1).jpeg', 'apex-cheats-features-guide'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (3).jpeg', 'apex-lite-vs-pro'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (8).jpeg', 'apex-skin-changer-guide'],
  ['WhatsApp Image 2026-10-19 at 6.01.52 PM (7).jpeg', 'apex-external-cheat-guide'],
];

const KEEP_SLUGS = new Set(IMAGE_MAP.map(([, slug]) => slug));
const WIDTHS = [320, 400, 512, 640, 960];
const blogDir = path.join(root, 'public/images/blog');
const videoDir = path.join(root, 'public/videos');
const videoSrc = path.join(root, 'WhatsApp Video 2026-10-19 at 7.33.13 PM.mp4');

function findFfmpeg() {
  const which = spawnSync('where.exe', ['ffmpeg'], { encoding: 'utf8' });
  const line = which.stdout?.split(/\r?\n/).find((l) => l.trim().endsWith('ffmpeg.exe'));
  return line?.trim() || 'ffmpeg';
}

async function importImages() {
  fs.mkdirSync(blogDir, { recursive: true });

  for (const [srcName, slug] of IMAGE_MAP) {
    const src = path.join(root, srcName);
    if (!fs.existsSync(src)) throw new Error(`Missing ${srcName}`);
    const destPng = path.join(blogDir, `${slug}.png`);

    // Master PNG: max 1920w, no quality loss beyond resize (lanczos)
    await sharp(src)
      .rotate()
      .resize({ width: 1920, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .png({ compressionLevel: 6, adaptiveFiltering: true })
      .toFile(destPng);

    for (const width of WIDTHS) {
      const out = path.join(blogDir, `${slug}-${width}.webp`);
      await sharp(src)
        .rotate()
        .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 92, effort: 6, smartSubsample: true })
        .toFile(out);
      console.log('webp', path.relative(root, out));
    }
    console.log('png', path.relative(root, destPng));
  }
}

function deleteOldBlogAssets() {
  for (const file of fs.readdirSync(blogDir)) {
    const base = file.replace(/-\d+\.webp$/i, '').replace(/\.(png|webp|jpe?g)$/i, '');
    const isVariant = /-\d+\.webp$/i.test(file);
    const slug = isVariant ? file.replace(/-\d+\.webp$/i, '') : base;
    if (!KEEP_SLUGS.has(slug)) {
      fs.unlinkSync(path.join(blogDir, file));
      console.log('deleted', file);
    }
  }
}

function importVideo() {
  fs.mkdirSync(videoDir, { recursive: true });
  const ffmpeg = findFfmpeg();
  const mp4Out = path.join(videoDir, 'apex-hero.mp4');
  const webmOut = path.join(videoDir, 'apex-hero.webm');
  const posterOut = path.join(videoDir, 'apex-hero-poster.jpg');

  // High-quality H.264, light for 10s clip
  const mp4 = spawnSync(
    ffmpeg,
    [
      '-y',
      '-i',
      videoSrc,
      '-c:v',
      'libx264',
      '-preset',
      'slow',
      '-crf',
      '18',
      '-pix_fmt',
      'yuv420p',
      '-c:a',
      'aac',
      '-b:a',
      '160k',
      '-movflags',
      '+faststart',
      mp4Out,
    ],
    { encoding: 'utf8' },
  );
  if (mp4.status !== 0) {
    console.error(mp4.stderr);
    throw new Error('ffmpeg mp4 failed');
  }
  console.log('video mp4', (fs.statSync(mp4Out).size / 1024 / 1024).toFixed(2), 'MB');

  // WebM VP9 for smaller progressive enhancement
  const webm = spawnSync(
    ffmpeg,
    [
      '-y',
      '-i',
      videoSrc,
      '-c:v',
      'libvpx-vp9',
      '-b:v',
      '0',
      '-crf',
      '30',
      '-row-mt',
      '1',
      '-c:a',
      'libopus',
      '-b:a',
      '128k',
      webmOut,
    ],
    { encoding: 'utf8' },
  );
  if (webm.status !== 0) {
    console.warn('webm encode skipped/failed — mp4 still available');
  } else {
    console.log('video webm', (fs.statSync(webmOut).size / 1024 / 1024).toFixed(2), 'MB');
  }

  // Poster frame
  spawnSync(
    ffmpeg,
    ['-y', '-ss', '1.2', '-i', videoSrc, '-frames:v', '1', '-q:v', '2', posterOut],
    { encoding: 'utf8' },
  );
  console.log('poster', path.relative(root, posterOut));
}

function updatePostImagePaths() {
  for (const file of ['src/data/blog/posts.ts', 'src/i18n/en.ts']) {
    let s = fs.readFileSync(path.join(root, file), 'utf8');
    for (const [, slug] of IMAGE_MAP) {
      const q = file.endsWith('en.ts') ? "'" : '"';
      const marker = `slug: ${q}${slug}${q}`;
      const i = s.indexOf(marker);
      if (i < 0) continue;
      const slice = s.slice(i, i + 500);
      const m = slice.match(/image:\s*(["'])([^"']+)\1/);
      if (!m) continue;
      const neu = `image: ${q}/images/blog/${slug}.png${q}`;
      s = s.slice(0, i) + slice.replace(m[0], neu) + s.slice(i + slice.length);
    }
    fs.writeFileSync(path.join(root, file), s);
    console.log('updated image paths', file);
  }
}

function cleanupWhatsAppSources() {
  for (const [srcName] of IMAGE_MAP) {
    const p = path.join(root, srcName);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log('removed source', srcName);
    }
  }
  if (fs.existsSync(videoSrc)) {
    fs.unlinkSync(videoSrc);
    console.log('removed source video');
  }
}

await importImages();
deleteOldBlogAssets();
importVideo();
updatePostImagePaths();
cleanupWhatsAppSources();
console.log('Done import');
