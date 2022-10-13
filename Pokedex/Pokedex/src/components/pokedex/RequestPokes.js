import { Apidex } from "./Apidex.js";

//el que funciona
const RequestPokes = (x = 1) => {
  const { getPokemonUrl } = Apidex();
  //var pokes = [];
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
  console.log(pokes);
  return pokes;
};

export default RequestPokes;
// const RequestPokes = () => {
//   const { getPokemonUrl } = Apidex();
//   const getRequest = (x = 1) => {
//     getPokemonUrl(20).then((res) => {
//       // console.log([
//       //   {
//       //     front: res[x].sprites.other.home.front_default,
//       //   },
//       //   {
//       //     id: res[x].id,
//       //     nombre: res[x].name,
//       //     hp: res[x].stats[0].base_stat,
//       //     attack: res[x].stats[1].base_stat,
//       //     defense: res[x].stats[2].base_stat,
//       //     special_attack: res[x].stats[3].base_stat,
//       //     special_defense: res[x].stats[4].base_stat,
//       //     speed: res[x].stats[5].base_stat,
//       //     front: res[x].sprites.other.home.front_default,
//       //     shiny: res[x].sprites.other.home.front_shiny,
//       //   },
//       //   {
//       //     front: res[x].sprites.other.home.front_default,
//       //   },
//       // ]);
//       return [
//         {
//           front: res[x - 1].sprites.other.home.front_default,
//         },
//         {
//           id: res[x].id,
//           nombre: res[x].name,
//           hp: res[x].stats[0].base_stat,
//           attack: res[x].stats[1].base_stat,
//           defense: res[x].stats[2].base_stat,
//           special_attack: res[x].stats[3].base_stat,
//           special_defense: res[x].stats[4].base_stat,
//           speed: res[x].stats[5].base_stat,
//           front: res[x].sprites.other.home.front_default,
//           shiny: res[x].sprites.other.home.front_shiny,
//         },
//         {
//           front: res[x + 1].sprites.other.home.front_default,
//         },
//       ];
//     });
//   };
//   return { getRequest };
// };

// export default RequestPokes;

// "",
// "id: " + element.id,
// "\n",
// "nombre: " + element.name,
// "\n",
// "stats: ",
// "\n",
// "  - " + element.stats[0].stat.name + element.stats[0].base_stat,
// "\n",
// "  - " + element.stats[1].stat.name + element.stats[1].base_stat,
// "\n",
// "  - " + element.stats[2].stat.name + element.stats[2].base_stat,
// "\n",
// "  - " + element.stats[3].stat.name + element.stats[3].base_stat,
// "\n",
// "  - " + element.stats[4].stat.name + element.stats[4].base_stat,
// "\n",
// "  - " + element.stats[5].stat.name + element.stats[5].base_stat,
// "\n",
// "sprites ",
// "\n",
// " -Default:" + element.sprites.other.home.front_default,
// "\n",
// " -Shiny:" + element.sprites.other.home.front_shiny,
// "\n"
