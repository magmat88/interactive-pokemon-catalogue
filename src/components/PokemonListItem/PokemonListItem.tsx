import React, { Fragment } from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails } from '..';
import './PokemonListItem.scss';

// interface PokemonListItemProps {
//   pokemon: PokemonType;
// }


export function PokemonListItem({
  pokemon,
}: any): JSX.Element {
  return (
    <Fragment      
    >
      <figure className="pokemonListItem__figure">
        {/* <img src={require(`${pokemon.url}`)} alt={`${pokemon.name}`} /> */}
        <img
          className="pokemonListItem__img--small"
          src={require("../../images/pokemonExample.png")}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
          {/* <p className="pokemonListItem__text--description">Sprite: {pokemon.sprite}</p>
          <p className="pokemonListItem__text--description">Types: {pokemon.types}</p> */}
        </figcaption>
      </figure>
    </Fragment>
  );
}
