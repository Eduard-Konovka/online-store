import axios from 'axios';

const booksApi = async () => {
  const response = await axios.get('/api/books');

  return response.data;
};

export default booksApi;
