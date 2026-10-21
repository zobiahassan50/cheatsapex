import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs (Levo Apex affiliate).
 * Buy now / Try now buttons use these directly (same tab).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages (legacy + _redirects). */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  apex: 'apex',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Checkout href for Buy now / Try now — Levo Apex URL. */
export function checkoutPath(product: CheckoutProduct = 'apex'): string {
  return CHECKOUT[product];
}

/** Default product checkout (navbar Try Now, primary CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('apex');

/** Map internal product slugs to checkout URLs. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ban-appeal':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    case 'apex-elite':
    default:
      return checkoutPath('apex');
  }
}

/** Resolve blog CTA or legacy href values to the Levo checkout URL. */
export function resolveCheckoutHref(href: string): string {
  if (href.startsWith('/go/')) {
    const slug = href.replace(/^\/go\//, '').replace(/\/$/, '').split('?')[0] ?? 'apex';
    const product = CHECKOUT_SLUG_TO_PRODUCT[slug];
    return product ? checkoutPath(product) : checkoutPath('apex');
  }

  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  // Legacy / encoded product paths → Levo checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('apex');
  }
  if (
    href.includes('%2Fproducts%2Fskin-changer') ||
    href.includes('/products/skin-changer')
  ) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (
    href.includes('%2Fproducts%2Fapex-legends-cheats') ||
    href.includes('/products/apex-legends-cheats') ||
    href.includes('%2Fproducts%2Fapex') ||
    href.includes('/products/apex') ||
    href.includes('levocheats.com') ||
    href.includes('zadeyo.com')
  ) {
    return checkoutPath('apex');
  }

  return href;
}
