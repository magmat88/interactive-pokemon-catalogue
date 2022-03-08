import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID } from '../config/actionTypes';
export const FETCH_POKEMON_API = 'FETCH_POKEMON_API';
const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST';

// const initialState = {
//   results: [],
//   name: '',
//   url: '',
// };

// export const pokemons = (state = initialState, action: any = {}) => {
//   switch (action.type) {
//     case RECEIVE_POKEMON_LIST:
//       return {
//         ...state,
//         results: action.results,
//       };

//     default:
//       return state;
//   }
// };

// export const pokemons = (pokemons = [], action: any) => {
//   switch (action.type) {
//     case GET_ALL_POKEMONS:
//       return action.payload;
//     case GET_POKEMON_BY_ID:
//       return pokemons.filter((pokemon: any) => pokemon._id) === action.payload;
//     default:
//       return pokemons;
//   }
// };


