import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import {
  configureStore,
} from '@reduxjs/toolkit';
import { pokemonApiItemSlice } from './features/pokemonApiItemSlice';
import { pokemonApiListSlice } from './features/pokemonApiListSlice';
import { pokemonAppSlice } from './features/pokemonAppSlice';

const middlewares = [promise];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const reducer = {
    pokemonApiItem: pokemonApiItemSlice.reducer,
    pokemonApiList: pokemonApiListSlice.reducer,
    pokemonApp: pokemonAppSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;
