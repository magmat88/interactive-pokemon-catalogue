import { combineReducers } from 'redux';
import pokemonApiItemReducer from './pokemonApiItemReducer';
import pokemonApiListReducer from './pokemonApiListReducer';
import pokemonAppReducer from './pokemonAppReducer';

const rootReducer = combineReducers({
  pokemonApiItem: pokemonApiItemReducer,
  pokemonApiList: pokemonApiListReducer,
  pokemonApp: pokemonAppReducer,
});

export default rootReducer;
