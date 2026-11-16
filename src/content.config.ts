import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    slugKey: z.string().regex(/^[a-z][a-z-]*$/),
    lang: z.enum(['en', 'hi']),
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['person', 'text', 'idea', 'context']),
    period: z.enum(['early', 'classical', 'medieval', 'modern']),
    people: z.array(z.string()),
    topics: z.array(z.enum(['geometry', 'arithmetic', 'algebra', 'astronomy', 'analysis', 'combinatorics', 'transmission', 'historiography'])),
    texts: z.array(z.string()),
    related: z.array(z.string()).min(2),
    lastRevised: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    sources: z.array(z.object({
      id: z.string(), author: z.string(), title: z.string(), url: z.url(),
      locator: z.string(), kind: z.enum(['primary', 'research', 'reference']),
    })).min(1),
  }),
});

export const collections = { articles };
