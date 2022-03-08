import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import {
  PokemonList,
  Footer,
  LandingPage,
  FilterByName,
  FilterByType,
  LoadingIndicator,
} from '../components';
import './App.scss';
import axios from 'axios';
import '../components/PokemonList/PokemonList.scss';

function Pagination({ gotoPrevPage, gotoNextPage, isRequestPending }: any) {
  return (
    <footer className="pagination">
      <button onClick={gotoPrevPage} disabled={isRequestPending}>
        Previous
      </button>
      <button onClick={gotoNextPage} disabled={isRequestPending}>
        Next
      </button>
    </footer>
  );
}

export function App(): JSX.Element {
  const [pokemonResponse, setPokemonResponse] = useState();
  const [isRequestPending, setIsRequestPending] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  useEffect(() => {
    setIsRequestPending(true);
    axios.get(currentPageUrl).then((res) => {
      setPokemonResponse(res.data);
      setIsRequestPending(false);
    });
  }, [currentPageUrl]);

  const gotoPrevPage = () => {
    if ((pokemonResponse as any).previous) {
      setCurrentPageUrl((pokemonResponse as any)?.previous);
    }
  };

  const gotoNextPage = () => {
    if ((pokemonResponse as any).next) {
      setCurrentPageUrl((pokemonResponse as any).next);
    }
  };


  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function handleOnClickSwitchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main className="app app--dark-light" data-theme={theme}>
      <LandingPage />
      <div data-theme={theme}>
        <div className="app__container" data-theme={theme}>
          <button
            className="app__btn app__btn--light"
            onClick={handleOnClickSwitchTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          {pokemonResponse ?
          <section className="app__filters">
            <FilterByType pokemons={(pokemonResponse as any)?.results} />
            <FilterByName pokemons={(pokemonResponse as any)?.results} />
          </section> : null}
        </div>
        <Pagination
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          isRequestPending={isRequestPending}
        />
      </div>
      <ul>
        {isRequestPending ? (
          <LoadingIndicator />
        ) : (
          <PokemonList pokemons={(pokemonResponse as any).results} />
        )}
      </ul>
      {/* <Pokedex /> */}
      <Footer />
    </main>
  );
}
