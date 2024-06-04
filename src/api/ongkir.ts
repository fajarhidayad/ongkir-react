import axios from 'axios';

const BASE_URL = import.meta.env.VITE_RAJA_ONGKIR_URL_API;

if (!BASE_URL) throw new Error('RAJA_ONGKIR_URL is empty');

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface City {
  city_id: string;
  city_name: string;
  postal_code: string;
  province: string;
  province_id: string;
  type: string;
}

export type Courier = 'jne' | 'pos' | 'tiki';

export async function getCities() {
  try {
    const cities = await api.get('/city');

    return cities.data.cities.rajaongkir.results as City[];
  } catch (error) {
    throw new Error('Something wen wrong: ' + error);
  }
}

export async function checkCost(body: {
  weight: number;
  destination: string;
  origin: string;
  courier: Courier;
}) {
  try {
    const cost = await api.post('/cost', body);

    return cost.data;
  } catch (error) {
    throw new Error('Something wen wrong: ' + error);
  }
}
