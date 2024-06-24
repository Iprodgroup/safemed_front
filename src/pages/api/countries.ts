import axios from 'axios';

export async function fetchCountries() {
  try {
    const response = await axios.get('https://admin.safemedsupply.com/api/countries');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных из API:', error);
    return null;
  }
}