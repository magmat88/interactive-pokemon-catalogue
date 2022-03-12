import React, { useState, useEffect } from 'react';
import {
  FilterByName,
  FilterByType,
  LoadMorePokemons,
  RenderPokemonItem,
} from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import // addPokemonWithVisibleDetails,
// removePokemonWithVisibleDetails,
'../pokemonAppSlice';
import {
  checkIfPokemonDetailsVisible,
  filterPokemonByName,
  filterPokemonByType,
  extractPokemonTypeNames,
} from '../../utils';
import './Pokemons.scss';

interface PokemonsProps {
  pokemons: Array<string>;
}

export function Pokemons({ pokemons }: PokemonsProps): JSX.Element {
  const [pokemonsToDisplay, setPokemonsToDisplay] =
    useState<Array<string>>(pokemons);

  const dispatch = useAppDispatch();
  const { filterByType, userInput } = useAppSelector(
    (state) => state.pokemonApp
  );

  useEffect(() => {
    setPokemonsToDisplay(
      pokemons.filter((pokemonName) => pokemonName.includes(userInput))
    );
    const pokemonsTypes: Array<Array<string>> = pokemons.map(pokemon => extractPokemonTypeNames(pokemon));
    pokemons.filter((pokemonsTypes) => pokemonsTypes.map((pokemonTypes: Array<Array<string>>) => pokemonTypes.includes(filterByType)));
      //zwrócić tylko części wspólne w obu filtrach
  }, [userInput]);

  return (
    <>
      <section className="pokemons__filters">
        <FilterByType />
        <FilterByName />
      </section>
      <ul className="pokemons--unordered">
        {pokemonsToDisplay.map((name: string) => (
          <li className="pokemons__listItem" key={name}>
            <RenderPokemonItem name={name} />
          </li>
        ))}
      </ul>
      <LoadMorePokemons />
    </>
  );
}
