import { createContext, useContext, } from "react";
import useUserReducer from "./user";

const ContextUser = createContext(undefined);

export const ContextProvider = ({ children }) => {

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
      <ContextUser.Provider value={useUserReducer()}>
        {children}
      </ContextUser.Provider>
  );
};

export const useUser = () => useContext(ContextUser);