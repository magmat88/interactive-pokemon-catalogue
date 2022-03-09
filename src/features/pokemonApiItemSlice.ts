import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_FULFILLED,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_PENDING,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_REJECTED,
} from '../config/actionTypes';

export const getPokemonItem = createAsyncThunk(
  POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
  async (itemUrl: string) => {
    const response = await axios.get(itemUrl);
    return response;
  }
);

const pokemonApiItemInitState = {
  pokemonApiItem: {
    status: 'idle',
    data: {},
    error: null,
  },
};

export const pokemonApiItemSlice = createSlice({
  name: 'pokemonApiItem',
  initialState: pokemonApiItemInitState,
  reducers: {},
  extraReducers: {
    POKEMON_API_ITEM__GET_POKEMON_ITEM_PENDING: (state, action) => {
      state.pokemonApiItem = {
        status: 'loading',
        data: {},
        error: null,
      };
    },
    POKEMON_API_ITEM__GET_POKEMON_ITEM_FULFILLED: (state, action) => {
      state.pokemonApiItem = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    },
    POKEMON_API_ITEM__GET_POKEMON_ITEM_REJECTED: (state, action) => {
      state.pokemonApiItem = {
        status: 'idle',
        data: {},
        error: action.payload,
      };
    },
  },
});
