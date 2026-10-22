import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Programmatic SEO guides (Markdown) with silo frontmatter.
 * Live product blog remains in src/data/blog; matching slugs 301 → /blog/{slug}/.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: z.string().optional(),
      type: z.enum(['pillar', 'cluster']),
      parentPillar: z.string().optional(),
      relatedKeywords: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
    .superRefine((data, ctx) => {
      if (data.type === 'cluster' && !data.parentPillar) {
        ctx.addIssue({
          code: 'custom',
          message: 'cluster guides require parentPillar',
          path: ['parentPillar'],
        });
      }
    }),
});

export const collections = { guides };
