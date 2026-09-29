import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lugares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lugares' }),
  schema: ({ image }) => z.object({
    nombre: z.string(),
    ubicacion: z.string(),
    lat: z.number(),
    lng: z.number(),
    categoria: z.enum(['historico', 'natural', 'gastronomico']),
    imagen: image(),
    horario: z.string().optional(),
    duracion: z.string().optional(),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    lugar: z.string(),
    lat: z.number().optional(),
    lng: z.number() .optional(),
    categoria: z.enum(['cultural', 'gastronomico', 'aventura', 'deportivo']),
    imagen: image(),
    precio: z.string().optional(),
    horario: z.string().optional(),
    duracion: z.string().optional(),
  })
   .refine((d) => (d.lat === undefined) === (d.lng === undefined), {
        message: 'lat y lng deben ir juntas o ninguna',
      }),
});

export const collections = { lugares, eventos };