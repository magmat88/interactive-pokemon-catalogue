import axios from 'axios';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export function getPokemonPage(url: string) {
  const request = axios.get(url);
  return {
    type: 'GET_POKEMON_PAGE',
    payload: request,
  };
}

export function getPokemonListItem(pokemon: any) {
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
