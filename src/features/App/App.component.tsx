import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import ScrollIntoView from 'react-scroll-into-view';
import { useGetPokemonListQuery } from '../../hooks';
import { FilterByName } from '../FilterByName.component';
import { FilterByType } from '../FilterByType.component';
import { Footer } from '../../components/Footer/Footer';
import { LandingPage } from '../../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { PokemonList } from '../PokemonList.component';
import './App.scss';

function RenderPokemonsList({ pokemons }: any): JSX.Element {
  return (
    <div>
      {pokemons.map((name: string) => (
        <PokemonList name={name} key={name} />
      ))}
    </div>
  );
}

export function App(props: any): JSX.Element {
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  const [limitAndOffset, setLimitAndOffset] =
    useState<string>('limit=20&offset=0');
  // const limitAndOffset = `limit=${limit}&offset=${offset}`;
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `${limitAndOffset}`
  );

  //TODO: dark-light mode in redux
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
  function selectPokemonNames() {
    const pokemonNames = [];
    for (let key in data.results) {
      pokemonNames.push(data.results[key].name);
    }
    return pokemonNames;
  }

  return (
    <main className="app app--dark-light" data-theme={theme}>
      <LandingPage />
      <div data-theme={theme}>
        <div className="app__container" id="app-container" data-theme={theme}>
          <button
            className="app__btn app_btn--light-no-border"
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          <section className="app__filters">
            <FilterByType />
            <FilterByName />
          </section>
        </div>
        <button onClick={loadMorePokemons}>Load more Pokemons</button>
      </div>

      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <RenderPokemonsList pokemons={selectPokemonNames()} />
      ) : (
        <>No data</>
      )}
      <ScrollIntoView selector="#landing-page">
        <button className="app__btn app_btn--light-no-border">
          Scroll to top
        </button>
      </ScrollIntoView>
      <Footer />
    </main>
  );
}
