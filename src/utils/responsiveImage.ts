const RASTER_EXT = /\.(png|jpe?g|webp)$/i;

/** 400w covers ~330px card slots at 1x; 640w covers 2x retina. */
export const CARD_IMAGE_WIDTHS = [400, 640] as const;
export const CARD_IMAGE_SIZES = '(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw';
/** Hero slider ~490–640px CSS; include 960 for retina and sharp fallbacks. */
export const HERO_IMAGE_WIDTHS = [640, 960] as const;
export const HERO_IMAGE_SIZES = '(min-width: 1024px) 560px, (min-width: 640px) 70vw, 100vw';
/** Thumbs ~148px CSS; 320w covers 2x DPR without pulling 640/960. */
export const THUMB_IMAGE_WIDTHS = [320, 400] as const;
/** Product / blog main images — prefer 960 as default src for clarity. */
export const DEFAULT_IMAGE_WIDTHS = [640, 960] as const;
/** Showcase panel ~352px CSS (22rem); cap 560 so combat AVIF matches display (~560×315). */
export const SHOWCASE_IMAGE_WIDTHS = [320, 400, 560] as const;
export const SHOWCASE_IMAGE_SIZES = '(min-width: 768px) 352px, calc(100vw - 2.5rem)';

export function stripRasterExt(src: string): string {
  return src.replace(RASTER_EXT, '');
}

export function webpSrc(src: string, width: number): string {
  return `${stripRasterExt(src)}-${width}.webp`;
}

export function avifSrc(src: string, width: number): string {
  return `${stripRasterExt(src)}-${width}.avif`;
}

export function responsiveSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
  format: 'webp' | 'avif' = 'webp',
): string {
  const toSrc = format === 'avif' ? avifSrc : webpSrc;
  return widths.map((width) => `${toSrc(src, width)} ${width}w`).join(', ');
}

export function responsiveAvifSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
): string {
  return responsiveSrcSet(src, widths, 'avif');
}

/**
 * Default img src: mid-tier width (not the max) so fallback clients avoid oversized files.
 * Browsers with srcset still select the best candidate from the full list.
 */
export function defaultWebpSrc(src: string, widths: readonly number[]): string {
  if (!widths.length) return webpSrc(src, 640);
  const mid = widths[Math.min(widths.length - 1, Math.floor(widths.length / 2))] ?? 640;
  return webpSrc(src, mid);
}
