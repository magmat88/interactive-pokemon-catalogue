import React from 'react';
import { useGetPokemonByNameQuery } from '../../hooks';
import { PokemonListItem } from '../PokemonListItem/PokemonListItem.component';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import './PokemonList.scss';
//pokemon by name
export function PokemonList({ name, key }: any): JSX.Element {
  const { data, isError, isLoading } = useGetPokemonByNameQuery(name);

  function EmptyList(): JSX.Element {
    return <>There are no pokemons of selected type. Load more pokemons.</>;
  }

  return (
    // TODO: this should be not a list
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
      ) : <EmptyList />}
    </section>
  );
}
