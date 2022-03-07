import React from 'react';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { pokemons } from './pokemons';

export const rootReducer = combineReducers({
  pokemons,
//   router: connectRouter(history),
});
