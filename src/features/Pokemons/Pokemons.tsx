import React, { useState, useEffect } from 'react';
import {
  FilterByName,
  FilterByType,
  LoadMorePokemons,
  PokemonItemToDisplay,
} from '..';
import { useAppSelector } from '../../hooks';
import { filterPokemonsByName } from '../../utils';
import './Pokemons.scss';

interface PokemonsProps {
  pokemons: Array<string>;
}

export function Pokemons({ pokemons }: PokemonsProps): JSX.Element {
  const [pokemonsToDisplay, setPokemonsToDisplay] =
    useState<Array<string>>(pokemons);

  const { filterByType, filterByName } = useAppSelector(
    (state) => state.pokemonApp
  );

  useEffect(() => {
    const pokemonsToDisplayFilteredByName = filterPokemonsByName(pokemons, filterByName);
    if (pokemonsToDisplayFilteredByName) {
      // pokemonsToDisplayFilteredByName.filter((pokemonName) => )
    }
    setPokemonsToDisplay(pokemonsToDisplayFilteredByName);

    //   const pokemonsTypes: Array<Array<string>> = pokemons.map(pokemon => extractPokemonTypeNames(pokemon));
    //   pokemons.filter((pokemonsTypes) => pokemonsTypes.map((pokemonTypes: Array<Array<string>>) => pokemonTypes.includes(filterByType)));
    //     //zwrócić tylko części wspólne w obu filtrach
  }, [filterByName, pokemons]);

  return (
    <>
      <section className="pokemons__filters">
        <FilterByType />
        <FilterByName />
      </section>
      <ul className="pokemons--unordered">
        {pokemonsToDisplay.map(PokemonItemToDisplay)}
      </ul>
      <LoadMorePokemons />
    </>
  );
}
