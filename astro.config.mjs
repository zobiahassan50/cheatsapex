import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { PATH_REDIRECTS } from './scripts/redirects.mjs';
import { accordionRafPlugin } from './scripts/vite-accordion-raf.mjs';

/**
 * Prefer slash-suffixed sources to match trailingSlash: 'always' + Cloudflare
 * force-trailing-slash. PATH_REDIRECTS already stores single-hop finals (both
 * slash variants as keys → same destination) so Astro never chains hops.
 */
const astroRedirects = Object.fromEntries(
  [...PATH_REDIRECTS.entries()].filter(([from]) => from.endsWith('/') || from === '/'),
);

export default defineConfig({
  // Production origin for sitemap/canonicals — not pages.dev preview host.
  site: 'https://cheatsapex.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'ru', 'tr', 'de', 'pl', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: astroRedirects,
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [accordionRafPlugin(), tailwindcss()],
    esbuild: {
      drop: ['console', 'debugger'],
      legalComments: 'none',
    },
    build: {
      cssMinify: true,
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/embla-carousel')) return 'embla';
            return undefined;
          },
        },
      },
    },
  },
  build: {
    // Keep CSS external so post-build defer-css can preload/async-swap.
    // Above-the-fold rules live in critical.css (inlined in BaseLayout).
    inlineStylesheets: 'never',
  },
});
