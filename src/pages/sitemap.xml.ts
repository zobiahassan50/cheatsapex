import type { APIRoute } from 'astro';
import { buildSitemapEntries, renderSitemapXml } from '../config/sitemap';

/** Prerendered each build from pages + Content Collections — no static hand-maintained file. */
export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await buildSitemapEntries();
  const xml = renderSitemapXml(entries);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
