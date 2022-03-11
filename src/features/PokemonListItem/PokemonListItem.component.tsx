import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export function PokemonListItem({pokemon}: any): JSX.Element {
  const types: Array<string> = [];
  pokemon.types.map((item: any) => {
    return types.push(item.type.name);
  });
  // const filterByName = useSelector((state: any) => state.pokemonApp.filterByName);
  // const filterByType = useSelector((state: any) => state.pokemonApp.filterByType);
  // const pokemonsWithVisibleDetails = useSelector((state: any) => state.pokemonApp.pokemonsWithVisibleDetails);

  // useEffect(() => {
  //   dispatch(getPokemonItem(itemUrl));

  //   function filterByTypes(
  //     filterByType: string,
  //     currentTypes: Array<string>
  //   ): Boolean {
  //     return currentTypes.includes(filterByType);
  //   }

  //   function filterByNames(
  //     filterByName: string,
  //     currentPokemonName: string
  //   ): Boolean {
  //     return currentPokemonName.includes(filterByName.toLowerCase());
  //   }

  //   const currentPokemonTypes = pokemonApiItem.data.types.map(
  //     (typeItem: any) => {
  //       return typeItem.type.name;
  //     }
  //   );
  //   const currentPokemonName = pokemonApiItem.data.name;
  //   const currentPokemonVisibility =
  //     filterByTypes(filterByType, currentPokemonTypes) &&
  //     filterByNames(filterByName, currentPokemonName)
  //       ? true
  //       : false;

  //   const currentPokemonDetails: PokemonDetailsType = {
  //     name: currentPokemonName,
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

  return (
    // <div className="pokemonListItem" onClick={togglePokemonDetailsVisibility}>
          <div className="pokemonListItem" onClick={()=>{}}>

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
