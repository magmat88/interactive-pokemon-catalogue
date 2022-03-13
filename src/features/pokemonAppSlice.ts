import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PokemonAppInitStateProps {
  filterByName: string;
  filterByType: string;
  offset: number;
}

const pokemonAppInitState: PokemonAppInitStateProps = {
  filterByName: '',
  filterByType: '',
  offset: 0,
};

export const POKEMON_APP = 'pokemonApp';

export const pokemonAppSlice = createSlice({
  name: POKEMON_APP,
  initialState: pokemonAppInitState,
  extraReducers: {},
  reducers: {
    changePokemonNameFilter: (state, action: PayloadAction<string>) => {
      state.filterByName = action.payload;
    },

    changePokemonTypeFilter: (state, action: PayloadAction<string>) => {
      state.filterByType = action.payload;
    },

    changeOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
});

export const selectFilterByName = (state: RootState) =>
  state.pokemonApp.filterByName;
export const selectFilterByType = (state: RootState) =>
  state.pokemonApp.filterByType;
export const selectOffset = (state: RootState) => state.pokemonApp.offset;

export const {
  changeOffset,
  changePokemonNameFilter,
  changePokemonTypeFilter,
} = pokemonAppSlice.actions;
export default pokemonAppSlice.reducer;
