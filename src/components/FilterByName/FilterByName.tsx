import React, { useEffect } from 'react';
// import { PokemonType } from '../../config/state';
import { connect } from 'react-redux';
import { changePokemonNameFilter } from '../../actions';
import './FilterByName.scss';

// interface FilterByNameProps {
//   pokemons: Array<PokemonType>;
// }

export function FilterByName({ changePokemonNameFilter,
   // pokemonApp
}: any): JSX.Element {
  // const { filterByName } = pokemonApp;

  // useEffect(() => {
  //   changePokemonNameFilter(filter);
  // }, [ filterByName, changePokemonNameFilter]);

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


const mapStateToProps = (state: any) => {
  return {
    pokemonApp: state.pokemonApp,
  };
};

export default connect(mapStateToProps, changePokemonNameFilter)(FilterByName);
