import axios from 'axios';

const api_key = '53508808-db25438414f7039efcc38d51b';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error in getImagesByQuery:', error);
      throw error;
    });
}