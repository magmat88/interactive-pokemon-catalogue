import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
  POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
  POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
  POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
  POKEMON_APP__CHANGE_CURRENT_APP_THEME
} from '../config/actionTypes';
import {
  APP_THEME__LIGHT,
  APP_THEME__DARK,
} from '../config/constants';

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

export function changeCurrentAppTheme(selectedTheme: any) {
  return {
    type: POKEMON_APP__CHANGE_CURRENT_APP_THEME,
    payload: selectedTheme,
  }
}

const pokemonAppInitState: any = {
  pokemonsWithVisibleDetails: [],
  filterByName: '',
  filterByType: '',
  currentAppTheme: APP_THEME__LIGHT,
};

export const POKEMON_APP = 'pokemonApp';

export const pokemonAppSlice = createSlice({
  name: POKEMON_APP,
  initialState: pokemonAppInitState,
  reducers: {},
  extraReducers: {

    POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS: (state, action) => {
      return {
        ...state,
        pokemonsWithVisibleDetails: {
          ...state.pokemonsWithVisibleDetails.concat(
            action.payload.pokemonName
          ),
        },
      };
    },

    POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS: (state, action) => {
      const index = state.pokemonsWithVisibleDetails.indexOf(
        action.payload.pokemonName
      );
      return (
        index !== -1 && {
          ...state,
          pokemonsWithVisibleDetails: [
            ...state.pokemonsWithVisibleDetails.slice(0, index),
            ...state.pokemonsWithVisibleDetails.slice(index + 1),
          ],
        }
      );
    },

    POKEMON_APP__CHANGE_CURRENT_APP_THEME: (state, action) => {
      return {
        ...state,
        selectedTheme: action.payload.selectedTheme,
      };
    },

    POKEMON_APP__CHANGE_POKEMON_NAME_FILTER: (state, action) => {
      return {
        ...state,
        filterByName: action.payload.filterByName,
      };
    },

    POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER: (state, action) => {
      return {
        ...state,
        filterByType: action.payload.filterByType,
      };
    },
  },
});

export const selectStatusPokemonsWithVisibleDetails = (state: RootState) =>
state.pokemonApp.pokemonsWithVisibleDetails;
export const selectStatusFilterByName = (state: RootState) =>
state.pokemonApp.filterByName;
export const selectStatusFilterByType = (state: RootState) =>
state.pokemonApp.filterByType;
export const selectCurrentAppTheme = (state: RootState) =>
state.pokemonApp.currentAppTheme;