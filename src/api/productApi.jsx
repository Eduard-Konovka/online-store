import axios from 'axios';

const productApi = async id => {
  const response = await axios.get(`/api/products/${id}`);

  return response.data;
};

export default productApi;
