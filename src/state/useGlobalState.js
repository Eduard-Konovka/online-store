import { createContext, useContext } from 'react';
import { globalState } from './globalState';

const globalStateContext = createContext(globalState);
const changeGlobalStateContext = createContext(null);

export const GlobalStateProvider = globalStateContext.Provider;
export const ChangeGlobalStateProvider = changeGlobalStateContext.Provider;

export const useGlobalState = reduser =>
  useContext(globalStateContext)[reduser];
export const useChangeGlobalState = () => useContext(changeGlobalStateContext);
