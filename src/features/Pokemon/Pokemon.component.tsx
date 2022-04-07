import React, { useState } from 'react';
import { PokemonTypeName } from '..';
import { PokemonDataType } from '../../config/state';
import './Pokemon.scss';

interface PokemonProps {
  pokemon: PokemonDataType;
}

export function Pokemon({ pokemon }: PokemonProps): JSX.Element {
  const [areDetailsVisible, setAreDetailsVisible] = useState<boolean>(false);

  function renderDetails(): JSX.Element {
    return (
      <div className="pokemonDetails">
        <p>Height: {pokemon.height} m</p>
        <p>Weight: {pokemon.weight} kg</p>
      </div>
    );
  }

  function seeDetails(): JSX.Element {
    return (
      <div>
        <p>+</p>
        <p>See details</p>
      </div>
    );
  }

  return (
    <div
      className="pokemon"
      onClick={() => setAreDetailsVisible(!areDetailsVisible)}
    >
      <h1 className="pokemon__text--label">{pokemon.name}</h1>
      <figure className="pokemon__figure">
        <img
          className="pokemon__img--small"
          src={`${pokemon.sprites['front_default']}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemon__figcaption">
          {pokemon.types.map(PokemonTypeName)}
        </figcaption>
      </figure>

      <article className="pokemon__description">
        {areDetailsVisible ? renderDetails() : seeDetails()}
      </article>
    </div>
  );
}
