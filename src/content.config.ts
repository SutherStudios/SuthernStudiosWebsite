import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 7 deprecated the `z` re-export from 'astro:content' — import zod directly.
import { z } from 'zod';

/**
 * Devlog posts — Markdown files in src/content/devlog/.
 *
 * Filename becomes the URL slug: `2026-06-12-layered-biomes.md`
 * → /devlog/2026-06-12-layered-biomes/
 *
 * Frontmatter is validated at build time, so a typo fails the build rather
 * than shipping a broken page.
 */
const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    /** Sentence case, per the brand voice. */
    title: z.string(),
    date: z.coerce.date(),
    /** Build number this post covers, e.g. '1184'. Optional. */
    build: z.string().optional(),
    /** Single topic label — 'World-gen', 'AI', 'Combat', … */
    tag: z.string(),
    /** One or two sentences, used on the index and as the meta description. */
    summary: z.string(),
    /** Left edge bar colour. */
    accent: z.enum(['ember', 'cyan']).default('ember'),
    /** Drafts are excluded from production builds but visible in `npm run dev`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog };
