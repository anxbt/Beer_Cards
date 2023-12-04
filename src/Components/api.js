// api.js
import axios from 'axios';

const fetchBeers = async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchBeers };
