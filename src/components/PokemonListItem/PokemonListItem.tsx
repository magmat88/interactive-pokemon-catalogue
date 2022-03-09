import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getPokemonItem, 
  // setCurrentItemUrl, 
  addPokemonWithVisibleDetails, addPokemonDetails } from '../../actions';
import { LoadingIndicator } from '..';
import './PokemonListItem.scss';

// export type PokemonType = {
//   name: string;
//   url: string;
// };

// type PokemonListItemTypesType = [
//   {
//     slot: number;
//     type: {
//       name: string;
//       url: string;
//     };
//   }
// ];

// type listItemResponseType = {
//   height: number | null;
//   sprite: string | null;
//   types: Array<PokemonListItemTypesType>;
//   weight: number | null;
// };

// export interface PokemonListItemProps {
//   pokemon: PokemonType;
// }
export type PokemonDetailsType = {
  name: string | undefined;
  height: number | undefined;
  sprite: string | undefined;
  types: Array<string | undefined>;
  weight: number | undefined;
  visibility: Boolean;
};

export function PokemonListItem({
  pokemon,
  getPokemonItem,
  // setCurrentItemUrl,
  addPokemonDetails,
  pokemonApp,
  pokemonApiItem,
}: any): JSX.Element {
  const { pokemonItemResponse, status, error } = pokemonApiItem;
  const { pokemonsWithVisibleDetails, pokemons, filterByName, filterByType } = pokemonApp;


  useEffect(() => {
    // setCurrentItemUrl(pokemon.url);
    getPokemonItem(pokemon.url);

    function filterByTypes(filterByType: string, currentTypes: Array<string>): Boolean {
      return currentTypes.includes(filterByType);
    }

    function filterByNamaes(filterByName: string, currentPokemonName: string): Boolean {
      return currentPokemonName.includes(filterByName.toLowerCase());
    }

    const currentPokemonTypes = pokemonItemResponse.types.map((typeItem: any) => {
      return typeItem.type.name;
    });
    const currentPokemonName = pokemonItemResponse.name;
    const currentPokemonVisibility = (filterByTypes(filterByType, currentPokemonTypes) && filterByNames(filterByName, currentPokemonName)) ? true : false;
    const currentPokemonDetails: PokemonDetailsType = {
      name: currentPokemonName,
      height: pokemonItemResponse.height,
      sprite: pokemonItemResponse.sprites.front_default,
      types: currentPokemonTypes,
      weight: pokemonItemResponse.weight,
      visibility: currentPokemonVisibility,
    };

    addPokemonDetails(currentPokemonDetails);
  }, [
    // itemUrl, 
    getPokemonItem, addPokemonDetails, pokemons, filterByName, filterByType,
    // setCurrentItemUrl
  ]);

  
      const currentPokemon = {
        height: pokemonItemResponse.height,
        sprite: pokemonItemResponse.sprites.front_default,
        types: pokemonItemResponse.types.map((typeItem: any) => {
          return typeItem.type.name;
        }),
        weight: pokemonItemResponse.weight,
      };

      addPokemonDetails(currentPokemon);
  
    });
  }, [pokemonItemResponse.url]);

  function togglePokemonDetailsVisibility(pokemonName: string): any {
    addPokemonWithVisibleDetails(pokemonName);
  }

  const listItemVisibilityClass = pokemonsWithVisibleDetails.hasOwnProperty(pokemonItemResponse.name)
    ? 'pokemonList__listItem--visible'
    : 'pokemonList__listItem--hidden';

  return (
    <div className="pokemonListItem" onClick={togglePokemonDetailsVisibility}>
      <h1 className="pokemonListItem__text--label">
        {pokemonItemResponse.name}
      </h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemonItemResponse.sprite}`}
          alt={`${pokemonItemResponse.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {pokemonItemResponse.types.map((type: any, index: number) => {
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
        {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : (
          <div>
            <p>Height: {pokemonItemResponse.height} m</p>
            <p>Weight: {pokemonItemResponse.weight} kg</p>
          </div>
        )}
      </article>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    pokemonApiItem: state.pokemonApiItem,
    pokemonApp: state.pokemonApp,
  };
};

export default connect(mapStateToProps, { getPokemonItem, setCurrentItemUrl })(
  PokemonListItem
);
