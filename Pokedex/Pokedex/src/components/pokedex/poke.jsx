import React, { useContext, useState } from "react";
import "animate.css";
import RequestPokes from "./RequestPokes";
import { StoreContext } from "../../context/StoreContext.jsx";
import types from "../../context/types";
import { CustomDispatch } from "../../context/CustomDispatch";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../Styles/estilo.css";

export const Poke = () => {
  const { store, dispatch } = useContext(StoreContext);

  const CustomDispatch = (action, payload = 0) => {
    if (action === types.comparea || action === types.compareb) {
      RequestPokes(store.value_req + payload).then((res) => {
        console.log("res", res);
        dispatch({
          type: action,
          payload: res,
        });
      });
    } else {
      if (
        store.value_req + payload == store.max_value_req ||
        store.value_req + payload < store.min_value_req
      ) {
        console.log("MAXIMO o MINIMO ALCANZADO");
        console.log("customDif", store.value_req);
      } else {
        RequestPokes(store.value_req + payload).then((res) => {
          dispatch({
            type: action,
            payload: res,
          });
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/*--------------------------------------INICIO DE CONTENEDOR PADRE*/}
        <div className="grid grid-cols-8 my-12 w-full h-80 border-double rounded-full border-8 border-x-slate-800 bg-teal-100 bg-opacity-70">
          <div className="absolute  animate-pulse"></div>
          <div className="flex h-80 items-center justify-center z-0">
            <img
              onClick={() => {
                console.log();
                CustomDispatch(types.previous, -1);
              }}
              src="../src/assets/imagenes/botonpokedex.png"
              alt=""
              className="h-20 w-24 hover:scale-125 duration-200 "
            />
          </div>
          <div className="flex h-80 items-center justify-center col-span-2">
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/imagenes/IconoPokebola.png"
                alt=""
                className="absolute w-36 h-36"
              />
              <SwitchTransition>
                <CSSTransition
                  classNames="fade"
                  key={store.nombre}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                >
                  <img
                    src={store.front1}
                    alt=""
                    className="h-32 animate-anipoke"
                  />
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2">
            <div className="flex items-center justify-center basis-4/12 ">
              <div className="flex absolute items-center justify-center font-medium bg-sky-700 rounded-full border-4 border-double boder-8 border-y-black top-8 w-40 h-10 text-cyan-100">
                <SwitchTransition>
                  <CSSTransition
                    classNames="fade"
                    key={store.nombre}
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    <h1>{store.nombre}</h1>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
            <div className="flex items-center justify-center basis-8/12">
              <div className="absolute bg-img-pokebolaopen bg-contain bg-no-repeat w-64 h-64 "></div>
              <SwitchTransition>
                <CSSTransition
                  classNames="fade"
                  key={store.nombre}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                >
                  <img
                    src={store.front}
                    alt=""
                    className="h-64 animate-anipoke"
                  />
                </CSSTransition>
              </SwitchTransition>
            </div>
            <div className="flex items-center justify-center basis-1/2">
              <div className="relative top-2">
                <button
                  onClick={() => {
                    CustomDispatch(types.infoprobar);
                  }}
                  className="bg-slate-800 w-40 h-10 text-white rounded-full border-dotted border-2 drop-shadow-2xl font-medium 
                hover:bg-slate-700 duration-300"
                >
                  INFO
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/imagenes/IconoPokebola.png"
                alt=""
                className="absolute w-36 h-36"
              />
              <SwitchTransition>
                <CSSTransition
                  classNames="fade"
                  key={store.nombre}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                >
                  <img
                    src={store.front2}
                    alt=""
                    className="h-32 z-10 animate-anipoke "
                  />
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
          <div className="flex h-80 items-center justify-center">
            <img
              onClick={() => {
                CustomDispatch(types.next, 1);
              }}
              src="../src/assets/imagenes/botonpokedex.png"
              alt=""
              className="h-20 w-24 rotate-180 hover:scale-125 duration-200"
            />
          </div>
        </div>
        <div className="flex flex-row bg-opacity-70 bg-teal-100 h-80 rounded-full border-y-slate-900 border-double border-8">
          <div className="flex flex-col items-center justify-center w-72">
            <div className="flex bg-img-pokebolaopen bg-cover w-52 h-52 items-center justify-center ">
              <img
                src={store.front_primary}
                alt=""
                className="h-64 w-96 pb-5 hover: animate-pulselow"
              />
            </div>
            <div className="flex items-center justify-center basis-2/12">
              <button
                onClick={() => {
                  CustomDispatch(types.comparea);
                }}
                className="bg-slate-800 text-white w-24 h-10 rounded-full border-dotted border-2 drop-shadow-2xl font-medium hover:bg-slate-700 duration-300"
              >
                COMPARE
              </button>
            </div>
          </div>
          <div className="flex flex-col w-72">
            <div className="flex flex-row justify-center items-center basis-2/12">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.hp_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-base">
                HP
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.hp_second}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center basis-2/12 ">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.attack_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-base">
                ATTACK
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.attack_second}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center basis-2/12 ">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.defense_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-base">
                DEFENSE
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.defense_second}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center basis-2/12 ">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.special_attack_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-ls">
                SPECIAL ATTACK
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.special_attack_second}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center basis-2/12 ">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.special_defense_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-ls">
                SPECIAL DEFENSE
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.special_defense_second}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center basis-2/12 ">
              <div className="flex items-center justify-center basis-3/12 text-2xl">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.speed_primary}
                </div>
              </div>
              <div className="flex items-center justify-center basis-6/12 font-medium text-ls">
                SPEED
              </div>
              <div className="flex items-center justify-center basis-3/12 text-2xl ">
                <div className="flex items-center justify-center bg-zinc-300 rounded-3xl border-slate-800 w-11 h-11 border-4 border-double font-sans">
                  {store.speed_second}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-72">
            <div className="flex bg-img-pokebolaopen bg-cover w-52 h-52 items-center justify-center  ">
              <img
                src={store.front_second}
                alt=""
                className="h-64 w-96 pb-5 animate-pulselow"
              />
            </div>
            <div className="flex items-center justify-center basis-2/12">
              <button
                onClick={() => {
                  CustomDispatch(types.compareb);
                }}
                className="bg-slate-800 text-white w-24 h-10 rounded-full border-dotted border-2 drop-shadow-2xl font-medium hover:bg-slate-700 duration-300"
              >
                COMPARE
              </button>
            </div>
          </div>
        </div>
        {/*-------------------------------------------FIN DE CONTENEDOR PADRE*/}
      </div>
    </>
  );
};
