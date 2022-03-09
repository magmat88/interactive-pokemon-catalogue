import { createSlice } from '@reduxjs/toolkit';
import {
  POKEMON_APP__ADD_POKEMON_DETAILS,
  POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
  POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
  POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
  POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
  POKEMON_APP__SET_CURRENT_LIST_URL,
} from '../config/actionTypes';

export function removePokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}

export function addPokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}

export function addPokemonDetails(pokemonDetails: any) {
  return {
    type: POKEMON_APP__ADD_POKEMON_DETAILS,
    payload: pokemonDetails,
  };
}

export function setCurrentListUrl(listUrl: string) {
  return {
    type: POKEMON_APP__SET_CURRENT_LIST_URL,
    payload: listUrl,
  };
}

export function changePokemonNameFilter(filterByName: any) {
  return {
    type: POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
    payload: filterByName,
  };
}

export function changePokemonTypeFilter(filterByType: any) {
  return {
    type: POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
    payload: filterByType,
  };
}

const pokemonAppInitState: any = {
  pokemonApp: {
    pokemonsWithVisibleDetails: [],
    filterByName: '',
    filterByType: '',
    pokemons: [
      {
        name: undefined,
        height: undefined,
        sprite: undefined,
        types: [],
        weight: undefined,
        visibility: false,
      },
    ],
    currentListUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
  },
};

export const pokemonAppSlice = createSlice({
  name: 'pokemonApp',
  initialState: pokemonAppInitState,
  reducers: {},
  extraReducers: {
    POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS: (state, action) => {
      return {
        ...state.pokemonApp,
        pokemonsWithVisibleDetails: {
          ...state.pokemonApp.pokemonsWithVisibleDetails.concat(action.payload.pokemonName),
        },
      };
    },
    POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS: (state, action) => {
      const index = state.pokemonsWithVisibleDetails.indexOf(action.payload.pokemonName);
      return (
        index !== -1 && {
          ...state.pokemonApp,
          pokemonsWithVisibleDetails: [
            ...state.pokemonApp.pokemonsWithVisibleDetails.slice(0, index),
            ...state.pokemonApp.pokemonsWithVisibleDetails.slice(index + 1),
          ],
        }
      );
    },
    POKEMON_APP__ADD_POKEMON_DETAILS: (state, action) => {
      return {
        ...state.pokemonApp,
        pokemons: [...state.pokemonApp.pokemons, action.payload.pokemonDetails],
      };
    },
    POKEMON_APP__SET_CURRENT_LIST_URL: (state, action) => {
      return {
        ...state.pokemonApp,
        currentListUrl: action.payload.listUrl,
      };
    },
    POKEMON_APP__CHANGE_POKEMON_NAME_FILTER: (state, action) => {
      return {
        ...state.pokemonApp,
        filterByName: action.payload.filterByName,
      };
    },
    POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER: (state, action) => {
      return {
        ...state.pokemonApp,
        filterByType: action.payload.filterByType,
      };
    },
  },
});
