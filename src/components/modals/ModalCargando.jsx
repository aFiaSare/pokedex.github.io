import React, { useContext } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { StoreContext } from "../../context/StoreContext";

export const ModalCargando = () => {
  const { store, dispatch } = useContext(StoreContext);

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        key={store.nombre}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
      >
        <>
          {store.estado_modal_loading && (
            <div className="absolute flex items-center justify-center w-screen h-screen z-10">
              <img
                src="../src/assets/imagenes/IconoPokebola.png"
                alt=""
                className="w-20 h-20 animate-spin"
              />
            </div>
          )}
        </>
      </CSSTransition>
    </SwitchTransition>
  );
};
