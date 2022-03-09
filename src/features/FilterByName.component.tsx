import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePokemonNameFilter } from './pokemonAppSlice';
import './FilterByName.scss';

export function FilterByName(props: any): JSX.Element {
  const filterByName = useSelector(
    (state: any) => state.pokemonApp.filterByName
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [changePokemonNameFilter, filterByName]);

  function changeNameFilter(event: any): void {
    dispatch(changePokemonNameFilter(event.target.value));
  }

  return (
    <section className="filterByName">
      <div className="filterByName__container">
        <input
          placeholder="Filter by name"
          className="filterByName__input filterByName__input--standard"
          onChange={changeNameFilter}
        />
      </div>
    </section>
  );
}
