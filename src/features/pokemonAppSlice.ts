import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    POKEMON_APP__ADD_POKEMON_DETAILS,
    POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS,
    POKEMON_APP__CHANGE_POKEMON_NAME_FILTER,
    POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER,
    POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
    POKEMON_APP__SET_CURRENT_LIST_URL
} from '../config/actionTypes';

interface DefaultStateProps {
  pokemonsWithVisibleDetails: Array<string>;
  filterByName: string;
  filterByType: string;
  pokemons: [
    {
      name: string | undefined;
      height: number | undefined;
      sprite: string | undefined;
      types: Array<string | undefined>;
      weight: number | undefined;
      visibility: Boolean;
    }
  ];
  currentListUrl: string;
}


export default function pokemonAppReducer(state = defaultState, action: any) {
  switch (action.type) {
    case POKEMON_APP__ADD_POKEMON_WITH_VISIBLE_DETAILS:
      return {
        ...state,
        pokemonsWithVisibleDetails: {
          ...state.pokemonsWithVisibleDetails.concat(action.payload),
        },
      };
    case POKEMON_APP__REMOVE_POKEMON_WITH_VISIBLE_DETAILS:
      const index = state.pokemonsWithVisibleDetails.indexOf(action.payload);
      return (
        index !== -1 && {
          ...state,
          pokemonsWithVisibleDetails: [
            ...state.pokemonsWithVisibleDetails.slice(0, index),
            ...state.pokemonsWithVisibleDetails.slice(index + 1),
          ],
        }
      );
    case POKEMON_APP__ADD_POKEMON_DETAILS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case POKEMON_APP__SET_CURRENT_LIST_URL:
      return {
        ...state,
        currentListUrl: action.payload,
      };
    case POKEMON_APP__CHANGE_POKEMON_NAME_FILTER:
      return {
        ...state,
        filterByName: action.payload,
      };
    case POKEMON_APP__CHANGE_POKEMON_TYPE_FILTER:
      return {
        ...state,
        filterByType: action.payload,
      };
    default:
      return state;
  }
}

/////////////
export function removePokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: TYPE_REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}

export function addPokemonWithVisibleDetails(pokemonName: string) {
  return {
    type: TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS,
    payload: pokemonName,
  };
}

export function addPokemonDetails(pokemonDetails: any) {
  return {
    type: TYPE_ADD_POKEMON_DETAILS,
    payload: pokemonDetails,
  };
}

export function setCurrentListUrl(listUrl: string) {
  return {
    type: TYPE_SET_CURRENT_LIST_URL,
    payload: listUrl,
  };
}

export function changePokemonNameFilter(filterByName: any) {
    return {
      type: TYPE_CHANGE_POKEMON_NAME_FILTER,
      payload: filterByName,
    };
  }

  export function changePokemonTypeFilter(filterByType: any) {
    return {
      type: TYPE_CHANGE_POKEMON_TYPE_FILTER,
      payload: filterByType,
    };
  }

export const fetchPokemons = createAsyncThunk(
  'pokemons/status',
  async (url: string) => {
    const response = await axios.get(url);
    return response;
  }
);

const pokemonAppInitState = {
    pokemonsWithVisibleDetails: [],
    filterByName: '',
    filterByType: '',
    pokemons: [
      {
        name: undefined,
        height: undefined,
        sprite: undefined,
        types: [],
        weight: undefined,
        visibility: false,
      },
    ],
    currentListUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
};

export const pokemonAppSlice = createSlice({
  name: 'pokemonApp',
  initialState: pokemonAppInitState,
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


///////////

// const defaultState: DefaultStateProps = {
//   pokemonsWithVisibleDetails: [],
//   filterByName: '',
//   filterByType: '',
//   pokemons: [
//     {
//       name: undefined,
//       height: undefined,
//       sprite: undefined,
//       types: [],
//       weight: undefined,
//       visibility: false,
//     },
//   ],
//   currentListUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
// };