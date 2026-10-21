import sharp from 'sharp';
import fs from 'fs';

const src = 'public/images/hero-apex.jpg';
// Blue ESP hexagon overlay from the hero shot (cheat UI visible)
const region = { left: 200, top: 255, width: 290, height: 290 };

const master = await sharp(src)
  .extract(region)
  .resize(512, 512, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 1.05, saturation: 1.15 })
  .sharpen()
  .png()
  .toBuffer();

const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-48.png', 48],
  ['favicon-192.png', 192],
  ['favicon-512.png', 512],
  ['apple-touch-icon.png', 180],
];

for (const [name, size] of sizes) {
  await sharp(master).resize(size, size).png().toFile(`public/${name}`);
  console.log('wrote', name);
}

await sharp(master).toFile('public/images/favicon-source.png');
console.log('wrote favicon-source.png');

const icoSizes = [16, 32, 48];
const pngs = [];
for (const s of icoSizes) {
  pngs.push(await sharp(master).resize(s, s).png().toBuffer());
}

function createIco(pngBuffers, sizesList) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirSize = 16 * count;
  let offset = headerSize + dirSize;
  const dirs = [];
  for (let i = 0; i < count; i++) {
    const buf = pngBuffers[i];
    const size = sizesList[i];
    dirs.push({
      width: size >= 256 ? 0 : size,
      height: size >= 256 ? 0 : size,
      size: buf.length,
      offset,
    });
    offset += buf.length;
  }
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let pos = 6;
  for (const d of dirs) {
    out.writeUInt8(d.width, pos);
    out.writeUInt8(d.height, pos + 1);
    out.writeUInt8(0, pos + 2);
    out.writeUInt8(0, pos + 3);
    out.writeUInt16LE(1, pos + 4);
    out.writeUInt16LE(32, pos + 6);
    out.writeUInt32LE(d.size, pos + 8);
    out.writeUInt32LE(d.offset, pos + 12);
    pos += 16;
  }
  for (let i = 0; i < count; i++) {
    pngBuffers[i].copy(out, dirs[i].offset);
  }
  return out;
}

fs.writeFileSync('public/favicon.ico', createIco(pngs, icoSizes));
console.log('wrote favicon.ico');

// Crisp SVG twin of the blue ESP hex for modern browsers
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5eb8ff"/>
      <stop offset="100%" stop-color="#2d6ee2"/>
    </linearGradient>
    <pattern id="scan" width="64" height="4" patternUnits="userSpaceOnUse">
      <rect width="64" height="2" fill="rgba(0,40,80,0.35)"/>
    </pattern>
  </defs>
  <rect width="64" height="64" rx="12" fill="#0b1220"/>
  <polygon points="32,6 56,20 56,44 32,58 8,44 8,20" fill="url(#g)" opacity="0.92"/>
  <polygon points="32,6 56,20 56,44 32,58 8,44 8,20" fill="url(#scan)"/>
</svg>
`;
fs.writeFileSync('public/favicon.svg', svg);
console.log('wrote favicon.svg');

// Cleanup preview temps
for (const f of fs.readdirSync('public')) {
  if (f.startsWith('_fav-preview-')) fs.unlinkSync(`public/${f}`);
}
console.log('cleaned previews');
