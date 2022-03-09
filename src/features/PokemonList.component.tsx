import React from 'react';
import { PokemonListItem } from './PokemonListItem.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  removePokemonWithVisibleDetails,
  addPokemonWithVisibleDetails,
  addPokemonDetails,
  changePokemonTypeFilter,
  changePokemonNameFilter,
  setCurrentListUrl,
} from './pokemonAppSlice';
import { getpokemonApiList } from './pokemonApiListSlice';
import { getPokemonItem } from './pokemonApiItemSlice';
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
