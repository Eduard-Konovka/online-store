import axios from 'axios';

const productsApi = async () => {
  const response = await axios.get('/api/products');

  return response.data;
};

export default productsApi;
