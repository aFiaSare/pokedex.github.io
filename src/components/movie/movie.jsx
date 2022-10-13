import Tarjeta from "./tarjeta.jsx";
import ArregloPokemones from "./arregloPeliculas.js";
import Modal from "../modals/modal";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";

export default function Movie() {
  return (
    <>
      <div className="grid grid-cols-5 w-screen justify-center items-center gap-1 z-0">
        <Modal />
        {ArregloPokemones.map((x, index) => (
          <div key={index}>
            <Tarjeta
              imagen={x.imagen}
              titulo={x.titulo}
              estreno={x.estreno}
              pokemones={x.pokemones}
              url={x.trailer}
            />
          </div>
        ))}
      </div>
    </>
  );
}
