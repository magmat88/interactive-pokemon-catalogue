import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';
import { connect } from "react-redux";
import {
  ErrorIndicator,
  FilterByName,
  FilterByType,
  Footer,
  LandingPage,
  LoadingIndicator,
  PokemonList,
} from '../components';
import './App.scss';

function Pagination({ gotoPrevPage, gotoNextPage, isRequestPending }: any) {
  return (
    <footer className="app__pagination">
      <button
        className="app__btn app__btn--contrast"
        onClick={gotoPrevPage}
        disabled={isRequestPending}
      >
        {'<<'}
      </button>
      <button
        className="app__btn  app__btn--contrast"
        onClick={gotoNextPage}
        disabled={isRequestPending}
      >
        {'>>'}
      </button>
    </footer>
  );
}

export function App(): JSX.Element {
  const [pokemonResponse, setPokemonResponse] = useState();
  const [isRequestPending, setIsRequestPending] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  useEffect(() => {
    setIsRequestPending(true);
    axios
      .get(currentPageUrl)
      .then((res) => {
        setPokemonResponse(res.data);
        setIsRequestPending(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
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
            className="app__btn app_btn--light-no-border"
            onClick={handleOnClickSwitchTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          {pokemonResponse ? (
            <section className="app__filters">
              <FilterByType pokemons={(pokemonResponse as any)?.results} />
              <FilterByName pokemons={(pokemonResponse as any)?.results} />
            </section>
          ) : null}
        </div>
        <Pagination
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          isRequestPending={isRequestPending}
        />
      </div>
      <ul>
        {isError ? (
          <ErrorIndicator />
        ) : isRequestPending ? (
          <LoadingIndicator />
        ) : (
          <PokemonList pokemons={(pokemonResponse as any).results} />
        )}
      </ul>
      <Footer />
    </main>
  );
}
