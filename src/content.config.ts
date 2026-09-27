import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    lugar: z.string(),
    categoria: z.enum(['cultural', 'gastronomico', 'aventura', 'deportivo']),
    imagen: z.string(),
    precio: z.string().optional(),
  }),
});

export const collections = { eventos };