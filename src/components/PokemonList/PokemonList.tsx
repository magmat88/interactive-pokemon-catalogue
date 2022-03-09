import React from 'react';
import { PokemonListItem } from '../../features/PokemonListItem.component';
import './PokemonList.scss';

export function PokemonList({ pokemons }: any): JSX.Element {
  return (
    <section id="pokemon-list" className="pokemonList">
      <ul className="pokemonList--unordered">
        {[...pokemons].map((pokemon) => {
          return (
            <li
              key={pokemon.name}
              className="pokemonList__listItem"
            >
              <PokemonListItem pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
