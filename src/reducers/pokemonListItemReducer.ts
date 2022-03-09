const defaultState = {
  status: 'idle',
  pokemonListLIST_ITEM: undefined,
  error: undefined,
};

export default function PokemonListLIST_ITEMReducer(
  state = defaultState,
  action: any
) {
  switch (action.type) {
    case 'GET_POKEMON_LIST_ITEM_PENDING':
      return {
        ...state,
        status: 'loading',
      };
    case 'GET_POKEMON_LIST_ITEM_FULFILLED':
      return {
        ...state,
        status: 'succeeded',
        pokemonResponse: action.payload.data,
      };
    case 'GET_POKEMON_LIST_ITEM_REJECTED':
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    default:
      return state;
  }
}
