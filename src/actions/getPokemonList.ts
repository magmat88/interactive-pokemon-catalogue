import axios from 'axios';
import { TYPE_GET_POKEMON_LIST } from '../config/actionTypes';

export function getPokemonList(listUrl: string) {
  const request = axios.get(listUrl);
  return {
    type: TYPE_GET_POKEMON_LIST,
    payload: request,
  };
}
