// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
// import rootReducer from './reducers';
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { pokemonApiItemSlice } from './features/pokemonApiItemSlice';
import { pokemonApiListSlice } from './features/pokemonApiListSlice';
import { pokemonAppSlice } from './features/pokemonAppSlice';

export const fetchPokemons = createAsyncThunk(
  'pokemons/status',
  async (url: string) => {
    const response = await axios.get(url);
    return response;
  }
);

const pokemonsInitState = {
  pokemonList: {
    status: 'idle',
    data: {},
    error: null,
  },
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonsInitState,
  reducers: {},
  extraReducers: {
    [fetchPokemons.pending.type]: (state, action) => {
      state.pokemonList = {
        status: 'loading',
        data: {},
        error: null,
      };
    },
    [fetchPokemons.fulfilled.type]: (state, action) => {
      state.pokemonList = {
        status: 'done',
        data: action.payload,
        error: null,
      };
    },
    [fetchPokemons.rejected.type]: (state, action) => {
      state.pokemonList = {
        status: 'done',
        data: {},
        error: action.payload,
      };
    },
  },
});

const middlewares = [promise];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const reducer = {
  // pokemon: pokemonSlice.reducer,
    pokemonApiItem: pokemonApiItemSlice.reducer,
    pokemonApiList: pokemonApiListSlice.reducer,
    pokemonApp: pokemonAppSlice.reducer,
    // pokemonApiItem: pokemonApiItemReducer,
    // pokemonApiList: pokemonApiListReducer,
    // pokemonApp: pokemonAppReducer,
};

const store = configureStore({
  reducer,
});

export default store;
