import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { crearMarcador, type PuntoMapa } from './Marcador';

export function initMap(containerId: string, puntos: PuntoMapa[]) {
  const centro = puntos[0] ?? { lat: -29.4131, lng: -66.8558 };
  const map = L.map(containerId).setView([centro.lat, centro.lng], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  puntos.forEach((punto) => crearMarcador(map, punto));

  return map;
}