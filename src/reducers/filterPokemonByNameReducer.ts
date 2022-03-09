import { TYPE_CHANGE_POKEMON_NAME_FILTER } from '../config/actionTypes';

const defaultState: any = {
  filter: '',
};

export default function filterPokemonByNameReducer(
  state = defaultState,
  action: any
) {
  // switch (action.type) {
  //   case TYPE_CHANGE_POKEMON_NAME_FILTER:
  //     return action.filter;
  //   default:
  //     return state;
  // }
}
