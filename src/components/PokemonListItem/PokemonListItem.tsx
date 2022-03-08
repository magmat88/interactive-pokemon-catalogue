import React, { Fragment, useState, useEffect } from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails, LoadingIndicator, ErrorIndicator } from '..';
import axios from 'axios';
import './PokemonListItem.scss';

// interface PokemonListItemProps {
//   pokemon: PokemonType;
// }

type DetailsResponseType = {
  weight: number | null;
  height: number | null;
  types: Array<any>;
  sprite: string | null;
};

// type DetailsResponseType = {
//   weight: number,
//   height: number,
//   types: Array<string>,
//   sprite: string,
// }

export function PokemonListItem({ pokemon }: any): JSX.Element {
  const [detailsResponse, setDetailsResponse] = useState<DetailsResponseType>({
    weight: null,
    height: null,
    types: [],
    sprite: null,
  });
  const [isDetailsRequestPending, setIsDetailsRequestPending] = useState(true);
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [isDetailsError, setIsDetailsError] = useState(false);

  console.log(pokemon);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => {
        console.log(res.data);
        const newDetails = {
          weight: res.data.weight,
          height: res.data.height,
          types: res.data.types.map((typeItem: any) => {
            return typeItem.type.name;
          }),
          sprite: res.data.sprites.front_default,
        };

        setDetailsResponse(newDetails);
        setIsDetailsRequestPending(false);
      })
      .catch((error) => {
        setIsDetailsError(true);
        setIsDetailsRequestPending(false);
      });
  }, [pokemon.url]);

  function showHideDetailsOnClick(): any {
    if (!detailsVisibility) {
      setDetailsVisibility(true);
    } else {
      setDetailsVisibility(false);
    }
  }

  const detailsVisibilityClass = detailsVisibility
    ? 'pokemonList__details--visible'
    : 'pokemonList__details--hidden';

  return (
    <div
      className="pokemonListItem"
      onClick={showHideDetailsOnClick}
    >
      <p>Types: {`${detailsResponse.types}`}</p>
      {/* <p>Types: {`${detailsResponse.types}`}</p> */}

      <figure className="pokemonListItem__figure">
        {/* <img src={require(`${detailsResponse.sprite}`)} alt={`${pokemon.name}`} /> */}
        <img
          className="pokemonListItem__img--small"
          src={`${detailsResponse.sprite}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
          {/* <p className="pokemonListItem__text--description">Sprite: {pokemon.sprite}</p> */}
          {/* {
          // detailsResponse.types.map((type: any) => {
          //   console.log(type.type)
          
            return (
              <div>
                <p className="pokemonListItem__text--description">`${type}`</p>
              </div>
            );
          })} */}
        </figcaption>
      </figure>
      <article className={detailsVisibilityClass}>
        {isDetailsError ? (
          <ErrorIndicator />
        ) : isDetailsRequestPending ? (
          <LoadingIndicator />
        ) : (
          // <PokemonDetails pokemonDetails={pokemon} />
          <div>
            <p>Height: {detailsResponse.height} m</p>
            <p>Weight: {detailsResponse.weight} kg</p>
          </div>
        )}
      </article>
    </div>
  );
}
