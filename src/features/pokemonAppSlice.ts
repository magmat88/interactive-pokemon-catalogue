import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {} from '../config/actionTypes';
import { APP_THEME__LIGHT, APP_THEME__DARK } from '../config/constants';

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
        ...state.pokemonsWithVisibleDetails.concat(action.payload),
      ];
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
      }
      // index !== -1 && {
      //   ...state,
      //   pokemonsWithVisibleDetails: [
      //     ...state.pokemonsWithVisibleDetails.slice(0, index),
      //     ...state.pokemonsWithVisibleDetails.slice(index + 1),
      //   ],
      // }
    },

    changeAppTheme: (state, action: any) => {
      state.appTheme =
        state.appTheme === action.payload ? state.appTheme : action.payload;

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
  changeAppTheme,
  changeLimit,
  changeOffset,
  changePokemonNameFilter,
  changePokemonTypeFilter,
  changeUserInput,
  removePokemonWithVisibleDetails,
} = pokemonAppSlice.actions;
export default pokemonAppSlice.reducer;
