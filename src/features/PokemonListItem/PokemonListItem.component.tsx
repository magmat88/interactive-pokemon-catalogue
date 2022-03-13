import React, { useState, useEffect } from 'react';
import { extractPokemonTypeNames } from '../../utils';
import { PokemonTypeName } from '../';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addPokemonTypesNames } from '../pokemonAppSlice';
import { PokemonTypesNamesObject, PokemonDataType } from '../../config/state';
import './PokemonListItem.scss';

interface PokemonListItemProps {
  pokemon: PokemonDataType;
}

export function PokemonListItem({
  pokemon,
}: PokemonListItemProps): JSX.Element {
  const [areDetailsVisible, setAreDetailsVisible] = useState<Boolean>(false);

  const dispatch = useAppDispatch();
  const { pokemonsTypesNames } = useAppSelector((state) => state.pokemonApp);

  useEffect(() => {
    const pokemonTypesNamesObject: PokemonTypesNamesObject = {
      pokemonName: pokemon.name,
      pokemonTypesNames: extractPokemonTypeNames(pokemon),
    };
    if (
      !pokemonsTypesNames.some(
        (pokemonTypesNamesObject) =>
          pokemonTypesNamesObject.pokemonName === pokemon.name
      )
    ) {
      dispatch(addPokemonTypesNames(pokemonTypesNamesObject));
    }
  }, [pokemon, pokemonsTypesNames]);

  function pokemonTypes(pokemonName: string) {
    const pokemonTypes = pokemonsTypesNames.find(
      (pokemonTypesNamesObject) =>
        pokemonTypesNamesObject.pokemonName === pokemon.name
    )?.pokemonTypesNames;
    return pokemonTypes;
  }

  return (
    <div
      className="pokemonList__listItem--visible pokemonListItem"
      onClick={() => setAreDetailsVisible(!areDetailsVisible)}
    >
      <h1 className="pokemonListItem__text--label">{pokemon.name}</h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${pokemon.sprites['front_default']}`}
          alt={`${pokemon.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {pokemonTypes(pokemon.name)?.map(PokemonTypeName)}
        </figcaption>
      </figure>
      {areDetailsVisible && (
        <article>
          <div>
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
          </div>
        </article>
      )}
    </div>
  );
}
