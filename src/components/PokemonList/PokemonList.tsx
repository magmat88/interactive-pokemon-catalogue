import React from 'react';
import { PokemonType } from '../../config/state';
import { PokemonListItem } from '..';
import './PokemonList.scss';

interface PokemonListProps {
  pokemons: Array<PokemonType>;
}

export function PokemonList({ pokemons }: PokemonListProps): JSX.Element {
  return (
    <section id="pokemon-list" className="pokemonList">
      <ul className="pokemonList--unordered">
        {[...pokemons].slice(0, 20).map((pokemon) => {
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
