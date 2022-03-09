import axios from 'axios';
import { TYPE_GET_POKEMON_LIST } from '../config/actionTypes';

export function getPokemonList(listUrl: string) {
  const request = axios.get(listUrl).then((response) => {
    return response.data;
  });
  return {
    type: TYPE_GET_POKEMON_LIST,
    payload: request,
  };
}

