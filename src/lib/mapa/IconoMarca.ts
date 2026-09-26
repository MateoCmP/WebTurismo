import L from 'leaflet';

export const customIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div class="marker-inner"></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});