import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import ScrollIntoView from 'react-scroll-into-view';
import { useDispatch, useSelector } from 'react-redux';
import { FilterByName } from './FilterByName.component';
import { FilterByType } from './FilterByType.component';
import { Footer } from '../components/Footer/Footer';
import { LandingPage } from '../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { PokemonListItem } from './PokemonListItem.component';

import { setCurrentListUrl } from './pokemonAppSlice';
import { getpokemonApiList } from './pokemonApiListSlice';
import './App.scss';
import {
  useGetPokemonByNameQuery,
  useGetPokemonsWithLimitAndOffset,
} from '../hooks';
import './PokemonListItem.scss';

function MyPokemonItem({ pokemon }: any): JSX.Element {
  // console.log('pokemon in pokemon item: ', pokemon);

  const types: Array<string> = [];
  pokemon.types.map((item: any) => {
    return types.push(item.type.name);
  });

  return (
    <div className="pokemonListItem" onClick={() => {}}>
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
      <article>
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

export function MyPokemon({ name }: any): JSX.Element {
  const { data, isError, isLoading } = useGetPokemonByNameQuery(name);
  // console.log('data for single pokemon in app: ', data);
  return (
    <article className="app app--dark-light">
      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <>
          <MyPokemonItem pokemon={data} />
        </>
      ) : null}
    </article>
  );
}

export function App(props: any): JSX.Element {
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  const [limitAndOffset, setLimitAndOffset] =
    useState<string>('limit=20&offset=0');
  console.log(limitAndOffset);
  // const limitAndOffset = `limit=${limit}&offset=${offset}`;
  const { data, isError, isLoading } = useGetPokemonsWithLimitAndOffset(
    `${limitAndOffset}`
  );

  console.log('data in app:', data);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function toggleDarkLightTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function loadMorePokemons() {
    setLimit(limit + 20);
    setOffset(offset + 20);
    setLimitAndOffset(`limit=${limit}&offset=${offset}`);
  }

  return (
    <main className="app app--dark-light" data-theme={theme}>
      <LandingPage />
      <div data-theme={theme}>
        <div className="app__container" data-theme={theme}>
          <button
            className="app__btn app_btn--light-no-border"
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          {/* <section className="app__filters">
            <FilterByType />
            <FilterByName />
          </section> */}
        </div>
        <button onClick={loadMorePokemons}>Load more Pokemons</button>
      </div>
      {/* ========================================sandbox */}
    
      <MyPokemon name="bulbasaur" />
      {'pokemon list:'}

      <br />
    {/* {'data'}{data} */}
    <br />
      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        'data present'
      ) : (
        'no data'
      )}

      {/* ========================sandbox============================ */}
      <ScrollIntoView selector="#landing-page">
        <button className="app__btn app_btn--light-no-border">
          Scroll to top
        </button>
      </ScrollIntoView>
      <Footer />
    </main>
  );
}

// const { data, isError, isLoading } = getPokemonsListWithLimitAndOffset('limit=20&offset=0');
// const { data, isError, isLoading } = useGetPokemonByNameQuery('spearow');

// const pokemons = useSelector((state: any) => state.pokemonApiList.pokemonApiList.data);
// const dispatch = useDispatch();
// // const listUrl = pokemons?.data?.results?.url;
// useEffect(() => {
// //   // console.log(pokemons, listUrl)
// //   dispatch(setCurrentListUrl('https://pokeapi.co/api/v2/pokemon?limit=20'));
//   dispatch(getpokemonApiList('https://pokeapi.co/api/v2/pokemon?limit=20'));
// }, [dispatch]);

// useEffect(() => {
//   for (let key in pokemons){
//     console.log(pokemons[key])
//   };
//   console.log(pokemons["results"]);
//   console.log(pokemons["results"].map((result: any)=>{console.log(result)}))
// }, [pokemons]);

// useEffect(() => {
//   console.log(pokemons?.pokemonApiList);
// }, [pokemons]);
// function loadMorePokemons() {
//   // TODO
//   setCurrentListUrl(pokemons?.data?.results?.next);
// }
// useEffect(() => {
//   dispatch(getpokemonApiList('https://pokeapi.co/api/v2/pokemon?limit=20'));
// }, [dispatch]);

{
  /* 
{/* {pokemons && (
            
      {/*<ul>
        {pokemons?.length ? (
          <PokemonList pokemons={pokemons["results"]} />
        ) : null}
      </ul> */
}

{
  /* <ul>
        {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : (
          <PokemonList pokemons={pokemonResponse.results} />
        )}
      </ul> */
}
