import {
  TYPE_SET_CURRENT_LIST_URL,
  TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS,
} from '../config/actionTypes';

interface DefaultStateProps {
  pokemonWithVisibleDetails: {};
  currentListUrl: string;
}

const defaultState: DefaultStateProps = {
  pokemonWithVisibleDetails: {},
  currentListUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
};

export default function pokemonAppReducer(state = defaultState, action: any) {
  switch (action.type) {
    case TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS:
      return {
        ...state,
        pokemonWithVisibleDetails: {
          ...state.pokemonWithVisibleDetails,
          [action.payload]: true,
        },
      };
    case TYPE_SET_CURRENT_LIST_URL:
      return {
        ...state,
        currentListUrl: action.payload,
      };
    default:
      return state;
  }
}
