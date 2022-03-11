import { configureStore } from '@reduxjs/toolkit';
import { pokemonApiSlice } from './features/pokemonApiISlice';
import { pokemonAppSlice } from './features/pokemonAppSlice';

const reducer = {
  pokemonApi: pokemonApiSlice.reducer,
  pokemonApp: pokemonAppSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
