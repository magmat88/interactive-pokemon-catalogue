import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffset } from '../pokemonAppSlice';
import { COUNT_PER_SINGLE_REQUEST } from '../../config/constants';
import './LoadMorePokemons.scss';

export function LoadMorePokemons() {
  const dispatch = useAppDispatch();
  const { offset } = useAppSelector((state) => state.pokemonApp);

  function onLoadMorePokemons() {
    const increasedOffset = offset + COUNT_PER_SINGLE_REQUEST;
    dispatch(changeOffset(increasedOffset));
  }

  return (
    <div className="loadMorePokemons__btn--container">
      <button
        className="loadMorePokemons__btn loadMorePokemons__btn--light-no-border"
        onClick={onLoadMorePokemons}
      >
        Load more Pokemons
      </button>
    </div>
  );
}
