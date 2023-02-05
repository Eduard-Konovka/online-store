import { createContext, useContext } from 'react';

const cartContext = createContext(null);

export const CartProvider = cartContext.Provider;

export const useCart = () => useContext(cartContext);
