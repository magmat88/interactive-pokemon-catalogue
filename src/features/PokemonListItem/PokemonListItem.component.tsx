import React, { useState, useEffect } from 'react';
import { extractPokemonTypeNames } from '../../utils';
import { PokemonTypeName } from './PokemonTypeName.component';
import './PokemonListItem.scss';

interface PokemonListItemProps {
  pokemon: any;
}

export function PokemonListItem({
  pokemon,
}: PokemonListItemProps): JSX.Element {
  const [areDetailsVisible, setAreDetailsVisible] = useState<Boolean>(false);
  const pokemonTypesNames = extractPokemonTypeNames(pokemon);
  

  return (
    <div className="pokemonList__listItem--visible pokemonListItem" onClick={()=>setAreDetailsVisible(!areDetailsVisible)}>
      <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemon.sprites['front_default']}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {pokemonTypesNames.map(PokemonTypeName)}
        </figcaption>
      </figure>
      { areDetailsVisible && 
        <article>
        <div>
          <p>Height: {pokemon.height} m</p>
          <p>Weight: {pokemon.weight} kg</p>
        </div>
      </article>}
    </div>
  );
}
