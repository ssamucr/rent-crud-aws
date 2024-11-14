import React, { useEffect, useState } from 'react';
import { Apartment } from './Apartment';
import { getAllApartments, deleteApartment, getApartmentById } from '../services/api';

const ApartmentList: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  const [index, setIndex] = useState("");

  const fetchApartments = async () => {
    try {
      const response = await getAllApartments();
      setApartments(response.data);
    } catch (error) {
      console.error("Error al obtener los apartamentos", error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteApartment(id);
      setApartments(apartments.filter((apartment) => apartment.id !== id));
    } catch (error) {
      console.error("Error al eliminar el apartamento", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.target;
    setIndex(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (index == "") {
        setSelectedApartment(null)
        return
      }
      const response = await getApartmentById(index);
      setSelectedApartment(response.data);
    } catch (error) {
      console.error("Error al buscar el apartamento", error);
    }
  };

  return (
    <>
      <div className="contenedor-listado">
        <h2 className="main-title">Listado de Apartamentos</h2>
        <div className="listado">
          <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input type="text" name="id" value={index} onChange={handleChange} placeholder='Todos' />
          <button type="submit">Buscar</button>
          </form>

          <div className="lista">
            {selectedApartment && (
              <div className="listado-apartamento">
                <h3>{selectedApartment.id} : {selectedApartment.nombre_ph}</h3>
                <p><strong>Ubicación:</strong> {selectedApartment.ubicacion}</p>
                <p><strong>Número de Apartamento:</strong> {selectedApartment.apto_num}</p>
                <p><strong>Mensualidad:</strong> ${selectedApartment.mensualidad}</p>
                <p><strong>Contrato (meses):</strong> {selectedApartment.tiempo_mes}</p>
                <p><strong>Amueblado:</strong> {selectedApartment.amueblado ? "Sí" : "No"}</p>
                <p><strong>Número de habitaciones:</strong> {selectedApartment.habitaciones_num}</p>
                <p><strong>Metraje (m²):</strong> {selectedApartment.metraje} m²</p>
                <p><strong>Cédula del arrendador:</strong> {selectedApartment.cedula_arrendador}</p>
                <button className="listado-borrar" onClick={() => handleDelete(selectedApartment.id)}>Eliminar</button>
              </div>
            )}
            
            {!selectedApartment && apartments.map((apartment) => (
              <div key={apartment.id} className="listado-apartamento">
                <h3><strong>{apartment.id}</strong> : {apartment.nombre_ph}</h3>
                <p><strong>Ubicación:</strong> {apartment.ubicacion}</p>
                <p><strong>Número de Apartamento:</strong> {apartment.apto_num}</p>
                <p><strong>Mensualidad:</strong> ${apartment.mensualidad}</p>
                <p><strong>Contrato (meses):</strong> {apartment.tiempo_mes}</p>
                <p><strong>Amueblado:</strong> {apartment.amueblado ? "Sí" : "No"}</p>
                <p><strong>Número de habitaciones:</strong> {apartment.habitaciones_num}</p>
                <p><strong>Metraje (m²):</strong> {apartment.metraje} m²</p>
                <p><strong>Cédula del arrendador:</strong> {apartment.cedula_arrendador}</p>
                <button className="listado-borrar" onClick={() => handleDelete(apartment.id)}>Eliminar</button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ApartmentList;