import axios from 'axios';
import { TYPE_GET_POKEMON_ITEM } from '../config/actionTypes';

export function getPokemonItem(itemUrl: string) {
  const request = axios.get(itemUrl);
  return {
    type: TYPE_GET_POKEMON_ITEM,
    payload: request,
  };
}
