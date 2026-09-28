import L from 'leaflet';
import { crearIcono, type TipoMarcador } from './IconoMarca';

export interface PuntoMapa {
  slug: string;
  nombre: string;
  lat: number;
  lng: number;
  tipo: TipoMarcador;
  url: string;
}

export function crearMarcador(map: L.Map, punto: PuntoMapa): L.Marker {
  const icono = crearIcono(punto.tipo);

  return L.marker([punto.lat, punto.lng], { icon: icono })
    .addTo(map)
    .bindPopup(`<a href="${punto.url}">${punto.nombre}</a>`);
}