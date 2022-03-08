export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';

export const FETCH_POKEMON_API = 'FETCH_POKEMON_API';
const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST';

export const fetchPokemonApi = () => ({
    type: FETCH_POKEMON_API,
  });
  
  export const receivePokemonList = (results: any) => ({
    type: RECEIVE_POKEMON_LIST,
    results,
  });
