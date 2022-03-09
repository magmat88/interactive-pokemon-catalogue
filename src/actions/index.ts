import axios from 'axios';
import { PokemonType } from '../components/PokemonListItem/PokemonListItem';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function getPokemonPage(url: string) {
  const request = axios.get(url);
  return {
    type: 'GET_POKEMON_PAGE',
    payload: request,
  };
}

export function getPokemonListItem(pokemon: PokemonType) {
  const request = axios.get(pokemon.url);
  return {
    type: 'GET_POKEMON_LIST_ITEM',
    payload: request,
  };
}

export function setCurrentPageUrl(pageUrl: string) {
  return {
    type: 'SET_CURRENT_PAGE_URL',
    payload: pageUrl,
  };
}

export function setPokemonListItemPageUrl(pokemonListItemPageUrl: string) {
    return {
        type: 'SET_POKEMON_LIST_ITEM_PAGE_URL',
        payload: pokemonListItemPageUrl,
    }
}
