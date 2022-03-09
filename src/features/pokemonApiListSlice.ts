import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  POKEMON_API_LIST__GET_POKEMON_LIST_FULFILLED,
  POKEMON_API_LIST__GET_POKEMON_LIST_PENDING,
  POKEMON_API_LIST__GET_POKEMON_LIST_REJECTED,
  POKEMON_API_LIST__GET_POKEMON_LIST_STATUS,
} from '../config/actionTypes';

export const getPokemonList = createAsyncThunk(
  POKEMON_API_LIST__GET_POKEMON_LIST_STATUS,
  async (listUrl: string) => {
    const response = await axios.get(listUrl);
    return response;
  }
);

const pokemonApiListInitState = {
  pokemonList: {
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
    POKEMON_API_LIST__GET_POKEMON_LIST_PENDING: (state, action) => {
      state.pokemonList = {
        status: 'loading',
        data: {},
        error: null,
      };
    },
    POKEMON_API_LIST__GET_POKEMON_LIST_FULFILLED: (state, action) => {
      state.pokemonList = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    },
    POKEMON_API_LIST__GET_POKEMON_LIST_REJECTED: (state, action) => {
      state.pokemonList = {
        status: 'idle',
        data: {},
        error: action.payload,
      };
    },
  },
});

////////////////

// const defaultState: any = {
//   status: 'idle',
//   pokemonResponse: {
//     count: undefined,
//     next: undefined,
//     previous: undefined,
//     results: undefined,
//   },
//   error: undefined,
// };

// export function getPokemonList(listUrl: string) {
//   const request = axios.get(listUrl).then((response) => {
//     return response;
//   });
//   return {
//     type: POKEMON_API_LIST__GET_POKEMON_LIST,
//     payload: request,
//   };
// }

// export default function pokemonApiListReducer(
//   state = defaultState,
//   action: any
// ) {
//   switch (action.type) {
//     case POKEMON_API_LIST__GET_POKEMON_LIST_PENDING:
//       return {
//         ...state,
//         status: 'loading',
//       };
//     case POKEMON_API_LIST__GET_POKEMON_LIST_FULFILLED:
//       return {
//         ...state,
//         status: 'idle',
//         pokemonResponse: action.payload.data,
//       };
//     case POKEMON_API_LIST__GET_POKEMON_LIST_REJECTED:
//       return {
//         ...state,
//         status: 'idle',
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }
/////////////
