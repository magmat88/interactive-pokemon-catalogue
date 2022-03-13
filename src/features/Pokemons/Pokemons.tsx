import React, { useState, useEffect } from 'react';
import { FilterByName, FilterByType, LoadMorePokemons } from '..';
import { PokemonItemToDisplay } from './PokemonItemToDisplay.component';
import { useAppSelector } from '../../hooks';
import {
  filterPokemonsByName,
  getCommonElementsFromArrays,
  filterPokemonsByType,
} from '../../utils';
import { PokemonDataType } from '../../config/state';
import './Pokemons.scss';

interface PokemonsProps {
  pokemons: Array<PokemonDataType>;
}

export function Pokemons({ pokemons }: PokemonsProps): JSX.Element {
  const [pokemonsToDisplay, setPokemonsToDisplay] =
    useState<Array<PokemonDataType>>(pokemons);

  const { filterByType, filterByName } = useAppSelector(
    (state) => state.pokemonApp
  );

  useEffect(() => {
    const pokemonsFilteredByName = filterPokemonsByName(pokemons, filterByName);
    const pokemonsFilteredByType = filterByType
      ? filterPokemonsByType(pokemons, filterByType)
      : pokemons;
    const currentPokemonsToDisplay = getCommonElementsFromArrays(
      pokemonsFilteredByName,
      pokemonsFilteredByType
    );
    setPokemonsToDisplay(currentPokemonsToDisplay);
  }, [filterByName, filterByType, pokemons]);

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
