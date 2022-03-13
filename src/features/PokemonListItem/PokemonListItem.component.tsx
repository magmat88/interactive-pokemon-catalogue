import React, { useState } from 'react';
import { PokemonTypeName } from '../';
import { PokemonDataType } from '../../config/state';
import './PokemonListItem.scss';

interface PokemonListItemProps {
  pokemon: PokemonDataType;
}

export function PokemonListItem({
  pokemon,
}: PokemonListItemProps): JSX.Element {
  const [areDetailsVisible, setAreDetailsVisible] = useState<boolean>(false);

  return (
    <div
      className="pokemonList__listItem--visible pokemonListItem"
      onClick={() => setAreDetailsVisible(!areDetailsVisible)}
    >
      <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemon.sprites['front_default']}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {pokemon.types.map((pokemonTypesObject) => {
            return <PokemonTypeName typeName={pokemonTypesObject.type.name} />;
          })}
        </figcaption>
      </figure>
      {areDetailsVisible && (
        <article>
          <div>
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
          </div>
        </article>
      )}
    </div>
  );
}
