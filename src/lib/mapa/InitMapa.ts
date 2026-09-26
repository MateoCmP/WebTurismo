import L from 'leaflet';
// @ts-expect-error Leaflet's CSS is handled by the bundler.
import 'leaflet/dist/leaflet.css';
import { puntos } from '../../data/puntos';
import { crearMarcador } from './Marcador';

export function initMap(containerId: string) {
  const map = L.map(containerId).setView(
    [puntos[0].lat, puntos[0].lng],
    14
  );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  puntos.forEach((punto) => crearMarcador(map, punto));

  return map;
}