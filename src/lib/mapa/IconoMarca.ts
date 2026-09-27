import L from 'leaflet';

const colores = {
  historico: '#8d5524',
  natural: '#2a9d8f',
  gastronomico: '#e76f51',
  evento: '#e63946',
} as const;

export type TipoMarcador = keyof typeof colores;

export function crearIcono(tipo: TipoMarcador) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-inner" style="background:${colores[tipo]}"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}