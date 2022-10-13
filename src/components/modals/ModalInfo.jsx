import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import types from "../../context/types";

export const ModalInfo = () => {
  const { store, dispatch } = useContext(StoreContext);

  return (
    <>
      {store.estado_modal && (
        <div className="absolute flex items-center justify-center w-screen h-screen z-10">
          <div className="absolute bg-black w-screen h-screen opacity-90 z-0"></div>
          <div className="absolute h-80 items-center justify-center top-5 left-5">
            <img
              src="../src/assets/imagenes/botonpokedex.png"
              alt=""
              className="h-20 w-24  hover:scale-125 duration-200"
              onClick={() =>
                dispatch({
                  type: types.closemodal,
                })
              }
            />
          </div>
          <div className="flex bg-teal-100 bg-opacity-70 w-200 h-128 rounded-l-full rounded border-8 border-double border-x-stone-400 border-y-black z-10">
            <div className="flex items-center justify-center basis-1/2 border-dotted border-l-transparent border-t-transparent border-b-transparent border-2 border-zinc-800">
              <img
                src="../src/assets/imagenes/IconoPokebola.png"
                alt=""
                className="w-72 h-72 animate-spinlow "
              />
              <img src={store.front} alt="" className="absolute h-96" />
            </div>
            <div className="flex flex-col basis-1/2">
              <div className="flex flex-col basis-8/12">
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    HP
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.hp}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    ATTACK
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.attack}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    DEFENSE
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.defense}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    SPECIAL_ATTACK
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.special_attack}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    SPECIAL_DEFESE
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.special_defense}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row basis-1/6 items-center font-medium ">
                  <div className="flex justify-center basis-1/2 text-2xl font-sans">
                    SPEED
                  </div>
                  <div className="flex justify-center basis-1/2 animate-pulse">
                    <div className="flex items-center justify-center text-3xl bg-zinc-300 rounded-3xl w-12 h-12 border-slate-800 border-4 border-double font-sans">
                      {store.speed}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row basis-4/12">
                <div className="relative flex basis-1/2 items-center justify-center bg-green-100 border-double border-4 border-slate-800 rounded-full m-1">
                  <h1 className="absolute -top-2 bg-teal-800 rounded-3xl w-20 text-sm text-center text-slate-50 border-2 border-slate-900">
                    SPRITE
                  </h1>
                  <img src={store.front_default} alt="" className="h-40" />
                </div>
                <div className="relative flex basis-1/2 items-center justify-center bg-green-100 border-double border-4 border-slate-800 rounded-full m-1">
                  <h1 className="absolute -top-2 bg-teal-800 rounded-3xl w-20 text-sm text-center text-slate-50 border-2 border-slate-900">
                    SHINY
                  </h1>
                  <img src={store.shiny} alt="" className="h-40 pb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
