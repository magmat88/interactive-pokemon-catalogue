import {
  TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS,
  TYPE_REMOVE_POKEMON_WITH_VISIBLE_DETAILS,
  TYPE_ADD_POKEMON_DETAILS,
  TYPE_SET_CURRENT_LIST_URL,
  TYPE_CHANGE_POKEMON_NAME_FILTER,
  TYPE_CHANGE_POKEMON_TYPE_FILTER,
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

const defaultState: DefaultStateProps = {
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

export default function pokemonAppReducer(state = defaultState, action: any) {
  switch (action.type) {
    case TYPE_ADD_POKEMON_WITH_VISIBLE_DETAILS:
      return {
        ...state,
        pokemonsWithVisibleDetails: {
          ...state.pokemonsWithVisibleDetails.concat(action.payload),
        },
      };
    case TYPE_REMOVE_POKEMON_WITH_VISIBLE_DETAILS:
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
    case TYPE_ADD_POKEMON_DETAILS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case TYPE_SET_CURRENT_LIST_URL:
      return {
        ...state,
        currentListUrl: action.payload,
      };
    case TYPE_CHANGE_POKEMON_NAME_FILTER:
      return {
        ...state,
        filterByName: action.payload,
      };
    case TYPE_CHANGE_POKEMON_TYPE_FILTER:
      return {
        ...state,
        filterByType: action.payload,
      };
    default:
      return state;
  }
}
