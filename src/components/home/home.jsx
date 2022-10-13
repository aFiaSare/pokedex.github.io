import React from "react";
import Fondo from "../../assets/imagenes/ImagenHome.jpg";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <div className="flex items-center justify-center w-160 basis-3/6">
          <img src={Fondo} className="" />
        </div>
        <div className="flex justify-center items-center basis-3/6">
          <p className="flex items-center justify-center text-2xl text-center text-black font-boldn m-4 bg-indigo-500 opacity-75 w-240 h-80 rounded-full border-x-8 border-slate-900 ">
            Pokémon es una franquicia de medios que originalmente comenzó como
            <br />
            un videojuego RPG, pero debido a su popularidad ha logrado
            <br />
            expandirse a otros medios de entretenimiento como series de
            <br />
            televisión, películas, juegos de cartas, ropa, entre otros,
            <br />
            convirtiéndose en una marca que es reconocida en el mercado mundial.
          </p>
        </div>
      </div>
    </>
  );
}
