import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Modal from "../modals/modal";

export const Tarjeta = ({ imagen, titulo, estreno, url }) => {
  const { dispatch } = useContext(StoreContext);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-100 rounded-3xl m-2 p-2 w-10/12">
        <div className="basis-7/12">
          <img src={imagen} alt="" className="h-72 w-56 rounded-3xl" />
        </div>
        <div className="flex items-center basis-3/12 text-xl">{titulo}</div>
        <div className="basis-2/12 text-sm">{estreno}</div>
        <div className="basis-2/12">
          <button
            onClick={() => {
              dispatch({
                type: "FNC-MODALMOVIES",
                payload: {
                  statusmodal: true,
                  url: url,
                },
              });
            }}
            className="bg-blue-600 border-x-8 border-gray-900 rounded-xl w-52 shadow-lg hover:shadow-2xl "
          >
            VER
          </button>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
