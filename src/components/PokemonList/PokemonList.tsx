import React, { useState } from 'react';
import { PokemonType } from '../../config/state';
import { PokemonListItem, PokemonDetails } from '..';
import './PokemonList.scss';

interface PokemonListProps {
  pokemons: Array<PokemonType>;
}

function handleOnClickPokemonListItem(event: any) {
  console.log('on click show Pokemon Details');
}

export function PokemonList({ pokemons }: PokemonListProps): JSX.Element {
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const detailsVisibilityClass = detailsVisibility
    ? 'pokemonList__details--visible'
    : 'pokemonList__details--hidden';

  return (
    <section id="pokemon-list" className="pokemonList">
      <ul className="pokemonList--unordered">
        {[...pokemons].slice(0, 20).map((pokemon) => {
          console.log(pokemon.url);
          return (
            <li
              key={pokemon.name}
              onClick={handleOnClickPokemonListItem}
              className="pokemonList__listItem"
            >
              <PokemonListItem pokemon={pokemon} />
              <div className="detailsVisibilityClass">
                <PokemonDetails pokemon={pokemon} />
              </div>
            </li>
          );
        })}
      </ul>
      {/* <button className="pokemonList__btn pokemonList__btn--light"
        onClick={() => {
          console.log('load more Pokemons on click');
        }}
      >
        Load more Pokemons
      </button> */}
    </section>
  );
}

// export function PokemonList({ pokemons }: any): JSX.Element {
//   return pokemons.map((pokemon: any) => {
//     const pokedexNum = pokemon.url.split('/')[6];
//     return (
//       // <li key={pokemon.name}>
//       //   {'place for image'}
//       //   {/* <Link to={`/pokedex/${pokedexNum}`}>
//       //         <img
//       //           className={"discovered"}
//       //           width="50px"
//       //           height="50px"
//       //           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedexNum}.svg`}
//       //           alt={pokemon.name}
//       //         />
//       //       </Link> */}
//       //   <article>#{pokedexNum}</article>
//       //   <article>{pokemon.name}</article>
//       // </li>
//       <PokemonListItem pokemon={pokemon} />
//     );
//   });
