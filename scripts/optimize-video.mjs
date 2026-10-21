/**
 * Re-encode hero video + poster in place for smaller transfer (same paths / UI).
 * Skips when ffmpeg is missing or outputs would not shrink.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();
const videosDir = path.join(root, 'public', 'videos');
const poster = path.join(videosDir, 'apex-hero-poster.jpg');
const mp4 = path.join(videosDir, 'apex-hero.mp4');
const webm = path.join(videosDir, 'apex-hero.webm');

function hasFfmpeg() {
  const r = spawnSync('ffmpeg', ['-version'], { encoding: 'utf8' });
  return r.status === 0;
}

function runFfmpeg(args) {
  const r = spawnSync('ffmpeg', ['-y', ...args], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  if (r.status !== 0) {
    console.warn('ffmpeg failed:', r.stderr?.slice(-500) || r.error);
    return false;
  }
  return true;
}

function replaceIfSmaller(tmpPath, destPath) {
  if (!fs.existsSync(tmpPath)) return false;
  const before = fs.existsSync(destPath) ? fs.statSync(destPath).size : Infinity;
  const after = fs.statSync(tmpPath).size;
  if (after > 0 && after < before * 0.98) {
    try {
      fs.copyFileSync(tmpPath, destPath);
      fs.unlinkSync(tmpPath);
    } catch {
      // Dev server may lock media files — leave tmp for next unlocked build
      console.warn(`Could not replace ${path.basename(destPath)} (file locked). Kept temp: ${path.basename(tmpPath)}`);
      return false;
    }
    console.log(`Optimized ${path.basename(destPath)}: ${(before / 1e6).toFixed(2)}MB → ${(after / 1e6).toFixed(2)}MB`);
    return true;
  }
  try {
    fs.unlinkSync(tmpPath);
  } catch {
    /* ignore */
  }
  console.log(`Kept ${path.basename(destPath)} (re-encode not smaller)`);
  return false;
}

if (fs.existsSync(poster)) {
  const tmp = poster.replace(/\.jpg$/i, '.opt.jpg');
  await sharp(poster)
    .resize({ width: 1280, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true, progressive: true })
    .toFile(tmp);
  replaceIfSmaller(tmp, poster);
}

if (!hasFfmpeg()) {
  console.warn('ffmpeg not found — skipping video re-encode');
  process.exit(0);
}

if (fs.existsSync(mp4)) {
  const tmp = `${mp4}.tmp.mp4`;
  const ok = runFfmpeg([
    '-i', mp4,
    '-an',
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '28',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-vf', 'scale=min(1280\\,iw):-2',
    tmp,
  ]);
  if (ok) replaceIfSmaller(tmp, mp4);
  else if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
}

if (fs.existsSync(webm)) {
  const tmp = `${webm}.tmp.webm`;
  const ok = runFfmpeg([
    '-i', webm,
    '-an',
    '-c:v', 'libvpx-vp9',
    '-b:v', '0',
    '-crf', '34',
    '-row-mt', '1',
    '-vf', 'scale=min(1280\\,iw):-2',
    tmp,
  ]);
  if (ok) replaceIfSmaller(tmp, webm);
  else if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
}

console.log('Video optimization pass complete.');
