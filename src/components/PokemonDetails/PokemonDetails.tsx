import React from 'react';
import { PokemonType } from '../../config/state';
import './PokemonDetails.scss';

interface PokemonDetailsProps {
  pokemon: PokemonType;
}

export function PokemonDetails({ pokemon }: PokemonDetailsProps): JSX.Element {
  return (
    <article className="pokemonDetails">
      <p>
        <strong>Height: </strong>{pokemon.height} m
         <strong>Weight: </strong>{pokemon.weight} kg
      </p>
    </article>
  );
}
