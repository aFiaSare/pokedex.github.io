import React from "react";

export default function Pokedex() {
  return (
    <>
      <div className="container mx-auto">
        {/*--------------------------------------INICIO DE CONTENEDOR PADRE*/}
        <div className="grid grid-row-2 grid-cols-8 h-80 ">
          <div className="bg-red-100">1</div>
          <div className="bg-red-200 col-span-2">
            <img
              src="../src/assets/imagenes/1.png"
              alt=""
              className="mx-auto h-40 my-10 opacity-50"
            />
          </div>
          <div className="bg-red-400 col-span-2 justify-items-center">
            <img
              src="../src/assets/imagenes/4.png"
              alt=""
              className=" mx-auto h-72 py-1"
            />
            <button className="bg-slate-900 text-white h-8 w-6/12 max-h-12 m-auto ">
              INFO
            </button>
          </div>
          <div className="bg-red-600 col-span-2">
            <img src="../src/assets/imagenes/7.png" alt="" className="m-14" />
          </div>
          <div className="bg-red-800 ">5</div>
        </div>
        <div className="grid grid-row-2 grid-cols-3">
          <div className="bg-red-100">1</div>
          <div className="bg-red-200">2</div>
          <div className="bg-red-400">3</div>
        </div>
      </div>
      {/*-------------------------------------------FIN DE CONTENEDOR PADRE*/}
    </>
  );
}
