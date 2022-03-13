import React, { useState, useEffect } from 'react';
import {
  FilterByName,
  FilterByType,
  LoadMorePokemons,
  PokemonItemToDisplay,
  PokemonListItem
} from '..';
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
  // const [pokemonsToDisplay, setPokemonsToDisplay] =
  //   useState<Array<string>>(pokemons);

  // const { filterByType, filterByName, pokemonsTypesNames } = useAppSelector(
  //   (state) => state.pokemonApp
  // );

  // useEffect(() => {
  //   const pokemonsToDisplayFilteredByName = filterPokemonsByName(
  //     pokemons,
  //     filterByName
  //   );
  //   const pokemonsToDisplayFilteredByType = !filterByType
  //     ? pokemons
  //     : filterPokemonsByType(pokemonsTypesNames, filterByType);
  //   const pokemonsToDisplayFilteredByNameAndType = getCommonElementsFromArrays(
  //     pokemonsToDisplayFilteredByName,
  //     pokemonsToDisplayFilteredByType
  //   );
  //   setPokemonsToDisplay(pokemonsToDisplayFilteredByNameAndType);
  // }, [filterByName, filterByType, pokemonsTypesNames, pokemons]);

  useEffect(()=>{}, [pokemons])

  return (
    <>
      <section className="pokemons__filters">
        <FilterByType />
        <FilterByName />
      </section>
      <ul className="pokemons--unordered">
        {/* {pokemonsToDisplay.map(PokemonItemToDisplay)} */}
        {pokemons.map((pokemon) =>
          <li className="pokemons__listItem" key={pokemon.name}>
            <PokemonListItem pokemon={pokemon} />
          </li>
        )}
      </ul>
      <LoadMorePokemons />
    </>
  );
}
