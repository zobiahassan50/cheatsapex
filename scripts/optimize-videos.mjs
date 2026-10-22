/**
 * ffmpeg re-encode + sharp posters (skip gracefully without ffmpeg).
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const videosDir = path.join(root, 'public', 'videos');
const postersDir = path.join(root, 'public', 'images', 'posters');

const targets = [
  { file: 'apex-hero.mp4', poster: 'apex-hero-poster', maxHeight: 720, posterJpg: 'apex-hero-poster.jpg' },
];

function findFfmpeg() {
  const candidates = ['ffmpeg', 'ffmpeg.exe'];
  for (const bin of candidates) {
    const probe = spawnSync(bin, ['-version'], { encoding: 'utf8' });
    if (probe.status === 0) return bin;
  }
  return null;
}

function run(bin, args) {
  const result = spawnSync(bin, args, { encoding: 'utf8', maxBuffer: 40 * 1024 * 1024 });
  if ((typeof result.status === 'number' ? result.status : 1) !== 0) {
    throw new Error(result.stderr || result.stdout || `ffmpeg failed: ${args.join(' ')}`);
  }
}

async function writePosterFromFrame(framePath, outBase) {
  fs.mkdirSync(postersDir, { recursive: true });
  fs.mkdirSync(videosDir, { recursive: true });

  for (const width of [640, 960, 1280]) {
    const webpOut = path.join(videosDir, `${outBase}-${width}.webp`);
    await sharp(framePath, { failOn: 'none' })
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 88, effort: 6, smartSubsample: true })
      .toFile(webpOut);
    console.log(`Wrote ${path.relative(root, webpOut)}`);
  }

  const jpgOut = path.join(videosDir, `${outBase}.jpg`);
  await sharp(framePath, { failOn: 'none' })
    .resize({ width: 960, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 88, mozjpeg: true, progressive: true })
    .toFile(jpgOut);
  console.log(`Wrote ${path.relative(root, jpgOut)}`);

  const placeholderOut = path.join(postersDir, `${outBase}-placeholder.webp`);
  await sharp(framePath, { failOn: 'none' })
    .resize({ width: 48, withoutEnlargement: true })
    .blur(1)
    .webp({ quality: 55, effort: 4 })
    .toFile(placeholderOut);
  console.log(`Wrote ${path.relative(root, placeholderOut)}`);
}

async function fallbackPosters() {
  const fallbacks = [
    { src: 'public/images/hero-apex.jpg', poster: 'apex-hero-poster' },
    { src: 'src/assets/hero/apex-hero-poster.jpg', poster: 'apex-hero-poster' },
  ];
  for (const item of fallbacks) {
    const input = path.join(root, item.src);
    if (!fs.existsSync(input)) continue;
    await writePosterFromFrame(input, item.poster);
    return;
  }
}

async function main() {
  if (!fs.existsSync(videosDir)) {
    console.log('No public/videos directory — skip.');
    return;
  }

  const ffmpeg = findFfmpeg();
  if (!ffmpeg) {
    console.warn('ffmpeg not found — writing still posters only (videos unchanged).');
    await fallbackPosters();
    return;
  }

  const tmpDir = path.join(root, '.tmp-video-opt');
  fs.mkdirSync(tmpDir, { recursive: true });

  for (const target of targets) {
    const input = path.join(videosDir, target.file);
    if (!fs.existsSync(input)) continue;

    const frame = path.join(tmpDir, `${target.poster}.jpg`);
    run(ffmpeg, ['-y', '-ss', '0.4', '-i', input, '-frames:v', '1', '-q:v', '2', frame]);
    await writePosterFromFrame(frame, target.poster);

    const optimized = path.join(tmpDir, target.file);
    run(ffmpeg, [
      '-y',
      '-i',
      input,
      '-c:v',
      'libx264',
      '-preset',
      'slow',
      '-crf',
      '20',
      '-profile:v',
      'high',
      '-pix_fmt',
      'yuv420p',
      '-vf',
      `scale=-2:'min(${target.maxHeight},ih)'`,
      '-an',
      '-movflags',
      '+faststart',
      optimized,
    ]);

    const webmOut = path.join(tmpDir, target.file.replace(/\.mp4$/i, '.webm'));
    run(ffmpeg, [
      '-y',
      '-i',
      input,
      '-c:v',
      'libvpx-vp9',
      '-b:v',
      '0',
      '-crf',
      '32',
      '-row-mt',
      '1',
      '-vf',
      `scale=-2:'min(${target.maxHeight},ih)'`,
      '-an',
      webmOut,
    ]);

    const before = fs.statSync(input).size;
    const after = fs.statSync(optimized).size;
    if (after < before * 0.98) {
      fs.copyFileSync(optimized, input);
      console.log(
        `Optimized ${target.file}: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB`,
      );
    } else {
      console.log(`Kept original ${target.file} (re-encode not smaller).`);
    }

    if (fs.existsSync(webmOut)) {
      const webmDest = path.join(videosDir, target.file.replace(/\.mp4$/i, '.webm'));
      const webmBytes = fs.statSync(webmOut).size;
      const mp4Bytes = fs.statSync(input).size;
      if (webmBytes < mp4Bytes * 0.9) {
        fs.copyFileSync(webmOut, webmDest);
        console.log(`Wrote ${path.relative(root, webmDest)} (${(webmBytes / 1024 / 1024).toFixed(2)}MB)`);
      }
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log('Video optimization complete.');
}

await main();
