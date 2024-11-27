import axios from 'axios';

const API_URL = 'https://api.exemplo.com';

export const fetchEquipment = async () => {
  try {
    const response = await axios.get(`${API_URL}/equipment`);
    return response.data;
  } catch (error) {
    console.error("Error fetching equipment", error);
    return [];
  }
};
