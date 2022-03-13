import React, { useEffect } from 'react';
import { useGetPokemonListQuery, useAppSelector } from '../../hooks';
import { LIMIT } from '../../config/constants';
import { LoadingIndicator, Pokemons } from '../../components';

export function PokemonsWrapper(): JSX.Element {
  const { offset } = useAppSelector((state) => state.pokemonApp);
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `limit=${LIMIT}&offset=${offset}`
  );

  useEffect(() => {}, [data]);

  if (isError) {
    return <>Error occured</>;
  }

  if (isLoading) {
    return (
      <>
        <Pokemons pokemons={data} />
        <LoadingIndicator />
      </>
    );
  }

  return <Pokemons pokemons={data} />;
}
