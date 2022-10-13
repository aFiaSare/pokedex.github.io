import React from "react";
import { Poke } from "./pokedex/poke.jsx";
import StoreProvider from "../context/StoreProvider.jsx";
import { CustomDispatch } from "../context/CustomDispatch.jsx";
import { ModalInfo } from "./pokedex/ModalInfo.jsx";

const Comp = () => {
  return (
    <StoreProvider>
      <div className="bg-cover bg-img-fondo h-screen w-screen">
        <CustomDispatch />
        <Poke />
        <ModalInfo />
      </div>
    </StoreProvider>
  );
};

export default Comp;
