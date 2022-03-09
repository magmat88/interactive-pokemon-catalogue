import {
  TYPE_GET_POKEMON_ITEM_PENDING,
  TYPE_GET_POKEMON_ITEM_FULFILLED,
  TYPE_GET_POKEMON_ITEM_REJECTED,
} from '../config/actionTypes';

const defaultState = {
  status: 'idle',
  pokemonItemResponse: undefined,
  error: undefined,
};

export default function PokemonItemReducer(state = defaultState, action: any) {
  switch (action.type) {
    case TYPE_GET_POKEMON_ITEM_PENDING:
      return {
        ...state,
        status: 'loading',
      };
    case TYPE_GET_POKEMON_ITEM_FULFILLED:
      return {
        ...state,
        status: 'succeeded',
        pokemonItemResponse: action.payload.data,
      };
    case TYPE_GET_POKEMON_ITEM_REJECTED:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    default:
      return state;
  }
}
