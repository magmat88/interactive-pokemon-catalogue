import React from 'react';
import { useGetPokemonByNameQuery } from '../../hooks';
import { PokemonListItem } from '../../features';
import { LoadingIndicator } from '../../components/';
import './RenderPokemonItem.scss';

interface RenderPokemonItemProps {
  name: string;
}

export function RenderPokemonItem({
  name,
}: RenderPokemonItemProps): JSX.Element {
  const { data, isError, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <section className="pokemonItem">
      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <PokemonListItem pokemon={data} />
      ) : null}
    </section>
  );
}
