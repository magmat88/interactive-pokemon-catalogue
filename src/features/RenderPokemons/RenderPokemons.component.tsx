import React from 'react';
import { useGetPokemonListQuery, useAppSelector } from '../../hooks';
import { selectPokemonNames } from '../../utils';
import { LoadingIndicator, Pokemons } from '../../components';

export function RenderPokemons(): JSX.Element {
  //   const dispatch = useAppDispatch();
  const { limit, offset } = useAppSelector((state) => state.pokemonApp);
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `limit=${limit}&offset=${offset}`
  );

  return isError ? (
    <>Error occured</>
  ) : isLoading ? (
    <LoadingIndicator />
  ) : data ? (
    <Pokemons pokemons={selectPokemonNames(data.results)} />
  ) : (
    <>No data</>
  );
}
