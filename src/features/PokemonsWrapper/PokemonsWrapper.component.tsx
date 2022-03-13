import React, { useEffect } from 'react';
import { useGetPokemonListQuery, useAppSelector } from '../../hooks';
import { LoadingIndicator, Pokemons } from '../../components';

export function PokemonsWrapper(): JSX.Element {
  const { limit, offset } = useAppSelector((state) => state.pokemonApp);
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `limit=${limit}&offset=${offset}`
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return <>Error occured</>;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return <Pokemons pokemons={data} />;
}
