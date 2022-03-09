import { TYPE_REMOVE_POKEMON_WITH_VISIBLE_DETAILS } from '../config/actionTypes';

export function removePokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: TYPE_REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}
