import React from 'react';
import { PokemonType } from '../../config/state';
import './PokemonDetails.scss';

interface PokemonDetailsProps {
  pokemon: PokemonType;
}

export function PokemonDetails({ pokemon }: PokemonDetailsProps): JSX.Element {
  return (
    <article>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.types}</h2>
      <figure>
        <img src={require(`${pokemon.url}`)} alt={`${pokemon.name}`} />
      </figure>
      <p>
        <strong>Height:</strong> {pokemon.height} m 
        <strong>Weight:</strong> {pokemon.weight} kg 
        <strong>Sprite:</strong> {pokemon.sprite}
      </p>
      <p>{pokemon.description}</p>
    </article>
  );
}
