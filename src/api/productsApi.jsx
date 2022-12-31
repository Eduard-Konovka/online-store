// import axios from 'axios';

// const productsApi = async () => {
//   const response = await axios.get('/api/products');

//   return response.data;
// };

// export default productsApi;

import { db } from 'db/books.js';

const productsApi = async () => {
  return await db.books;
};

export default productsApi;
