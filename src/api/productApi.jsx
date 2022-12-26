import axios from 'axios';

const productApi = id => {
  return axios.get(`/api/products/${id}`).then(response => response.data);
};

export default productApi;
