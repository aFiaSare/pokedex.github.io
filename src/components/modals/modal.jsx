import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { StoreContext } from "../../context/StoreContext";

export default function Modal() {
  const { store, dispatch } = useContext(StoreContext);
  return (
    <>
      {store.estado_modal_movies && (
        <div className="flex flex-col items-center justify-center absolute bg-black bg-opacity-90 w-screen h-screen z-10">
          <ReactPlayer
            url={store.urlmodal}
            height="60%"
            width="60%"
            playing
            className="border-8 border-y-gray-600 rounded-xl"
          />

          <div className="flex justify-center items-center basis-1/6">
            <button
              className="bg-white rounded-xl w-56 h-10 font-extrabold hover:bg-opacity-70"
              onClick={() => {
                dispatch({
                  type: "FNC-MODALMOVIES",
                  payload: {
                    statusmodal: false,
                  },
                });
              }}
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </>
  );
}
