import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePokemonNameFilter } from '../../actions';
import './FilterByName.scss';

export function FilterByName({
  changePokemonNameFilter,
  pokemonApp,
}: any): JSX.Element {

  useEffect(() => {}, [changePokemonNameFilter, pokemonApp]);

  function changeNameFilter(event: any): void {
    changePokemonNameFilter(event.target.value);
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

const mapStateToProps = (state: any) => {
  return {
    pokemonApp: state.pokemonApp,
  };
};

export default connect(mapStateToProps, changePokemonNameFilter)(FilterByName);
