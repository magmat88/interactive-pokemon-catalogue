import { TYPE_CHANGE_POKEMON_TYPE_FILTER } from '../config/actionTypes';

export function changePokemonTypeFilter(filterByType: any) {
  return {
    type: TYPE_CHANGE_POKEMON_TYPE_FILTER,
    payload: filterByType,
  };
}
