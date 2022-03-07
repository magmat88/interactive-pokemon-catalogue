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
        <input placeholder="Pokemon name" className="filterByName__input filterByName__input--standard" value="" />
      </div>
      <div className="filterByName__container filterByName__container--without-jumping">
        <button
          className="filterByName__btn filterByName__btn--light"
          onClick={() => {
            console.log('on click filter by name');
          }}
        >
          Filter By Name
        </button>
      </div>
    </section>
  );
}
