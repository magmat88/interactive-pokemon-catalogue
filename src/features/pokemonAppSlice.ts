import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  // POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
  // POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
  // POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
  // POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
  // POKEMON_APP__CHANGE_APP_THEME,
  // POKEMON_APP__CHANGE_LIMIT,
  // POKEMON_APP__CHANGE_OFFSET,
} from '../config/actionTypes';
import { APP_THEME__LIGHT, APP_THEME__DARK } from '../config/constants';

// export function removePokemonWithVisibleDetails(pokemonName: string) {
//   return {
//     type: POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
//     payload: pokemonName,
//   };
// }

// export function addPokemonWithVisibleDetails(pokemonName: string) {
//   return {
//     type: POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
//     payload: pokemonName,
//   };
// }

// export function changePokemonNameFilter(filterByName: any) {
//   return {
//     type: POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
//     payload: filterByName,
//   };
// }

// export function changePokemonTypeFilter(filterByType: any) {
//   return {
//     type: POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
//     payload: filterByType,
//   };
// }

// export function changeAppTheme(selectedTheme: any) {
//   return {
//     type: POKEMON_APP__CHANGE_APP_THEME,
//     payload: selectedTheme,
//   };
// }

// export function changeLimit(limit: any) {
//   return {
//     type: POKEMON_APP__CHANGE_LIMIT,
//     payload: limit,
//   };
// }

// export function changeOffset(offset: any) {
//   return {
//     type: POKEMON_APP__CHANGE_OFFSET,
//     payload: offset,
//   };
// }

const pokemonAppInitState: any = {
  pokemonsWithVisibleDetails: [],
  filterByName: '',
  filterByType: '',
  appTheme: APP_THEME__LIGHT,
  limit: 20,
  offset: 0,
  userInput: '',
};

export const POKEMON_APP = 'pokemonApp';

export const pokemonAppSlice = createSlice({
  name: POKEMON_APP,
  initialState: pokemonAppInitState,
  extraReducers: {},
  reducers: {
    changeUserInput: (state, action: any) => {
      state.userInput = action.payload;
    },

    addPokemonWithVisibleDetails: (state, action: any) => { 
        state.pokemonsWithVisibleDetails = [
          ...state.pokemonsWithVisibleDetails.concat(
            action.payload)]
    },

    removePokemonWithVisibleDetails: (state, action: any) => {
      const index = state.pokemonsWithVisibleDetails.indexOf(
        action.payload.pokemonName
      );
      if (index !== -1) {
        state.pokemonsWithVisibleDetails = [
            ...state.pokemonsWithVisibleDetails.slice(0, index),
            ...state.pokemonsWithVisibleDetails.slice(index + 1),
          ];
          return state;
        };
        // index !== -1 && {
        //   ...state,
        //   pokemonsWithVisibleDetails: [
        //     ...state.pokemonsWithVisibleDetails.slice(0, index),
        //     ...state.pokemonsWithVisibleDetails.slice(index + 1),
        //   ],
        // }
      
    },

    changeAppTheme: (state, action: any) => {
      state.appTheme = state.appTheme === action.payload ? state.appTheme : action.payload;

      // return {
      //   ...state,
      //   selectedTheme: action.payload.selectedTheme,
      // };
    },

    changePokemonNameFilter: (state, action: any) => {
      state.filterByName = action.payload;

      // return {
      //   ...state,
      //   filterByName: action.payload.filterByName,
      // };
    },

    changePokemonTypeFilter: (state, action: any) => {
      state.filterByType = action.payload;
      // return {
      //   ...state,
      //   filterByType: action.payload.filterByType,
      // };
    },

    changeLimit: (state, action: any) => {
      state.limit = action.payload;
    },

    changeOffset: (state, action: any) => {
      state.offset = action.payload;
      // return {
      //   ...state,
      //   offset: action.payload.offset,
      // };
    },
  },
});

export const selectPokemonsWithVisibleDetails = (state: RootState) =>
  state.pokemonApp.pokemonsWithVisibleDetails;
export const selectFilterByName = (state: RootState) =>
  state.pokemonApp.filterByName;
export const selectFilterByType = (state: RootState) =>
  state.pokemonApp.filterByType;
export const selectAppTheme = (state: RootState) => state.pokemonApp.appTheme;
export const selectLimit = (state: RootState) => state.pokemonApp.limit;
export const selectOffset = (state: RootState) => state.pokemonApp.offset;
export const selectUserInput = (state: RootState) => state.pokemonApp.userInput;


export const {
  addPokemonWithVisibleDetails,
  changePokemonNameFilter,
  changePokemonTypeFilter,
  removePokemonWithVisibleDetails,
  changeAppTheme,
  changeLimit,
  changeOffset,
  changeUserInput,
} = pokemonAppSlice.actions;
export default pokemonAppSlice.reducer;
