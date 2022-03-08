import React, { Fragment, useState, useEffect } from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails, LoadingIndicator, ErrorIndicator } from '..';
import axios from 'axios';
import './PokemonListItem.scss';

// interface PokemonListItemProps {
//   pokemon: PokemonType;
// }

type DetailsResponseType = {
  weight: number | null,
  height: number | null,
  types: Array<any>,
  sprite: string | null,
}

// type DetailsResponseType = {
//   weight: number,
//   height: number,
//   types: Array<string>,
//   spriteUrl: string,
// }

export function PokemonListItem({ pokemon }: any): JSX.Element {
  const [currentPokemonId, setCurrentPokemonId] = useState<number | null>(null);
  const [detailsResponse, setDetailsResponse] = useState<DetailsResponseType>({weight: null, height: null, types: [], sprite: null});
  const [isDetailsRequestPending, setIsDetailsRequestPending] = useState(true);
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [isDetailsError, setIsDetailsError] = useState(false);
  const detailsVisibilityClass = detailsVisibility
    ? 'pokemonList__details--visible'
    : 'pokemonList__details--hidden';

  useEffect(() => {
    if (currentPokemonId) {
      setIsDetailsRequestPending(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
        .then((res) => {
          setIsDetailsRequestPending(false);
          setDetailsResponse(res.data);
          console.log('sprite:', res.data.sprites.front_default, 'types:',res.data.types, 'height:',res.data.height, 'weight:',res.data.weight);
          res.data.types.forEach((type: any)=>{detailsResponse.types=[...detailsResponse.types, `${type.type.name}`]});
          detailsResponse.weight = res.data.weight;
          detailsResponse.height = res.data.height;
          detailsResponse.sprite = res.data.sprites.front_default;
          
          console.log('detailsresponse', detailsResponse);

        })
        .catch((error) => {
          setIsDetailsError(true);
          console.log(error);
        });
    }
  }, [currentPokemonId]);

  function showHideDetailsOnClick(): any {
    if (!detailsVisibility) {
      setDetailsVisibility(true);
      const pokemonId = pokemon.url.split('/')[6];
      setCurrentPokemonId(pokemonId);
    } else {
      setDetailsVisibility(false);
    }
  }

  return (
    <div className="pokemonListItem" onClick={showHideDetailsOnClick}>
      <figure className="pokemonListItem__figure">
        {/* <img src={require(`${pokemon.url}`)} alt={`${pokemon.name}`} /> */}
        <img
          className="pokemonListItem__img--small"
          src={require('../../images/pokemonExample.png')}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
          {/* <p className="pokemonListItem__text--description">Sprite: {pokemon.sprite}</p>
          <p className="pokemonListItem__text--description">Types: {pokemon.types}</p> */}
        </figcaption>
      </figure>
      <article className={detailsVisibilityClass}>
        {isDetailsError ? (
          <ErrorIndicator />
        ) : isDetailsRequestPending ? (
          <LoadingIndicator />
        ) : (
          <PokemonDetails pokemonDetails={pokemon} />
        )}
      </article>
    </div>
  );
}
