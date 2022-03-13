import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PokemonTypesNamesObject } from '../config/state';

interface PokemonAppInitStateProps {
  filterByName: string,
  filterByType: string,
  limit: number,
  offset: number,
  pokemonsTypesNames: Array<PokemonTypesNamesObject>
}

const pokemonAppInitState: PokemonAppInitStateProps = {
  filterByName: '',
  filterByType: '',
  limit: 20,
  offset: 0,
  pokemonsTypesNames: []
};

export const POKEMON_APP = 'pokemonApp';

export const pokemonAppSlice = createSlice({
  name: POKEMON_APP,
  initialState: pokemonAppInitState,
  extraReducers: {},
  reducers: {
    addPokemonTypesNames: (state, action: any) => {
      state.pokemonsTypesNames = [...state.pokemonsTypesNames, action.payload];
    },

    changePokemonNameFilter: (state, action: any) => {
      state.filterByName = action.payload;
    },

    changePokemonTypeFilter: (state, action: any) => {
      state.filterByType = action.payload;
    },

    changeLimit: (state, action: any) => {
      state.limit = action.payload;
    },

    changeOffset: (state, action: any) => {
      state.offset = action.payload;
    },
  },
});

export const selectFilterByName = (state: RootState) =>
  state.pokemonApp.filterByName;
export const selectFilterByType = (state: RootState) =>
  state.pokemonApp.filterByType;
export const selectLimit = (state: RootState) => state.pokemonApp.limit;
export const selectOffset = (state: RootState) => state.pokemonApp.offset;
export const selectPokemonsTypesNames = (state: RootState) => state.pokemonApp.pokemonsTypesNames;

export const {
  changeLimit,
  changeOffset,
  changePokemonNameFilter,
  changePokemonTypeFilter,
  addPokemonTypesNames
} = pokemonAppSlice.actions;
export default pokemonAppSlice.reducer;
