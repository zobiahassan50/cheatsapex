/**
 * High-quality hero media: sharp poster WebPs at display sizes + efficient AV1/VP9/H264.
 * Quality-first (CRF), not aggressive crush. Prefer one format at runtime (see HeroSection).
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();
const videosDir = path.join(root, 'public', 'videos');
const posterJpg = path.join(videosDir, 'apex-hero-poster.jpg');
const mp4 = path.join(videosDir, 'apex-hero.mp4');
const webm = path.join(videosDir, 'apex-hero.webm');

function hasFfmpeg() {
  return spawnSync('ffmpeg', ['-version'], { encoding: 'utf8' }).status === 0;
}

function runFfmpeg(args) {
  const r = spawnSync('ffmpeg', ['-y', ...args], {
    encoding: 'utf8',
    maxBuffer: 40 * 1024 * 1024,
  });
  if (r.status !== 0) {
    console.warn('ffmpeg failed:', r.stderr?.slice(-800) || r.error);
    return false;
  }
  return true;
}

function replaceIfSmaller(tmpPath, destPath) {
  if (!fs.existsSync(tmpPath)) return false;
  const before = fs.existsSync(destPath) ? fs.statSync(destPath).size : Infinity;
  const after = fs.statSync(tmpPath).size;
  // Allow replace when smaller OR when within 5% but newer encode (quality pass)
  if (after > 0 && after <= before * 1.05) {
    try {
      fs.copyFileSync(tmpPath, destPath);
      fs.unlinkSync(tmpPath);
      console.log(
        `Wrote ${path.basename(destPath)}: ${(before / 1e6).toFixed(2)}MB → ${(after / 1e6).toFixed(2)}MB`,
      );
      return true;
    } catch {
      console.warn(`Locked: ${path.basename(destPath)} — kept ${path.basename(tmpPath)}`);
      return false;
    }
  }
  try {
    fs.unlinkSync(tmpPath);
  } catch {
    /* ignore */
  }
  console.log(`Kept ${path.basename(destPath)}`);
  return false;
}

/** Responsive posters — display ~510–620 CSS px → 640 / 960 / 1280 for 1x–2x, high quality. */
async function writePosterVariants() {
  if (!fs.existsSync(posterJpg) && !fs.existsSync(mp4)) return;
  const source = fs.existsSync(posterJpg)
    ? posterJpg
    : await (async () => {
        const frame = path.join(videosDir, '_poster-frame.jpg');
        runFfmpeg(['-i', mp4, '-ss', '00:00:01', '-frames:v', '1', '-q:v', '2', frame]);
        return frame;
      })();

  for (const width of [640, 960, 1280]) {
    const out = path.join(videosDir, `apex-hero-poster-${width}.webp`);
    const buf = await sharp(source)
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 88, effort: 6, smartSubsample: true })
      .toBuffer();
    fs.writeFileSync(out, buf);
    console.log(`Poster ${width}w webp → ${(buf.length / 1024).toFixed(0)}KB`);
  }

  // Keep jpg as fallback at 960w, high quality (not the old 1280 oversized file)
  const jpgBuf = await sharp(source)
    .resize({ width: 960, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 88, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toBuffer();
  try {
    fs.writeFileSync(posterJpg, jpgBuf);
    console.log(`Poster jpg 960w → ${(jpgBuf.length / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.warn('Poster jpg locked:', err.message);
  }
}

await writePosterVariants();

if (!hasFfmpeg()) {
  console.warn('ffmpeg not found — skipping video re-encode');
  process.exit(0);
}

// Prefer the larger of mp4/webm as encode source for quality
const sourceVideo = [mp4, webm]
  .filter((p) => fs.existsSync(p))
  .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)[0];

if (!sourceVideo) {
  console.log('No hero video found.');
  process.exit(0);
}

// High-quality H264 — CRF 20, slow, 1280 max (covers 2x of ~640 CSS video slot)
{
  const tmp = `${mp4}.tmp.mp4`;
  const ok = runFfmpeg([
    '-i',
    sourceVideo,
    '-an',
    '-c:v',
    'libx264',
    '-preset',
    'slow',
    '-crf',
    '20',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    '-vf',
    "scale='min(1280,iw)':-2",
    tmp,
  ]);
  if (ok) replaceIfSmaller(tmp, mp4);
  else if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
}

// High-quality VP9 — CRF 30 (visually strong), row-mt
{
  const tmp = `${webm}.tmp.webm`;
  const ok = runFfmpeg([
    '-i',
    sourceVideo,
    '-an',
    '-c:v',
    'libvpx-vp9',
    '-b:v',
    '0',
    '-crf',
    '30',
    '-row-mt',
    '1',
    '-cpu-used',
    '2',
    '-vf',
    "scale='min(1280,iw)':-2",
    tmp,
  ]);
  if (ok) replaceIfSmaller(tmp, webm);
  else if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
}

console.log('Video optimization pass complete.');
