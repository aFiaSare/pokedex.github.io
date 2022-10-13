import { InitialValue } from "./initialValue";
import { storeReducer } from "./storeReducer";
import { useReducer, useCallback } from "react";
import { StoreContext } from "./StoreContext";
import RequestPokes from "../components/pokedex/RequestPokes";
import types from "./types";

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, InitialValue);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
