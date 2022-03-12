import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePokemonTypeFilter } from '../pokemonAppSlice';
import { POKEMON_SELECT_TYPES } from '../../config/constants';
import './FilterByType.scss';

export function FilterByType(): JSX.Element {
  const dispatch = useAppDispatch();
  const { filterByType } = useAppSelector((state) => state.pokemonApp);
  function onChangeSelectOption(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    dispatch(changePokemonTypeFilter(event.target.value as string));
  }

  return (
    <section className="filterByType">
      <div className="filterByType___container">
        <select
          onChange={onChangeSelectOption}
          className="filterByType__input filterByType__input--standard"
          value={filterByType}
        >
          <option value="">ALL TYPES</option>

          {(
            Object.keys(POKEMON_SELECT_TYPES) as Array<
              keyof typeof POKEMON_SELECT_TYPES
            >
          ).map((key) => {
            return (
              <option key={key} value={[POKEMON_SELECT_TYPES[key]]}>
                {POKEMON_SELECT_TYPES[key]}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
