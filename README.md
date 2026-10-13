# Gestión de Apartamentos — CRUD en React sobre AWS

Aplicación web para **administrar apartamentos en alquiler**: permite registrarlos, consultarlos, modificarlos y
eliminarlos. Es el frontend de un proyecto de la materia *Tópicos Especiales* (Universidad Tecnológica de Panamá),
cuya arquitectura se montó en **AWS**: el frontend consume una API REST publicada con Amazon API Gateway.

## Qué hace

- **Crear y modificar apartamentos** desde un formulario: P.H., ubicación, número de apartamento, mensualidad,
  tiempo de contrato (meses), si está amueblado, habitaciones, metraje y cédula del arrendador.
  Se envía con un `PUT` a la API.
- **Listar los apartamentos** registrados y **filtrarlos por ID** (vacío muestra todos).
- **Eliminar** un apartamento.

## Tecnologías

- [React](https://react.dev) 18 + [TypeScript](https://www.typescriptlang.org), con [Vite](https://vitejs.dev)
- [Axios](https://axios-http.com) para llamar a la API
- [React-Bootstrap](https://react-bootstrap.netlify.app) / Bootstrap 5 para los estilos
- Backend: API REST en AWS (API Gateway)

## Cómo se conecta a la API

El cliente HTTP está en `src/services/api.ts`. Estas son las rutas que consume:

| Método | Ruta | Acción |
| --- | --- | --- |
| `GET` | `/rents` | Listar todos los apartamentos |
| `GET` | `/rents/{id}` | Obtener un apartamento |
| `PUT` | `/rents` | Crear o actualizar un apartamento |
| `DELETE` | `/rents/{id}` | Eliminar un apartamento |

Cada apartamento tiene esta forma:

```json
{
  "id": "1",
  "nombre_ph": "P.H. Ejemplo",
  "ubicacion": "Ciudad de Panamá",
  "apto_num": "1703",
  "mensualidad": 1000,
  "tiempo_mes": 12,
  "amueblado": true,
  "habitaciones_num": 2,
  "metraje": 81,
  "cedula_arrendador": "0-000-000"
}
```

> La URL de la API (`API_URL` en `src/services/api.ts`) apunta al backend del curso en AWS, que puede no
> estar activo. Para usar tu propio backend, cambia esa constante.

## Ejecutar en local

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila (TypeScript + Vite) a `dist/` |
| `npm run lint` | Revisa el código con ESLint |
| `npm run preview` | Sirve la compilación para probarla |

## Estructura

```
src/
├── components/
│   ├── Apartment.tsx        Tipo del apartamento
│   ├── ApartmentForm.tsx    Formulario de crear / modificar
│   └── ApartmentList.tsx    Listado, filtro por ID y acción de eliminar
├── services/api.ts          Cliente Axios y funciones de la API
├── App.tsx                  Pantalla principal
└── main.tsx                 Punto de entrada
```
