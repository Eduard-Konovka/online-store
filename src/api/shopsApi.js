import axios from 'axios';

const shopsApi = async () => {
  const response = await axios.get('/api/shops');

  return response.data;
};

export default shopsApi;
