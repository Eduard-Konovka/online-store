export const global = {
  mainHeight: null,
  language: null,
  user: JSON.parse(localStorage.getItem('user')) || {},
  books: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};
