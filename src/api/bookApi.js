import axios from 'axios';

export default async function bookApi(id) {
  const response = await axios.get(`/api/books/${id}`);

  return response.data;
}
