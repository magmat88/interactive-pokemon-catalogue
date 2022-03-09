import {
  TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS,
  TYPE_ADD_POKEMON_DETAILS,
  TYPE_SET_CURRENT_LIST_URL,
  TYPE_CHANGE_POKEMON_NAME_FILTER,
  TYPE_CHANGE_POKEMON_TYPE_FILTER,
} from '../config/actionTypes';

interface DefaultStateProps {
  pokemonsWithVisibleDetails: {};
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

const defaultState: DefaultStateProps = {
  pokemonsWithVisibleDetails: {},
  filterByName: '',
  filterByType: 'ALL',
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

export default function pokemonAppReducer(state = defaultState, action: any) {
  switch (action.type) {
    case TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS:
      return {
        ...state,
        pokemonsWithVisibleDetails: {
          ...state.pokemonsWithVisibleDetails,
          [action.payload]: true,
        },
      };
    case TYPE_ADD_POKEMON_DETAILS:
      return {
        ...state,
        pokemons: [
          ...state.pokemons,
          action.payload,
        ],
      };
    case TYPE_SET_CURRENT_LIST_URL:
      return {
        ...state,
        currentListUrl: action.payload,
      };
    case TYPE_CHANGE_POKEMON_NAME_FILTER:
      return action.filterByName;
    case TYPE_CHANGE_POKEMON_TYPE_FILTER:
      return action.filterByType;
    default:
      return state;
  }
}
