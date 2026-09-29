import { getCollection } from 'astro:content';
import type { PuntoMapa } from './Marcador';

export async function obtenerPuntos(): Promise<PuntoMapa[]> {
  const [lugares, eventos] = await Promise.all([
    getCollection('lugares'),
    getCollection('eventos'),
  ]);

  const deLugares = lugares.map((l) => ({
    slug: l.id,
    nombre: l.data.nombre,
    lat: l.data.lat,
    lng: l.data.lng,
    tipo: l.data.categoria,
    url: `/lugares/${l.id}`,
  }));


  const deEventos = eventos.flatMap((e) =>
    e.data.lat !== undefined && e.data.lng !== undefined
      ? [
          {
            slug: e.id,
            nombre: e.data.titulo,
            lat: e.data.lat,
            lng: e.data.lng,
            tipo: 'evento' as const,
            url: `/eventos/${e.id}`,
          },
        ]
      : []
  );

  return [...deLugares, ...deEventos];
}