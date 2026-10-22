import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    org: z.string(),
    period: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Lower numbers are listed first.
    order: z.number(),
  }),
});

export const collections = { projects };
