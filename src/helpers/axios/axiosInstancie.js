import axios from "axios";

export const Apidex = () => {
  const getPokemonUrl = async () => {
    let pokes = [];
    try {
      const respuesta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
      );

      for (const iterator of respuesta.data.results) {
        const resp = await axios.get(iterator.url);
        pokes.push(resp.data);
      }
      return pokes;
    } catch (error) {}
  };

  return { getPokemonUrl };
};
