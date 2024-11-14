import axios from 'axios';
import { Apartment } from '../components/Apartment';

const API_URL = 'https://y59bllp9w5.execute-api.us-east-2.amazonaws.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const getAllApartments = () => api.get('/rents');
export const getApartmentById = (id: string) => api.get(`/rents/${id}`);
export const createApartment = (apartment: Apartment) => api.put('/rents', apartment);
export const deleteApartment = (id: string) => api.delete(`/rents/${id}`);