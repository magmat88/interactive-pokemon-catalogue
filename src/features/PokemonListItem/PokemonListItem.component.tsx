import React, { useEffect } from 'react';
import { POKEMON_SELECT_TYPES } from '../../config/constants';
import {
  useGetPokemonListQuery,
  useAppDispatch,
  useAppSelector,
} from '../../hooks';
import {
  addPokemonWithVisibleDetails,
  changeAppTheme,
  changeOffset,
  changeUserInput,
  changeLimit,
  changePokemonNameFilter,
  changePokemonTypeFilter,
  removePokemonWithVisibleDetails,
  selectAppTheme,
  selectUserInput,
  selectLimit,
  selectOffset,
  selectFilterByName,
  selectFilterByType,
  selectPokemonsWithVisibleDetails,
} from '../pokemonAppSlice';
import // removePokemonWithVisibleDetails,
// addPokemonWithVisibleDetails,
// addPokemonDetails,
// changePokemonTypeFilter,
// changePokemonNameFilter,
// setCurrentListUrl,
'../pokemonAppSlice';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import './PokemonListItem.scss';

export type PokemonDetailsType = {
  name: string | undefined;
  height: number | undefined;
  sprite: string | undefined;
  types: Array<string | undefined>;
  weight: number | undefined;
  visibility: Boolean;
};

export function PokemonListItem({ pokemon }: any): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    appTheme,
    filterByName,
    filterByType,
    limit,
    offset,
    userInput,
    pokemonsWithVisibleDetails,
  } = useAppSelector((state) => state.pokemonApp);

  const types: Array<string> = [];
  pokemon.types.map((item: any) => {
    return types.push(item.type.name);
  });

  //   function filterPokemonByName(
  //     filterByName: string,
  //     name: string
  //   ): Boolean {
  //     return name.includes(filterByName.toLowerCase());
  //   }

  //   const currentPokemonTypes = pokemonApiItem.data.types.map(
  //     (typeItem: any) => {
  //       return typeItem.type.name;
  //     }
  //   );
  //   const name = pokemonApiItem.data.name;
  //   const currentPokemonVisibility =
  //     filterPokemonByType(filterByType, currentPokemonTypes) &&
  //     filterPokemonByName(filterByName, name)
  //       ? true
  //       : false;

  //   const currentPokemonDetails: PokemonDetailsType = {
  //     name: name,
  //     height: pokemonApiItem.data.height,
  //     sprite: pokemonApiItem.data.sprites.front_default,
  //     types: currentPokemonTypes,
  //     weight: pokemonApiItem.data.weight,
  //     visibility: currentPokemonVisibility,
  //   };

  //   dispatch(addPokemonDetails(currentPokemonDetails));
  // }, [
  //   getPokemonItem,
  //   addPokemonDetails,
  //   pokemons,
  //   filterByName,
  //   filterByType,
  //   pokemon.url,
  //   pokemonApiItem.data.height,
  //   pokemonApiItem.data.name,
  //   pokemonApiItem.data.sprites.front_default,
  //   pokemonApiItem.data.types,
  //   pokemonApiItem.data.weight,
  // ]);

  // function togglePokemonDetailsVisibility(event: any): any {
  //   pokemonsWithVisibleDetails.hasOwnProperty(pokemonApiItem.data.name)
  //     ? dispatch(removePokemonWithVisibleDetails(pokemonApiItem.data.name))
  //     : dispatch(addPokemonWithVisibleDetails(pokemonApiItem.data.name));
  // }

  // const listItemVisibilityClass = pokemonsWithVisibleDetails.hasOwnProperty(
  //   pokemonApiItem.data.name
  // )
  //   ? 'pokemonList__listItem--visible'
  //   : 'pokemonList__listItem--hidden';
  function filterPokemonByType(filterByType: string, types: Array<string>): Boolean {
    return !filterByType ? true : types.includes(filterByType);
  }

  function filterPokemonByName(
        filterByName: string,
        name: string
      ): Boolean {
        console.log('filterbyname: ', filterByName)
        console.log('pokemon name:', name)
        return !filterByName ? true : name.includes(filterByName.toLowerCase());
      }

      useEffect(()=>{}, [userInput])

  function setPokemonListItemVisibility() {
    const filteredByType = filterPokemonByType(filterByType, types);
    const filteredByName = filterPokemonByName(filterByName, pokemon.name)
    console.log(filteredByName, pokemon.name)

    // const filtered = filterPokemonByType(types, filterByType))
    // console.log(filtered)
    const listItemVisibility =
      // filteredByNames && 
      // filterPokemonByType(types) 
      filteredByType && filteredByName
      ? 'pokemonList__listItem--visible' : 'pokemonList__listItem--hidden';
    return `pokemonListItem ${listItemVisibility}`;
  }

  return (
    // <div className="pokemonListItem" onClick={togglePokemonDetailsVisibility}>
    // <div className="pokemonListItem" onClick={()=>{}}>
    <div className={setPokemonListItemVisibility()} onClick={() => {}}>
      <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemon.sprites['front_default']}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {types.map((type) => {
            return (
              <div className="pokemonListItem__figcaptionItem" key={type}>
                <p>{type}</p>
              </div>
            );
          })}
        </figcaption>
      </figure>
      {/* <article className={listItemVisibilityClass}> */}
      <article className="pokemonList__listItem--visible">
        {/* {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : ( */}
        <div>
          <p>Height: {pokemon.height} m</p>
          <p>Weight: {pokemon.weight} kg</p>
        </div>
      </article>
    </div>
  );
}
