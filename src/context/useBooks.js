import { createContext, useContext } from 'react';

const booksContext = createContext(null);

export const BooksProvider = booksContext.Provider;

export const useBooks = () => useContext(booksContext);
