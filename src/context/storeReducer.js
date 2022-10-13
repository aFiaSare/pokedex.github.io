import types from "./types";

export const storeReducer = (store, action) => {
  switch (action.type) {
    case types.modalmovies:
      return {
        ...store,
        estado_modal_movies: action.payload.statusmodal,
        urlmodal: action.payload.url,
      };
    case types.modalloading:
      return {
        ...store,
        estado_modal_loading: action.payload,
      };

    case types.closemodal:
      return {
        ...store,
        estado_modal: false,
      };

    case types.infoprobar:
      console.log("INFO", store.estado_modal);
      return {
        ...store,
        estado_modal: true,
      };

    case types.init_data: {
      return {
        ...store,
        front1: action.payload.front1,
        front: action.payload.front,
        front2: action.payload.front2,
        nombre: action.payload.nombre.toUpperCase(),
        id: action.payload.id,
        hp: action.payload.hp.toString(),
        attack: action.payload.attack,
        defense: action.payload.defense,
        special_attack: action.payload.special_attack,
        special_defense: action.payload.special_defense,
        speed: action.payload.speed,
        shiny: action.payload.shiny,
        front_default: action.payload.front_default,
        estado_modal: false,
      };
    }

    case types.next: {
      if (store.value_req == store.max_value_req) {
        return { ...store, value_req: store.value_req };
      } else {
        return {
          ...store,
          value_req: store.value_req + 1,
          front1: action.payload.front1,
          front: action.payload.front,
          front2: action.payload.front2,
          nombre: action.payload.nombre.toUpperCase(),
          id: action.payload.id,
          hp: action.payload.hp.toString(),
          attack: action.payload.attack,
          defense: action.payload.defense,
          special_attack: action.payload.special_attack,
          special_defense: action.payload.special_defense,
          speed: action.payload.speed,
          shiny: action.payload.shiny,
          front_default: action.payload.front_default,
        };
      }
    }
    case types.previous:
      if (store.value_req == store.min_value_req) {
        return { ...store, value_req: store.value_req };
      } else {
        return {
          ...store,
          value_req: store.value_req - 1,
          front1: action.payload.front1,
          front: action.payload.front,
          front2: action.payload.front2,
          nombre: action.payload.nombre.toUpperCase(),
          id: action.payload.id,
          hp: action.payload.hp.toString(),
          attack: action.payload.attack,
          defense: action.payload.defense,
          special_attack: action.payload.special_attack,
          special_defense: action.payload.special_defense,
          speed: action.payload.speed,
          shiny: action.payload.shiny,
          front_default: action.payload.front_default,
        };
        //console.log("action", action.payload)
      }
    case types.info:
      return { ...store, estado_modal: true };

    case types.comparea:
      return {
        ...store,
        id_primary: action.payload.id,
        nombre_primary: action.payload.nombre,
        hp_primary: action.payload.hp.toString(),
        attack_primary: action.payload.attack.toString(),
        defense_primary: action.payload.defense.toString(),
        special_attack_primary: action.payload.special_attack.toString(),
        special_defense_primary: action.payload.special_defense.toString(),
        speed_primary: action.payload.speed.toString(),
        front_primary: action.payload.front,
        shiny_primary: action.payload.shiny,
      };
    case types.compareb:
      return {
        ...store,
        id_second: action.payload.id,
        nombre_second: action.payload.nombre,
        hp_second: action.payload.hp.toString(),
        attack_second: action.payload.attack.toString(),
        defense_second: action.payload.defense.toString(),
        special_attack_second: action.payload.special_attack.toString(),
        special_defense_second: action.payload.special_defense.toString(),
        speed_second: action.payload.speed.toString(),
        front_second: action.payload.front,
        shiny_second: action.payload.shiny,
      };
    default:
      break;
  }
};

// id_primary: store.id,
// nombre_primary: store.nombre,
// hp_primary: store.hp,
// attack_primary: store.attack,
// defense_primary: store.defense,
// special_attack_primary: store.special_attack,
// special_defense_primary: store.special_defense,
// speed_primary: store.speed,
// front_primary: store.front,
// shiny_primary: store.shiny,

// id_second: store.id,
// nombre_second: store.nombre,
// hp_second: store.hp,
// attack_second: store.attack,
// defense_second: store.defense,
// special_attack_second: store.special_attack,
// special_defense_second: store.special_defense,
// speed_second: store.speed,
// front_second: store.front,
// shiny_second: store.shiny,
