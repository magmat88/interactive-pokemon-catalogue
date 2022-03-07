import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID } from '../config/actionTypes';

export const pokemons = (pokemons = [], action: any) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return action.payload;
    case GET_POKEMON_BY_ID:
      return pokemons.filter((pokemon: any) => pokemon._id) === action.payload;
    default:
      return pokemons;
  }
};
