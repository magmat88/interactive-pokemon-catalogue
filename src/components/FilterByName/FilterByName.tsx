import React from 'react';
import { PokemonType } from '../../config/state';
import './FilterByName.scss';

interface FilterByNameProps {
  pokemons: Array<PokemonType>;
}

export function FilterByName({ pokemons }: FilterByNameProps): JSX.Element {
  return (
    <section className="filterByName">
      <div className="filterByName__container">
        <input
          placeholder="Filter by name"
          className="filterByName__input filterByName__input--standard"
          onChange={(event: any) => {
            const value = (event.target as any).value;
            console.log(value);
            return value;
          }}
        />
      </div>
      {/* <div className="filterByName__container">
        <button
          className="filterByName__btn filterByName__btn--light"
          onClick={() => {
            console.log('on click filter by name');
          }}
        >
          Filter
        </button>
      </div> */}
    </section>
  );
}
