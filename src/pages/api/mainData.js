import axios from 'axios';

export async function fetchMain() {
  try {
    const response = await axios.get('https://admin.safemedsupply.com/api/main');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных из API:', error);
    return null;
  }
}