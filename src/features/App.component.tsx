import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { useDispatch, useSelector } from 'react-redux';
import { FilterByName } from './FilterByName.component';
import { FilterByType } from './FilterByType.component';
import { Footer } from '../components/Footer/Footer';
import { LandingPage } from '../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator';
import { PokemonList } from '../components/PokemonList/PokemonList';
import {
  setCurrentListUrl,
} from './pokemonAppSlice';
import { getpokemonApiList } from './pokemonApiListSlice';
import './App.scss';

export function App(props: any): JSX.Element {
  const pokemons = useSelector((state: any) => state.pokemonApiList.pokemonApiList.data);
  const dispatch = useDispatch();
  // const listUrl = pokemons?.data?.results?.url;
  useEffect(() => {
  //   // console.log(pokemons, listUrl)
  //   dispatch(setCurrentListUrl('https://pokeapi.co/api/v2/pokemon?limit=20'));
    dispatch(getpokemonApiList('https://pokeapi.co/api/v2/pokemon?limit=20'));
  }, [dispatch]);

  useEffect(() => {
    for (let key in pokemons){
      console.log(pokemons[key])
    };
    console.log(pokemons["results"]);
    console.log(pokemons["results"].map((result: any)=>{console.log(result)}))
  }, [pokemons]);

  // useEffect(() => {
  //   console.log(pokemons?.pokemonApiList);
  // }, [pokemons]);
  function loadMorePokemons() {
    // TODO
    setCurrentListUrl(pokemons?.data?.results?.next);
  }

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function toggleDarkLightTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // useEffect(() => {
  //   dispatch(getpokemonApiList('https://pokeapi.co/api/v2/pokemon?limit=20'));
  // }, [dispatch]);

  
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
          {pokemons && (
            <section className="app__filters">
              <FilterByType />
              <FilterByName />
            </section>
          )}
        </div>
        <button onClick={loadMorePokemons}>Load more Pokemons</button>
      </div>
      <ul>
        {pokemons?.length ? (
          <PokemonList pokemons={pokemons["results"]} />
        ) : null}
      </ul>

      {/* <ul>
        {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : (
          <PokemonList pokemons={pokemonResponse.results} />
        )}
      </ul> */}
      <Footer />
    </main>
  );
}
