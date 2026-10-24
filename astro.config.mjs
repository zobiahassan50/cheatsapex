import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
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

/** Production: https://cheatsapex.com. Preview: set PUBLIC_SITE_URL / SITE to the *.pages.dev URL. */
const site = (process.env.PUBLIC_SITE_URL || process.env.SITE || 'https://cheatsapex.com').replace(
  /\/+$/,
  '',
);

export default defineConfig({
  site,
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
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
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
      // Don't hoist route JS into <head>. Those modulepreload links were
      // competing with the LCP image on the critical path.
      modulePreload: false,
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
