import { getLanguage } from 'functions';

export const global = {
  mainHeight: null,
  language: getLanguage(),
  user: JSON.parse(localStorage.getItem('user')) || {},
  books: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};
