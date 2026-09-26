export interface Punto {
lat: number;
lng: number;
nombre: string;
}
// esto despues se cambia para cada punto de interes que se quiera agregar al mapa
export const puntos: Punto[] = [
{ lat: -29.4131, lng: -66.8558, nombre: "Centro" }
];