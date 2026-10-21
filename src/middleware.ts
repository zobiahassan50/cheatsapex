import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { DEFAULT_LOCALE, getLocaleFromPathname } from './i18n';

export const onRequest = defineMiddleware((context, next) => {
  const pathname = new URL(context.request.url).pathname;
  const destination = resolveCheckoutPathRedirect(pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  context.locals.locale = getLocaleFromPathname(pathname) || DEFAULT_LOCALE;
  return next();
});
