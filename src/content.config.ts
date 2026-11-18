import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Jekyll frontmatter used '' for "no value"; treat empty strings as missing.
const optionalUrl = z
  .string()
  .optional()
  .transform((v) => (v && v.trim() !== '' ? v.trim() : undefined));

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['books', 'manuscripts', 'conferences', 'reports']),
    // Kept from the Jekyll site so old URLs keep working.
    permalink: z.string().regex(/^\/publication\/[\w-]+$/),
    date: z.coerce.date(),
    venue: z.string(),
    paperurl: optionalUrl,
    bibtexurl: optionalUrl,
    slidesurl: optionalUrl,
    citation: z.string(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    type: z.string().default('Talk'),
    permalink: z.string().regex(/^\/talks\/[\w-]+$/),
    venue: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    // [latitude, longitude] of the location, used by the talks map.
    coordinates: z.tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)]),
    slidesurl: optionalUrl,
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    permalink: z.string().optional(),
    venue: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
  }),
});

export const collections = { publications, talks, teaching };
