import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  POKEMON_API_LIST__GET_POKEMON_LIST_FULFILLED,
  POKEMON_API_LIST__GET_POKEMON_LIST_PENDING,
  POKEMON_API_LIST__GET_POKEMON_LIST_REJECTED,
  POKEMON_API_LIST__GET_POKEMON_LIST_STATUS,
} from '../config/actionTypes';

export const getpokemonApiList = createAsyncThunk(
  POKEMON_API_LIST__GET_POKEMON_LIST_STATUS,
  async (listUrl: string) => {
    const response = await axios.get(listUrl);
    return response;
  }
);

const pokemonApiListInitState = {
  pokemonApiList: {
    status: 'idle',
    data: {},
    error: null,
  },
};

export const pokemonApiListSlice = createSlice({
  name: 'pokemonApiList',
  initialState: pokemonApiListInitState,
  reducers: {},
  extraReducers: {
    "pokemonApiList/getPokemonList/status/pending": (state, action) => {
      state.pokemonApiList = {
        status: 'loading',
        data: {},
        error: null,
      };
    },
    "pokemonApiList/getPokemonList/status/fulfilled": (state, action: any) => {
      state.pokemonApiList = {
        status: 'idle',
        data: {...state.pokemonApiList.data, ...action.payload.data},
        error: null,
      };
    },
    "pokemonApiList/getPokemonList/status/rejected": (state, action) => {
      state.pokemonApiList = {
        status: 'idle',
        data: {},
        error: action.payload,
      };
    },
  },
});
