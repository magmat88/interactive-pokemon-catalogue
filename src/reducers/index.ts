import React from 'react';
import { combineReducers } from 'redux';
import pokemonListItemReducer from './pokemonListItemReducer';
import pokemonListPaginationReducer from './pokemonListPaginationReducer';
import pokemonListReducer from './pokemonListReducer';

const rootReducer = combineReducers({
  pokemonListItemReducer,
  pokemonListPaginationReducer,
  pokemonListReducer
});

export default rootReducer;
