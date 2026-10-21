/** Checkout destinations keyed by internal product id (no affiliate codes). */
const LEVO_APEX_CHECKOUT = 'https://levocheats.com/go/ZOBIA?to=%2Fapex-cheats';

export const CHECKOUT_URLS = {
  apex: LEVO_APEX_CHECKOUT,
  skinChanger: LEVO_APEX_CHECKOUT,
  hwidSpoofer: LEVO_APEX_CHECKOUT,
  ugc: LEVO_APEX_CHECKOUT,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/apex', CHECKOUT_URLS.apex],
  ['/go/apex/', CHECKOUT_URLS.apex],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
