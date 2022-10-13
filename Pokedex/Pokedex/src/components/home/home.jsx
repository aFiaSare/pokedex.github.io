import React from "react";
import Carrusel from "../carrusel/carrusel";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Carrusel />

      <p className="text-5xl">
        Pokémon es una franquicia de medios que originalmente comenzó como un
        videojuego RPG, pero debido a su popularidad ha logrado expandirse a
        otros medios de entretenimiento como series de televisión, películas,
        juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es
        reconocida en el mercado mundial.
      </p>
    </>
  );
}
