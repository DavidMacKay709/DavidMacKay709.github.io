import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// `featured` is the item's position on the home page (1 = first). Leave it out to keep
// the item off the home page. `order` sets the position on its own list page.

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      org: z.string(),
      period: z.string(),
      cover: image().optional(),
      // Shown whole (never cropped) on the project's card only, e.g. a logo or a licensed figure.
      preview: image().optional(),
      // Shown in a row at the top of the project's page.
      logos: z.array(z.object({ src: image(), alt: z.string() })).optional(),
      featured: z.number().optional(),
      order: z.number(),
    }),
});

// Each expedition is a folder: src/content/expeditions/<name>/index.md plus its photos.
const expeditions = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/expeditions',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      when: z.string(),
      // Filename (without .kml) of the trip's route in routes/, drawn on the map.
      route: z.string().optional(),
      cover: image().optional(),
      featured: z.number().optional(),
      order: z.number(),
    }),
});

// Optional trip log: src/content/expeditions/<name>/log/*.md, each with a date and its photos.
const tripLog = defineCollection({
  loader: glob({
    pattern: '*/log/*.md',
    base: './src/content/expeditions',
    generateId: ({ entry }) => entry.replace('/log/', '/').replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      photos: z.array(image()).default([]),
    }),
});

export const collections = { projects, expeditions, tripLog };
