import { TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS } from '../config/actionTypes';

export function addPokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}
