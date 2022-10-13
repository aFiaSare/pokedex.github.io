import arregloJuego from "./arregloJuegos";
import Tarjeta from "./tarjeta";

export default function Game() {
  return (
    <div className="grid grid-cols-5  w-screen justify-center items-center gap-1 bg-img-fondo bg-cover z-0">
      {arregloJuego.map((x, index) => (
        <div key={index}>
          <Tarjeta imagen={x.imagen} titulo={x.titulo} icono={x.icono} />
        </div>
      ))}
    </div>
  );
}
