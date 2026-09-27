import { defineCollection, z } from 'astro:content';

const lugares = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    lat: z.number(),
    lng: z.number(),
    categoria: z.enum(['historico', 'natural', 'gastronomico']),
    imagen: z.string().optional(),
  }),
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    lat: z.number(),
    lng: z.number(),
    fecha: z.date(),
    imagen: z.string().optional(),
  }),
});

export const collections = { lugares, eventos };