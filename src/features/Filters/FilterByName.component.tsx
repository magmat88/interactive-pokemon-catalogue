import React from 'react';
import { useAppDispatch } from '../../hooks';
import { changePokemonNameFilter } from '../pokemonAppSlice';
import './FilterByName.scss';

export function FilterByName(): JSX.Element {
  const dispatch = useAppDispatch();
  function onChangeUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(changePokemonNameFilter(event.target.value));
  }

  return (
    <section className="filterByName">
      <div className="filterByName__container">
        <input
          placeholder="Filter by name"
          className="filterByName__input filterByName__input--standard"
          onChange={onChangeUserInput}
          type="text"
        />
      </div>
    </section>
  );
}
