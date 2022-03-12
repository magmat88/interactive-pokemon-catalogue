import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addPokemonWithVisibleDetails,
  changeUserInput,
  changePokemonNameFilter,
  removePokemonWithVisibleDetails,
  selectUserInput,
  selectFilterByName,
} from '../pokemonAppSlice';
import {
  filterPokemonByType,
  filterPokemonByName,
  checkIfPokemonDetailsVisible,
  renderPokemonTypes,
  setListItemVisibilityClass,
} from '../../utils';
import './PokemonListItem.scss';

export function PokemonListItem({ pokemon }: any): JSX.Element {
  const dispatch = useAppDispatch();
  const { filterByName, filterByType, userInput, pokemonsWithVisibleDetails } =
    useAppSelector((state) => state.pokemonApp);
  const pokemonTypes = renderPokemonTypes(pokemon);

  function togglePokemonDetailsVisibility(pokemonName: string): any {
    checkIfPokemonDetailsVisible(pokemonsWithVisibleDetails, pokemonName)
      ? dispatch(removePokemonWithVisibleDetails(pokemonName))
      : dispatch(addPokemonWithVisibleDetails(pokemonName));
  }

  useEffect(() => {}, [userInput]);

  function ListItem(): JSX.Element {
    return (
      <div
        className="pokemonList__listItem--visible pokemonListItem"
        onClick={togglePokemonDetailsVisibility(pokemon.name)}
      >
        <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
        <figure className="pokemonListItem__figure">
          <img
            className="pokemonListItem__img--small"
            src={`${pokemon.sprites['front_default']}`}
            alt={`${pokemon.name}`}
          />
          <figcaption className="pokemonListItem__figcaption">
            {pokemonTypes.map((type: any) => {
              return (
                <div className="pokemonListItem__figcaptionItem" key={type}>
                  <p>{type}</p>
                </div>
              );
            })}
          </figcaption>
        </figure>
        <article
          className={setListItemVisibilityClass(
            pokemonsWithVisibleDetails,
            pokemon.name
          )}
        >
          <div>
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
          </div>
        </article>
      </div>
    );
  }

  return (
    filterPokemonByType(filterByType, pokemonTypes) &&
    filterPokemonByName(filterByName, pokemon.name) && <ListItem />
  );
}
