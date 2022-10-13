import React from "react";
import Game from "../../game/game";
import Home from "../../home/home";
import Movie from "../../movie/movie";
import NotFound from "../../notFound/notFound";
import { Poke } from "../../pokedex/poke";
import StoreProvider from "../../../context/StoreProvider";
import { BiJoystick, BiHomeHeart, BiTab, BiMovie } from "react-icons/bi";
import { MdCatchingPokemon } from "react-icons/md";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <BrowserRouter>
      <div className="flex bg-gradient-to-l from-gray-900 via-gray-800 to-gray-700  text-gray-400  text-center">
        <div className=" flex-1 p-4 m-2">
          <MdCatchingPokemon className=" flex-1 text-4xl self-center hover:animate-spin" />
        </div>
        <div className="p-4 m-2 hover:bg-gray-700 rounded-xl ">
          <Link to="/" className="hover:text-white">
            <BiHomeHeart className="text-2xl " /> Home
          </Link>
        </div>
        <div className="p-4 m-2 hover:bg-gray-700 rounded-xl	">
          <Link to="/Game" className="hover:text-white">
            <BiJoystick className="text-2xl" /> Juegos
          </Link>
        </div>
        <div className="p-4 m-2 hover:bg-gray-700 rounded-xl">
          <Link to="/Poke" className="hover:text-white">
            <BiTab className="text-2xl " /> Pokedex
          </Link>
        </div>
        <div className="p-4 m-2 hover:bg-gray-700 rounded-xl">
          <Link to="/Movie" className="hover:text-white">
            <BiMovie className="text-2xl " /> Peliculas
          </Link>
        </div>
      </div>
      <div className="bg-cover bg-img-fondo h-screen w-screen">
        <Routes>
          <Route
            path="/Movie"
            element={
              <StoreProvider>
                <Movie />
              </StoreProvider>
            }
          />
          <Route
            path="/Poke"
            element={
              <StoreProvider>
                <Poke />
              </StoreProvider>
            }
          />
          <Route path="/Game" element={<Game />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
