const defaultState = {
  currentPageUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
};

export default function pokemonListPaginationReducer(
  state = defaultState,
  action: any
) {
  switch (action.type) {
    case 'SET_CURRENT_PAGE_URL':
      return {
        ...state,
        currentPageUrl: action.payload,
      };
    default:
      return state;
  }
}
