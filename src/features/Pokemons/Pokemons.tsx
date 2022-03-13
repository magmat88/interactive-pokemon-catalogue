import React, { useState, useEffect } from 'react';
import {
  FilterByName,
  FilterByType,
  LoadMorePokemons,
  PokemonItemToDisplay,
} from '..';
import { useAppSelector } from '../../hooks';
import { filterPokemonsByName } from '../../utils';
import { PokemonTypesNamesObject } from '../../config/state';

import './Pokemons.scss';

interface PokemonsProps {
  pokemons: Array<string>;
}

export function Pokemons({ pokemons }: PokemonsProps): JSX.Element {
  const [pokemonsToDisplay, setPokemonsToDisplay] =
    useState<Array<string>>(pokemons);

  const { filterByType, filterByName, pokemonsTypesNames } = useAppSelector(
    (state) => state.pokemonApp
  );

  function filterPokemonsByType(
    pokemonsTypesNames: Array<PokemonTypesNamesObject>,
    filterByType: string
  ): Array<string> {
    const filteredPokemonsTypesNames = pokemonsTypesNames.filter(
      (pokemonTypesNamesObject) =>
        pokemonTypesNamesObject.pokemonTypesNames.includes(filterByType)
    );
    return filteredPokemonsTypesNames.map(
      (filteredPokemonTypesNames) => filteredPokemonTypesNames.pokemonName
    );
  }

  function getCommonElementsFromArrays(
    a: Array<string>,
    b: Array<string>
  ): Array<string> {
    return a.filter((item) => b.indexOf(item) !== -1);
  }

  useEffect(() => {
    const pokemonsToDisplayFilteredByName = filterPokemonsByName(
      pokemons,
      filterByName
    );
    const pokemonsToDisplayFilteredByType = !filterByType ? pokemons : filterPokemonsByType(
      pokemonsTypesNames,
      filterByType
    );
    const pokemonsToDisplayFilteredByNameAndType = getCommonElementsFromArrays(
      pokemonsToDisplayFilteredByName,
      pokemonsToDisplayFilteredByType
    );
    setPokemonsToDisplay(pokemonsToDisplayFilteredByNameAndType);
  }, [filterByName, filterByType, pokemonsTypesNames, pokemons]);

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
