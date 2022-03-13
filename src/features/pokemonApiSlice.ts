import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  URL_API,
  POKEMON_API,
} from '../config/constants';
import {
  POKEMON__FETCH_BY_NAME,
  POKEMON__FETCH_LIST,
} from '../config/actionTypes';
import { PokemonType } from '../config/state';

type RequestState =
  | 'pending'
  | 'fulfilled'
  | 'rejected';

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

// export const fetchPokemonList = createAsyncThunk<any, string>(
//   POKEMON__FETCH_LIST,
//   async (limitAndOffset, { rejectWithValue }) => {
//     const response = await fetch(`${URL_API}?${limitAndOffset}`);
//     const data = await response.json();
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data);
//     }
//     return data;
//   }
// );

export const fetchPokemonList = createAsyncThunk<any, string>(
  POKEMON__FETCH_LIST,
  async (limitAndOffset, { rejectWithValue }) => {
    const response = await fetch(`${URL_API}?${limitAndOffset}`);
    const data = await response.json();
    const basicPokemonData: Array<PokemonType> = data.results;
    const extendedPokemonDataPromises = basicPokemonData.map((basicData) => fetch(`${URL_API}/${basicData.name}`));
    return Promise.all(extendedPokemonDataPromises).then(extendedPokemonData => {
      return extendedPokemonData.map(item => item.json())
    }).then(async (extendedPokemonDataResponses) => {
      const extendedPokemonData = await Promise.all(extendedPokemonDataResponses);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(extendedPokemonData);
      }
      return extendedPokemonData;
    })
  }
);

const pokemonApiInitState = {
  dataByName: {} as Record<string, any | undefined>,
  statusByName: {} as Record<string, RequestState | undefined>,
  dataList: [] as any,
  statusList: {} as Record<any, RequestState | undefined>,
};

export const POKEMON_API__FETCH_POKEMON_BY_NAME = 'fetchPokemonByName.pending';
export const POKEMON_API__FETCH_POKEMON_BY_NAME__FULFILLED = 'fetchPokemonByName.fulfilled';
export const POKEMON_API__FETCH_POKEMON_BY_NAME__REJECTED = 'fetchPokemonByName.rejected';
export const POKEMON_API__FETCH_POKEMON_LIST__PENDING = 'fetchPokemonList.pending';
export const POKEMON_API__FETCH_POKEMON_LIST__FULFILLED = 'fetchPokemonList.fulfilled';
export const POKEMON_API__FETCH_POKEMON_LIST__REJECTED = 'fetchPokemonList.rejected';

export const pokemonApiSlice = createSlice({
  name: POKEMON_API,
  initialState: pokemonApiInitState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchPokemonByName.pending, (state, action) => {
    //   state.statusByName[action.meta.arg] = 'pending';
    // });

    // builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
    //   state.statusByName[action.meta.arg] = 'fulfilled';
    //   state.dataByName[action.meta.arg] = action.payload;
    // });

    // builder.addCase(fetchPokemonByName.rejected, (state, action) => {
    //   state.statusByName[action.meta.arg] = 'rejected';
    // });

    builder.addCase(fetchPokemonList.pending, (state, action) => {
      state.statusList[action.meta.arg] = 'pending';
    });

    builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
      state.statusList[action.meta.arg] = 'fulfilled';
      state.dataList = [ ...state.dataList, ...action.payload];
    });
    builder.addCase(fetchPokemonList.rejected, (state, action) => {
      state.statusList[action.meta.arg] = 'rejected';
    });
  },
});

export const selectStatusByName = (state: RootState, name: string) =>
  state.pokemonApi.statusByName[name];
export const selectDataByName = (state: RootState, name: string) =>
  state.pokemonApi.dataByName[name];

export const selectStatusList = (state: RootState, limitAndOffset: string) =>
  state.pokemonApi.statusList[limitAndOffset];
export const selectDataList = (state: RootState) => state.pokemonApi.dataList;
