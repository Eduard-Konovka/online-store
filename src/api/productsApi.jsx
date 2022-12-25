import axios from 'axios';

const productsApi = () => {
  return axios.get('/api/products').then(response => response.data);
};

export default productsApi;
