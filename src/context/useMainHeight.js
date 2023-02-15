import { createContext, useContext } from 'react';

const mainHeightContext = createContext(null);

export const MainHeightProvider = mainHeightContext.Provider;

export const useMainHeight = () => useContext(mainHeightContext);
