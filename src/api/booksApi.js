import axios from 'axios';

export default async function booksApi() {
  const response = await axios.get('/api/books');

  return response.data;
}
