import { Apidex } from "../../../helpers/axios/axiosInstancie";

const RequestPokes = (x = 1) => {
  const { getPokemonUrl } = Apidex();

  var pokes = getPokemonUrl(120).then((res) => {
    return {
      front1: res[x - 1]?.sprites.other.home.front_default ?? "",
      id: res[x].id,
      nombre: res[x].name,
      hp: res[x].stats[0].base_stat,
      attack: res[x].stats[1].base_stat,
      defense: res[x].stats[2].base_stat,
      special_attack: res[x].stats[3].base_stat,
      special_defense: res[x].stats[4].base_stat,
      speed: res[x].stats[5].base_stat,
      front: res[x].sprites.other.home.front_default,
      shiny: res[x].sprites.other.home.front_shiny,
      front2: res[x + 1]?.sprites.other.home.front_default ?? "",
      front_default: res[x].sprites.front_default,
    };
  });
  return pokes;
};

export default RequestPokes;
