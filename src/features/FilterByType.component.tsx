import React, { useEffect } from 'react';
import { POKEMON_SELECT_TYPES } from '../config/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changePokemonTypeFilter } from './pokemonAppSlice';
import './FilterByType.scss';

export function FilterByType(props: any): JSX.Element {
  const filterByType = useSelector(
    (state: any) => state.pokemonApp.filterByType
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [changePokemonTypeFilter, filterByType]);

  function changeTypeFilter(event: any): void {
    dispatch(changePokemonTypeFilter(event.target.value as string));
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
