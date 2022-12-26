import axios from 'axios';

const shopsApi = () => {
  return axios.get('/api/shops').then(response => response.data);
};

export default shopsApi;
