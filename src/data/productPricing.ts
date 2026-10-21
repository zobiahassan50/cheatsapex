export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

/** Levo Apex catalog: 1 Week $15 · 1 Month $35 · Lifetime $150 */
const apexPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / month' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

const hwidPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / month' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

const ugcPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / month' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'hwid-spoofer') return hwidPlans;
  if (productSlug === 'ugc' || productSlug === 'ban-appeal') return ugcPlans;
  return apexPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

/** Plan query is UI-only; Levo checkout already includes `?to=` — append with `&`. */
export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  // Keep the exact Levo buy URL without appending plan params that could break affiliate routing.
  return baseUrl;
}
