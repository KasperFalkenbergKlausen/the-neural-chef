import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/recipes" }),
  schema: ({ image }) => z.object({
    lang: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featuredImage: image(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    recommendedGear: z.array(z.string()).optional(),
    modelAuthor: z.string().optional(),
  }),
});

export const collections = { recipes };
