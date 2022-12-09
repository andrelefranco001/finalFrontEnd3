import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <div>
    hola
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
    </div>
  );
};
