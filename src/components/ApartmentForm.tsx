import React, { useState } from 'react';
import { Apartment } from './Apartment';
import { createApartment } from '../services/api';

const ApartmentForm: React.FC = () => {
  const [apartment, setApartment] = useState<Apartment>({
    id: '',
    nombre_ph: '',
    ubicacion: '',
    apto_num: '',
    mensualidad: 0,
    tiempo_mes: 0,
    amueblado: false,
    habitaciones_num: 0,
    metraje: 0,
    cedula_arrendador: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApartment({
      ...apartment,
      [name]: name === 'amueblado' ? value === 'true' : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createApartment(apartment);
      alert('Apartamento guardado con éxito');
      window.location.reload();
    } catch (error) {
      console.error('Error al guardar el apartamento', error);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Crear / modificar apartamento</h2>
      <label>ID:</label>
      <input type="text" name="id" value={apartment.id} onChange={handleChange} />
      <label>Nombre PH:</label>
      <input type="text" name="nombre_ph" value={apartment.nombre_ph} onChange={handleChange} />
      <label>Ubicación:</label>
      <input type="text" name="ubicacion" value={apartment.ubicacion} onChange={handleChange} />
      <label>Número de apartamento:</label>
      <input type="text" name="apto_num" value={apartment.apto_num} onChange={handleChange} />
      <label>Mensualidad:</label>
      <input type="number" name="mensualidad" value={apartment.mensualidad} onChange={handleChange} />
      <label>Tiempo (meses):</label>
      <input type="number" name="tiempo_mes" value={apartment.tiempo_mes} onChange={handleChange} />
      <label>Amueblado:</label>
      <select name="amueblado" value={String(apartment.amueblado)} onChange={handleChange}>
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      <label>Número de habitaciones:</label>
      <input type="number" name="habitaciones_num" value={apartment.habitaciones_num} onChange={handleChange} />
      <label>Metraje (m²):</label>
      <input type="number" name="metraje" value={apartment.metraje} onChange={handleChange} />
      <label>Cédula del arrendador:</label>
      <input type="text" name="cedula_arrendador" value={apartment.cedula_arrendador} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ApartmentForm;