const defaultState = {
  status: 'idle',
  pokemonResponse: undefined,
  error: undefined,
};

export default function pokemonListReducer(state = defaultState, action: any) {
    switch (action.type) {
        case "GET_POKEMON_LIST_PENDING":
      return {
        ...state,
        status: "loading",
      };
    case "GET_POKEMON_LIST_FULFILLED":
      return {
        ...state,
        status: "succeeded",
        pokemonResponse: action.payload.data,
      };
    case "GET_POKEMON_LIST_REJECTED":
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    default:
      return state;
  }
}
