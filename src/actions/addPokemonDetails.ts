import { TYPE_ADD_POKEMON_DETAILS } from '../config/actionTypes';

export function addPokemonDetails(pokemonDetails: any) {
  return {
    type: TYPE_ADD_POKEMON_DETAILS,
    payload: pokemonDetails,
  };
}
