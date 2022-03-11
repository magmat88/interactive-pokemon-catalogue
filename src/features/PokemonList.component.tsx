import React from 'react';
import { useGetPokemonByNameQuery } from '../hooks';
import { PokemonListItem } from './PokemonListItem.component';
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator';
import './PokemonList.scss';

export function PokemonList({ name, key }: any): JSX.Element {
  const { data, isError, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <section className="pokemonList">
      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <ul className="pokemonList--unordered">
          <li key={key} className="pokemonList__listItem">
            <PokemonListItem pokemon={data} />
          </li>
        </ul>
      ) : null}
    </section>
  );
}
