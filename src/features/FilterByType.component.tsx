import React, { useEffect } from 'react';
import { POKEMON_SELECT_TYPES } from '../config/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  removePokemonWithVisibleDetails,
  addPokemonWithVisibleDetails,
  addPokemonDetails,
  changePokemonTypeFilter,
  changePokemonNameFilter,
  setCurrentListUrl,
} from './pokemonAppSlice';
import { getpokemonApiList } from './pokemonApiListSlice';
import { getPokemonItem } from './pokemonApiItemSlice';
import './FilterByType.scss';

export function FilterByType({
  changePokemonTypeFilter,
  pokemonApp,
}: any): JSX.Element {

  useEffect(() => {}, [changePokemonTypeFilter, pokemonApp]);

  function changeTypeFilter(event: any): void {
    changePokemonTypeFilter(event.target.value as string);
  }

  return (
    <section className="filterByType">
      <div className="filterByType___container">
        <select
          onChange={changeTypeFilter}
          className="filterByType__input filterByType__input--standard"
        >
          <option value="">FILTER BY TYPE</option>

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

// const mapStateToProps = (state: any) => {
//   return {
//     pokemonApp: state.pokemonApp,
//   };
// };

// export default connect(mapStateToProps, changePokemonTypeFilter)(FilterByType);
