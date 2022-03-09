import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removePokemonWithVisibleDetails,
  addPokemonWithVisibleDetails,
  addPokemonDetails,
  changePokemonTypeFilter,
  changePokemonNameFilter,
  setCurrentListUrl,
} from './pokemonAppSlice';
import { getPokemonItem } from './pokemonApiItemSlice';
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator';
import './PokemonListItem.scss';

export type PokemonDetailsType = {
  name: string | undefined;
  height: number | undefined;
  sprite: string | undefined;
  types: Array<string | undefined>;
  weight: number | undefined;
  visibility: Boolean;
};

export function PokemonListItem(pokemon: any): JSX.Element {
  // const pokemons = useSelector((state: any) => state.pokemonApiList);
  const dispatch = useDispatch();
  const filterByName = useSelector((state: any) => state.pokemonApp.filterByName);
  const filterByType = useSelector((state: any) => state.pokemonApp.filterByType);
  const itemUrl = pokemon.url;
  const pokemonsWithVisibleDetails = useSelector((state: any) => state.pokemonApp.pokemonsWithVisibleDetails);
  const pokemons = useSelector((state: any) => state.pokemonApp.pokemons);
  const pokemonApiItem = useSelector((state: any) => state.pokemonApiItem);


  useEffect(() => {
    dispatch(getPokemonItem(itemUrl));

    function filterByTypes(
      filterByType: string,
      currentTypes: Array<string>
    ): Boolean {
      return currentTypes.includes(filterByType);
    }

    function filterByNames(
      filterByName: string,
      currentPokemonName: string
    ): Boolean {
      return currentPokemonName.includes(filterByName.toLowerCase());
    }

    const currentPokemonTypes = pokemonApiItem.data.types.map(
      (typeItem: any) => {
        return typeItem.type.name;
      }
    );
    const currentPokemonName = pokemonApiItem.data.name;
    const currentPokemonVisibility =
      filterByTypes(filterByType, currentPokemonTypes) &&
      filterByNames(filterByName, currentPokemonName)
        ? true
        : false;
    const currentPokemonDetails: PokemonDetailsType = {
      name: currentPokemonName,
      height: pokemonApiItem.data.height,
      sprite: pokemonApiItem.data.sprites.front_default,
      types: currentPokemonTypes,
      weight: pokemonApiItem.data.weight,
      visibility: currentPokemonVisibility,
    };

    dispatch(addPokemonDetails(currentPokemonDetails));
  }, [
    getPokemonItem,
    addPokemonDetails,
    pokemons,
    filterByName,
    filterByType,
    pokemon.url,
    pokemonApiItem.data.height,
    pokemonApiItem.data.name,
    pokemonApiItem.data.sprites.front_default,
    pokemonApiItem.data.types,
    pokemonApiItem.data.weight,
  ]);

  function togglePokemonDetailsVisibility(event: any): any {
    pokemonsWithVisibleDetails.hasOwnProperty(pokemonApiItem.data.name)
      ? dispatch(removePokemonWithVisibleDetails(pokemonApiItem.data.name))
      : dispatch(addPokemonWithVisibleDetails(pokemonApiItem.data.name));
  }

  const listItemVisibilityClass = pokemonsWithVisibleDetails.hasOwnProperty(
    pokemonApiItem.data.name
  )
    ? 'pokemonList__listItem--visible'
    : 'pokemonList__listItem--hidden';

  return (
    <div className="pokemonListItem" onClick={togglePokemonDetailsVisibility}>
      <h1 className="pokemonListItem__text--label">
        {pokemonApiItem.data.name}
      </h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemonApiItem.data.sprite}`}
          alt={`${pokemonApiItem.data.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {pokemonApiItem.data.types.map((type: any, index: number) => {
            return (
              <div
                className="pokemonListItem__figcaptionItem"
                key={`${index}-type`}
              >
                <p>{type}</p>
              </div>
            );
          })}
        </figcaption>
      </figure>
      <article className={listItemVisibilityClass}>
        {/* {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : ( */}
        <div>
          <p>Height: {pokemonApiItem.data.height} m</p>
          <p>Weight: {pokemonApiItem.data.weight} kg</p>
        </div>
        {/* )} */}
      </article>
    </div>
  );
}
