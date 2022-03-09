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
    // [getPokemonItem.pending.type]: (state, action) => {
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

////////////

// const defaultState = {
//   status: 'idle',
//   pokemonItemResponse: undefined,
//   error: undefined,
// };

// export function getPokemonItem(itemUrl: string) {
//   const request = axios.get(itemUrl);
//   return {
//     type: POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
//     payload: request,
//   };
// }

// export default function PokemonItemReducer(state = defaultState, action: any) {
//   switch (action.type) {
//     case POKEMON_API_ITEM__GET_POKEMON_ITEM_PENDING:
//       return {
//         ...state,
//         status: 'loading',
//       };
//     case POKEMON_API_ITEM__GET_POKEMON_ITEM_FULFILLED:
//       return {
//         ...state,
//         status: 'succeeded',
//         pokemonItemResponse: action.payload.data,
//       };
//     case POKEMON_API_ITEM__GET_POKEMON_ITEM_REJECTED:
//       return {
//         ...state,
//         status: 'rejected',
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }

/////////////
