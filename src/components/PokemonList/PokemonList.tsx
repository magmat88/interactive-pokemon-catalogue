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
          console.log(pokemon.url)
          return (
              <PokemonListItem pokemon={pokemon} />
          );
        })}
      </ul>
      <button className="pokemonList__btn pokemonList__btn--light"
        onClick={() => {
          console.log('load more Pokemons on click');
        }}
      >
        Load more Pokemons
      </button>
    </section>
  );
}
