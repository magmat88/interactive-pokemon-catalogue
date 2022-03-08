import React, { useState, useEffect } from 'react';
import { PokemonType } from '../../config/state';
import './PokemonDetails.scss';

interface PokemonDetailsProps {
  pokemon: PokemonType;
}

export function PokemonDetails({ pokemonDetails }: any): JSX.Element {
  return (
    <article className="pokemonDetails">
      <p>
        <strong>Height: </strong>{pokemonDetails.height} m
         <strong>Weight: </strong>{pokemonDetails.weight} kg
      </p>
    </article>
  );
}
