import type { ImageMetadata } from 'astro';

/**
 * Local raster sources under src/assets/images — keyed by public path
 * (/images/blog/foo.png) so data files keep stable string refs.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const byPublicPath = new Map<string, ImageMetadata>();

for (const [modulePath, mod] of Object.entries(modules)) {
  const normalized = modulePath.replace(/\\/g, '/');
  const marker = '/assets/images/';
  const idx = normalized.lastIndexOf(marker);
  if (idx === -1) continue;
  const rel = normalized.slice(idx + marker.length);
  byPublicPath.set(`/images/${rel}`, mod.default);
}

export function resolveLocalImage(src: string): ImageMetadata | undefined {
  if (!src) return undefined;
  const bare = src.split('?')[0] ?? src;
  return byPublicPath.get(bare);
}

export function hasLocalImage(src: string): boolean {
  return Boolean(resolveLocalImage(src));
}
