import React from "react";
import Game from "../game/game";
import Home from "../home/home";
import Movie from "../movie/movie";
import Pokedex from "../pokedex/pokedex";

import NotFound from "../notFound/notFound";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <BrowserRouter>
      <Link to="/Home">Home</Link>
      <Link to="/Game">Juego</Link>
      <Link to="/Pokedex"> pokedex </Link>
      <Link to="/Movie"> peliculas </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
