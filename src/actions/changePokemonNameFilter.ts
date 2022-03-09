import { TYPE_CHANGE_POKEMON_NAME_FILTER } from '../config/actionTypes';

export function changePokemonNameFilter(filter: any) {
  return {
    type: TYPE_CHANGE_POKEMON_NAME_FILTER,
    payload: filter,
  };
}
