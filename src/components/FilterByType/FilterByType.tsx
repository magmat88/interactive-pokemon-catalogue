import React, { useEffect } from 'react';
// import { PokemonType } from '../../config/state';
import { POKEMON_SELECT_TYPES } from '../../config/constants';
import { connect } from 'react-redux';
import { changePokemonTypeFilter } from '../../actions';
import './FilterByType.scss';

// interface FilterByTypeProps {
//   pokemons: Array<PokemonType>;
// }

export function FilterByType({ filterPokemonByType }: any): JSX.Element {
  const { filter } = filterPokemonByType;

  // useEffect(() => {
  //   changePokemonTypeFilter(filter);
  // }, [filter, changePokemonTypeFilter]);

  function changeTypeFilter(event: any): void {
    changePokemonTypeFilter(event.target.value);
  }

  return (
    <section className="filterByType">
      <div className="filterByType___container">
        <select
          onChange={changeTypeFilter}
          className="filterByType__input filterByType__input--standard"
        >
          <option value="">ALL</option>

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

const mapStateToProps = (state: any) => {
  return {
    filterPokemonByType: state.filterPokemonByType,
  };
};

export default connect(mapStateToProps, changePokemonTypeFilter)(FilterByType);
