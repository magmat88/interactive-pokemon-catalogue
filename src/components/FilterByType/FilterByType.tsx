import React from 'react';
import { PokemonType } from '../../config/state';
import './FilterByType.scss';

interface FilterByTypeProps {
  pokemons: Array<PokemonType>;
}

export function FilterByType({ pokemons }: FilterByTypeProps): JSX.Element {
  return (
    <section className="filterByType">
      <div className="filterByType___container">
        <select
          onChange={() => {
            console.log('on change value filter by type');
          }}
          className="filterByType__input filterByType__input--standard"
        >
          <option value="">Select type</option>
          <option value="">Type #1</option>
          <option value="">Type #2</option>
          <option value="">Type #3</option>
        </select>
      </div>
    </section>
  );
}
