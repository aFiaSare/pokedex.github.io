import axios from "axios";

export const Apidex = () => {
  const getPokemonUrl = async ({ countLimit }) => {
    let pokes = [];
    try {
      const respuesta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
      );
      // const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      //   params: {
      //     limit: countLimit,
      //   },
      // });
      for (const iterator of respuesta.data.results) {
        const resp = await axios.get(iterator.url);
        pokes.push(resp.data);
      }
      return pokes;
    } catch (error) {}
  };

  return { getPokemonUrl };
};

// export const Apidex = async ({ countLimit = 5 }) => {
//   let pokes = [];
//   try {
//     const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon", {
//       params: {
//         limit: countLimit,
//       },
//     });
//     await respuesta.data.results.map(async (poke) => {
//       const resp = await axios.get(poke.url);
//       pokes.push(resp.data);
//       console.log(resp.data);
//     });

//     return pokes;
//   } catch (error) {}

//   return;
// };
