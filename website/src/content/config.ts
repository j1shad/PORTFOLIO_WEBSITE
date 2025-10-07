import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Jason Acquah'),
    image: z.string().optional(),
    category: z.enum(['Data Engineering', 'Machine Learning', 'Analytics', 'Tutorial']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
