import {
  TYPE_GET_POKEMON_LIST_PENDING,
  TYPE_GET_POKEMON_LIST_FULFILLED,
  TYPE_GET_POKEMON_LIST_REJECTED,
} from '../config/actionTypes';

const defaultState: any = {
  status: 'idle',
  pokemonResponse: {
    count: undefined,
    next: undefined,
    previous: undefined,
    results: undefined,
  },
  error: undefined,
};

export default function pokemonApiListReducer(
  state = defaultState,
  action: any
) {
  switch (action.type) {
    case TYPE_GET_POKEMON_LIST_PENDING:
      return {
        ...state,
        status: 'loading',
      };
    case TYPE_GET_POKEMON_LIST_FULFILLED:
      return {
        ...state,
        status: 'succeeded',
        pokemonResponse: action.payload.data,
      };
    case TYPE_GET_POKEMON_LIST_REJECTED:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    default:
      return state;
  }
}
