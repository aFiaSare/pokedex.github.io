import React from "react";
import img from "../../assets/imagenes/error.jpg";

import { BiHomeCircle } from "react-icons/bi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center opacity-90 h-screen w-screen">
      <div className="flex justify-center items-center basis-3/6">
        <img src={img} className="rounded-full h-96 w-160" />
      </div>
      <div className="flex  justify-center items-center basis-3/6">
        <div className=" bg-yellow-400 rounded-full text-xl font-extrabold text-gray-800 hover:bg-yellow-400 w-20 h-20">
          <Link
            to="/"
            className="flex justify-center items-center m-6 hover:text-gray-600"
          >
            <BiHomeCircle className="text-3xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}
