import axios from 'axios';

const bookApi = async id => {
  const response = await axios.get(`/api/books/${id}`);
  return response.data;
};

export default bookApi;
