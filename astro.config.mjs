import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { PATH_REDIRECTS } from './scripts/redirects.mjs';

/** Astro only needs slash-suffixed keys; PATH_REDIRECTS already stores finals. */
const astroRedirects = Object.fromEntries(
  [...PATH_REDIRECTS.entries()].filter(([from]) => from.endsWith('/') || from === '/'),
);

export default defineConfig({
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
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
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
    // 'always' inlined ~500KB CSS into HTML (document latency). External CSS caches + minifies.
    inlineStylesheets: 'auto',
  },
});
