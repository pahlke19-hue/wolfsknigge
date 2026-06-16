import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    heroAlt: z.string().default(""),
    category: z.string().default("Tipps & Tricks"),
    readingTime: z.string().optional(),
    author: z.string().default("René Pahlke"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
