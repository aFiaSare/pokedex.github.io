import { useEffect } from "react";
import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../../Styles/estilo.css";

import img1 from "../../assets/imagenes/BannerPokemon1.jpg";
import img2 from "../../assets/imagenes/BannerPokemon2.jpg";
import img3 from "../../assets/imagenes/BannerPokemon3.jpg";
import img4 from "../../assets/imagenes/BannerPokemon4.jpg";
// import img5 from "../../assets/imagenes/BannerPokemon5.jpg";
import img6 from "../../assets/imagenes/BannerPokemon6.jpg";

const Carrusel = () => {
  const arregloImagenes = [img1, img2, img3, img4, img6];
  const [bandera, setBandera] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setBandera((valor) => {
        if (valor + 1 === arregloImagenes.length) {
          return 0;
        }
        return valor + 1;
      });
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={arregloImagenes[bandera]}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <img src={arregloImagenes[bandera]} />
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Carrusel;





