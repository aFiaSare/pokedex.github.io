export const Tarjeta = ({ imagen, titulo, icono }) => {
  return (
    <div className="my-5 flex flex-col items-center justify-center h-112 w-60  transform transition-all hover:-translate-y-2 duration-300  hover:shadow-2xl ">
      <div className="absolute bg-white w-full h-full z-0 shadow-lg rounded-xl opacity-80"></div>
      <div className="basis-5/12 text-center z-10">
        <h2 className="font-bold mt-5 text-2xl ">{titulo}</h2>
      </div>
      <div className="basis-5/12 z-10">
        <img
          className=" w-52 h-64 object-cover rounded-xl border-8 border-double border-black "
          src={imagen}
        />
      </div>
      <div>
        <div className="relative flex items-center justify-center top-5">
          <img className="h-28 w-28 object-cover rounded-xl z-10" src={icono} />
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
