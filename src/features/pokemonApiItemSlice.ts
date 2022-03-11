import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from '../store';
import {
  POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_FULFILLED,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_PENDING,
  POKEMON_API_ITEM__GET_POKEMON_ITEM_REJECTED,
} from '../config/actionTypes';

type RequestState = 'pending' | 'fulfilled' | 'rejected';

//////////////////////sandbox

export const fetchPokemonByName = createAsyncThunk<any, string>(
  'pokemon/fetchByName',
  async (name, { rejectWithValue }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const fetchPokemonsWithLimitAndOffset = createAsyncThunk<any, any>(
  'pokemon/fetchWithLimitAndOffset',
  async (limitAndOffset, { rejectWithValue }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?${limitAndOffset}`
    );
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

///////////////////////

export const getPokemonItem = createAsyncThunk(
  POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
  async (itemUrl: string) => {
    const response = await axios.get(itemUrl);
    return response;
  }
);

const pokemonApiItemInitState = {
  dataByName: {} as Record<string, any | undefined>,
  statusByName: {} as Record<string, RequestState | undefined>,
  dataPokemons: {} as Record<any, any | undefined>,
  statusPokemons: {} as Record<any, RequestState | undefined>,
  // pokemonApiItem: {
  //   status: 'idle',
  //   data: {},
  //   error: null,
  // },
};

export const pokemonApiItemSlice = createSlice({
  name: 'pokemonApiItem',
  initialState: pokemonApiItemInitState,
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding pokemon name
    builder.addCase(fetchPokemonByName.pending, (state, action) => {
      state.statusByName[action.meta.arg] = 'pending';
    });
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.statusByName[action.meta.arg] = 'fulfilled';
      state.dataByName[action.meta.arg] = action.payload;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding pokemon name
    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
      state.statusByName[action.meta.arg] = 'rejected';
    });

    builder.addCase(
      fetchPokemonsWithLimitAndOffset.pending,
      (state, action) => {
        state.statusPokemons[action.meta.arg] = 'pending';
      }
    );

    builder.addCase(
      fetchPokemonsWithLimitAndOffset.fulfilled,
      (state, action) => {
        state.statusByName[action.meta.arg] = 'fulfilled';
        // state.dataPokemons[action.meta.arg] = action.payload;
        const newData: Array<string> = [];
        action.payload["results"].map((result: any) => newData.push(result.name))
        state.dataPokemons = {...state.dataPokemons, ...newData}
        console.log('state dataPokemons:', state.dataPokemons)
        for (let key in state.dataPokemons) {
          console.log(state.dataPokemons[key])
        }
      }
    );
    builder.addCase(
      fetchPokemonsWithLimitAndOffset.rejected,
      (state, action) => {
        state.statusPokemons[action.meta.arg] = 'rejected';
      }
    );
  },
});
//import for RootState in the store
// export const selectStatusByName = (state: RootState, name: string) =>
export const selectStatusByName = (state: any, name: string) =>

  state.pokemonApiItem.statusByName[name];
export const selectDataByName = (state: any, name: string) =>
  state.pokemonApiItem.dataByName[name];

export const selectStatusPokemons = (state: any, name: string) =>
  state.pokemonApiItem.statusByName[name];
export const selectDataPokemons = (state: any, name: string) =>
  state.pokemonApiItem.dataByName[name];

// {
//   'pokemonApiItem/getPokemonList/status/pending': (state, action) => {
//     state.pokemonApiItem = {
//       status: 'loading',
//       data: {},
//       error: null,
//     };
//   },
//   'pokemonApiItem/getPokemonList/status/fulfilled': (state, action) => {
//     state.pokemonApiItem = {
//       status: 'idle',
//       data: action.payload,
//       error: null,
//     };
//   },
//   'pokemonApiItem/getPokemonList/status/rejected': (state, action) => {
//     state.pokemonApiItem = {
//       status: 'idle',
//       data: {},
//       error: action.payload,
//     };
//   },
// },
// });

// export const getPokemonItem = createAsyncThunk(
//   POKEMON_API_ITEM__GET_POKEMON_ITEM_STATUS,
//   async (itemUrl: string) => {
//     const response = await axios.get(itemUrl);
//     return response;
//   }
// );

// const pokemonApiItemInitState = {
//   pokemonApiItem: {
//     status: 'idle',
//     data: {},
//     error: null,
//   },
// };

// export const pokemonApiItemSlice = createSlice({
//   name: 'pokemonApiItem',
//   initialState: pokemonApiItemInitState,
//   reducers: {},
//   extraReducers: {
//     "pokemonApiItem/getPokemonList/status/pending": (state, action) => {
//       state.pokemonApiItem = {
//         status: 'loading',
//         data: {},
//         error: null,
//       };
//     },
//     "pokemonApiItem/getPokemonList/status/fulfilled": (state, action) => {
//       state.pokemonApiItem = {
//         status: 'idle',
//         data: action.payload,
//         error: null,
//       };
//     },
//     "pokemonApiItem/getPokemonList/status/rejected": (state, action) => {
//       state.pokemonApiItem = {
//         status: 'idle',
//         data: {},
//         error: action.payload,
//       };
//     },
//   },
// });
