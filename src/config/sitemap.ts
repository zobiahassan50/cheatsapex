import { getCollection } from 'astro:content';
import { blogPosts, getAllBlogSlugs } from '../data/blog';
import { forumPosts } from '../data/forum';
import { getAllProductSlugs } from '../data/products';
import { NON_DEFAULT_LOCALES } from '../i18n/locales';
import { parseBlogDate } from '../utils/schema';
import { PRODUCT_BASE } from './site';

const SITE = 'https://cheatsapex.com';

export type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

function abs(path: string): string {
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  return new URL(normalized, SITE).href;
}

function withLocales(path: string): string[] {
  const bare = path.endsWith('/') || path === '/' ? path : `${path}/`;
  const paths = [bare];
  for (const locale of NON_DEFAULT_LOCALES) {
    const prefix = locale.pathPrefix; // e.g. /pt
    if (bare === '/') {
      paths.push(`${prefix}/`);
    } else {
      paths.push(`${prefix}${bare}`);
    }
  }
  return paths;
}

function metaFor(path: string, lastmod?: string): Omit<SitemapEntry, 'loc'> {
  const bare = path.replace(/^\/(pt|ru|tr|de|pl|fr|es)(?=\/)/, '') || '/';
  const buildDate = lastmod ?? new Date().toISOString();

  if (bare === '/') {
    return { lastmod: buildDate, changefreq: 'weekly', priority: path === '/' ? 1 : 0.95 };
  }
  if (bare === '/blog/') {
    return { lastmod: buildDate, changefreq: 'weekly', priority: 0.9 };
  }
  if (bare === '/forum/') {
    return { lastmod: buildDate, changefreq: 'daily', priority: 0.8 };
  }
  if (bare.startsWith('/forum/')) {
    return { lastmod: buildDate, changefreq: 'weekly', priority: 0.6 };
  }
  if (bare.startsWith('/blog/')) {
    return { lastmod: buildDate, changefreq: 'monthly', priority: 0.7 };
  }
  if (bare.startsWith('/guides/')) {
    return { lastmod: buildDate, changefreq: 'monthly', priority: 0.65 };
  }
  if (bare.startsWith('/products/')) {
    return { lastmod: buildDate, changefreq: 'weekly', priority: 0.8 };
  }
  if (
    bare === '/about/' ||
    bare === '/support/' ||
    bare === '/privacy/' ||
    bare === '/terms/' ||
    bare === '/faq/'
  ) {
    return { lastmod: buildDate, changefreq: 'yearly', priority: 0.5 };
  }
  return { lastmod: buildDate, changefreq: 'monthly', priority: 0.6 };
}

/**
 * Live sitemap URL set — all active pages, localized mirrors, blog, forum,
 * products, and Content Collection guides. Regenerated every build.
 */
export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const buildDate = new Date().toISOString();
  const entries: SitemapEntry[] = [];
  const seen = new Set<string>();

  const push = (path: string, lastmod?: string, localize = true) => {
    const variants = localize ? withLocales(path) : [path.endsWith('/') ? path : `${path}/`];
    for (const p of variants) {
      const loc = abs(p);
      if (seen.has(loc)) continue;
      seen.add(loc);
      entries.push({ loc, ...metaFor(p, lastmod ?? buildDate) });
    }
  };

  // Core static pages (EN + locale mirrors)
  for (const path of [
    '/',
    '/blog/',
    '/faq/',
    '/support/',
    '/about/',
    '/privacy/',
    '/terms/',
    PRODUCT_BASE,
    `${PRODUCT_BASE}cheat-tools/`,
  ]) {
    push(path, buildDate, true);
  }

  // Forum is EN-only
  push('/forum/', buildDate, false);
  for (const post of forumPosts) {
    push(`/forum/${post.slug}/`, buildDate, false);
  }

  // Blog posts
  for (const post of blogPosts) {
    push(`/blog/${post.slug}/`, parseBlogDate(post.date), true);
  }

  // Product detail pages
  for (const slug of getAllProductSlugs()) {
    push(`${PRODUCT_BASE}${slug}/`, buildDate, true);
  }

  // Content Collection guides (skip drafts + blog-slug redirects that 301 away)
  const blogSlugSet = new Set(getAllBlogSlugs());
  const guides = await getCollection('guides', ({ data }) => !data.draft);
  for (const guide of guides) {
    if (blogSlugSet.has(guide.id)) continue;
    const lastmod = (guide.data.updatedDate ?? guide.data.pubDate).toISOString();
    push(`/guides/${guide.id}/`, lastmod, false);
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc));
  return entries;
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((entry) => {
      const lines = [`  <url>`, `    <loc>${entry.loc}</loc>`];
      if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      if (entry.changefreq) lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      if (entry.priority != null) {
        lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
      }
      lines.push(`  </url>`);
      return lines.join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
