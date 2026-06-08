import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(['fr', 'en']),
      author: z.string().default('FinTech Consulting SA'),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
      /** Mots-clés SEO (meta keywords + renforcement sémantique). */
      keywords: z.array(z.string()).default([]),
      /** FAQ en bas d'article — alimente aussi le schema FAQPage (rich results). */
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { blog };
