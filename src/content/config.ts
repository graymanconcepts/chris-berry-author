import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
    thumbnail: z.string(),
  }),
});

const bookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    publishDate: z.date(),
    isbn: z.string(),
    genre: z.array(z.string()),
    buyLinks: z.array(z.object({
      store: z.string(),
      url: z.string(),
    })),
  }),
});

export const collections = {
  blog: blogCollection,
  books: bookCollection,
};