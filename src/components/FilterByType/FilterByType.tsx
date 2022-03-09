import React from 'react';
import { PokemonType } from '../../config/state';
import { POKEMON_SELECT_TYPES } from '../../config/constants';
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

          {(
            Object.keys(POKEMON_SELECT_TYPES) as Array<
              keyof typeof POKEMON_SELECT_TYPES
            >
          ).map((key) => {
            return (
              <option value={[POKEMON_SELECT_TYPES[key]]}>
                {POKEMON_SELECT_TYPES[key]}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
