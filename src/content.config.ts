import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lugares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lugares' }),
  schema: z.object({
    nombre: z.string(),
    lat: z.number(),
    lng: z.number(),
    categoria: z.enum(['historico', 'natural', 'gastronomico']),
    imagen: z.string().optional(),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    nombre: z.string(),
    lat: z.number(),
    lng: z.number(),
    fecha: z.date(),
    imagen: z.string().optional(),
  }),
});

export const collections = { lugares, eventos };