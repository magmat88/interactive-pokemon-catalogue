import React from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails } from '..';
import './PokemonListItem.scss';

interface PokemonListItemProps {
  pokemon: PokemonType;
}

function handleOnClickPokemonListItem(event: any) {
  console.log('on click show Pokemon Details');
}

export function PokemonListItem({
  pokemon,
}: PokemonListItemProps): JSX.Element {
  return (
    <li
      className="pokemonListItem"
      key={pokemon.name}
      onClick={handleOnClickPokemonListItem}
    >
      <figure className="pokemonListItem__figure">
        {/* <img src={require(`${pokemon.url}`)} alt={`${pokemon.name}`} /> */}
        <img
          className="pokemonListItem__img--small"
          src={"../../images/pokemonFavicon.svg}"`)"}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__label">
          <h1>Name:{pokemon.name}</h1>
          <p>Sprite: {pokemon.sprite}</p>
          <p>Types: {pokemon.types}</p>
        </figcaption>
      </figure>
    </li>
  );
}
