import L from 'leaflet';
import { customIcon } from './IconoMarca';
import type { Punto } from '../../data/puntos';

export function crearMarcador(map: L.Map, punto: Punto): L.Marker {
  return L.marker([punto.lat, punto.lng], { icon: customIcon })
    .addTo(map)
    .bindPopup(punto.nombre);
}