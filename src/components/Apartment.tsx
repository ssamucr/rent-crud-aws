export interface Apartment {
  id: string;
  nombre_ph: string;
  ubicacion: string;
  apto_num: string;
  mensualidad: number;
  tiempo_mes: number;
  amueblado: boolean;
  habitaciones_num: number;
  metraje: number;
  cedula_arrendador: string;
}

/*
{
    "id": "1",
    "nombre_ph": "P.H. Metropolitan Park",
    "ubicacion": "Via España, Carrasquilla",
    "apto_num": "1703",
    "mensualidad": 1000,
    "tiempo_mes": 12,
    "amueblado": true,
    "habitaciones_num": 2,
    "metraje": 81,
    "cedula_arrendador": "8-977-779"
}
*/