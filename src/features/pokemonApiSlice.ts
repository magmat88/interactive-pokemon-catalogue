import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  TYPE__REQUEST_STATE__FULFILLED,
  TYPE__REQUEST_STATE__PENDING,
  TYPE__REQUEST_STATE__REJECTED,
} from '../config/types';
import {
  URL_API,
  REQUEST_STATE__FULFILLED,
  REQUEST_STATE__PENDING,
  REQUEST_STATE__REJECTED,
  POKEMON_API
} from '../config/constants';
import {
  POKEMON__FETCH_BY_NAME,
  POKEMON__FETCH_LIST,
} from '../config/actionTypes';
type RequestState =
  | TYPE__REQUEST_STATE__PENDING
  | TYPE__REQUEST_STATE__FULFILLED
  | TYPE__REQUEST_STATE__REJECTED;

export const fetchPokemonByName = createAsyncThunk<any, string>(
  POKEMON__FETCH_BY_NAME,
  async (name, { rejectWithValue }) => {
    const response = await fetch(`${URL_API}/${name}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const fetchPokemonList = createAsyncThunk<any, string>(
  POKEMON__FETCH_LIST,
  async (limitAndOffset, { rejectWithValue }) => {
    const response = await fetch(`${URL_API}?${limitAndOffset}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

const pokemonApiInitState = {
  dataByName: {} as Record<string, any | undefined>,
  statusByName: {} as Record<string, RequestState | undefined>,
  dataList: {} as Record<any, any | undefined>,
  statusList: {} as Record<any, RequestState | undefined>,
};


export const pokemonApiSlice = createSlice({
  name: POKEMON_API,
  initialState: pokemonApiInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.pending, (state, action) => {
      state.statusByName[action.meta.arg] = REQUEST_STATE__PENDING;
    });

    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.statusByName[action.meta.arg] = REQUEST_STATE__FULFILLED;
      state.dataByName[action.meta.arg] = action.payload;
    });

    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
      state.statusByName[action.meta.arg] = REQUEST_STATE__REJECTED;
    });

    builder.addCase(fetchPokemonList.pending, (state, action) => {
      state.statusList[action.meta.arg] = REQUEST_STATE__PENDING;
    });

    builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
      state.statusList[action.meta.arg] = REQUEST_STATE__FULFILLED;
      state.dataList = { ...state.dataList, ...action.payload };
    });
    builder.addCase(fetchPokemonList.rejected, (state, action) => {
      state.statusList[action.meta.arg] = REQUEST_STATE__REJECTED;
    });
  },
});

export const selectStatusByName = (state: RootState, name: string) =>
  state.pokemonApi.statusByName[name];
export const selectDataByName = (state: RootState, name: string) =>
  state.pokemonApi.dataByName[name];

export const selectStatusList = (state: RootState, limitAndOffset: string) =>
  state.pokemonApi.statusList[limitAndOffset];
export const selectDataList = (state: RootState) =>
  state.pokemonApi.dataList;
