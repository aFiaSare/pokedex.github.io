import { InitialValue } from "./InitialValue";
import { storeReducer } from "./storeReducer";
import { useReducer } from "react";
import { StoreContext } from "./StoreContext";

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, InitialValue);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
