import { useContext } from "react";
import RequestPokes from "../components/pokedex/RequestPokes";
import { StoreContext } from "./StoreContext";
import types from "./types";

export const CustomDispatch = (action) => {
  const { store, dispatch } = useContext(StoreContext);

  switch (action) {
    case "asd":
      RequestPokes(1).then((res) => {
        console.log("ress", res);
      });
      break;

    default:
      break;
  }

  return;
};
