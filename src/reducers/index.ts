import { combineReducers } from 'redux';
// import filterPokemonByNameReducer from './filterPokemonByNameReducer';
// import filterPokemonByTypeReducer from './filterPokemonByTypeReducer';
import pokemonApiItemReducer from './pokemonApiItemReducer';
import pokemonApiListReducer from './pokemonApiListReducer';
import pokemonAppReducer from './pokemonAppReducer';

const rootReducer = combineReducers({
  // filterPokemonByName: filterPokemonByNameReducer,
  // filterPokemonByType: filterPokemonByTypeReducer,
  pokemonApiItem: pokemonApiItemReducer,
  pokemonApiList: pokemonApiListReducer,
  pokemonApp: pokemonAppReducer,
});

export default rootReducer;
