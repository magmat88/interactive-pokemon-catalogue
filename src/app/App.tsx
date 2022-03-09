import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { connect } from 'react-redux';
import {
  FilterByName,
  FilterByType,
  Footer,
  LandingPage,
  LoadingIndicator,
  PokemonList,
} from '../components';
import { getPokemonList, setCurrentListUrl } from '../actions';
import './App.scss';

export function App({
  setCurrentListUrl,
  getPokemonList,
  pokemonApp,
  pokemonApiList,
}: any): JSX.Element {
  const { pokemonResponse, status, error } = pokemonApiList;
  const { listUrl } = pokemonApp;

  useEffect(() => {
    getPokemonList(listUrl);
  }, [listUrl, getPokemonList]);

  function loadMorePokemons() {
    setCurrentListUrl(pokemonResponse.next);
  }

  //switchDarkLightThemeReducer instead of local storage
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function toggleDarkLightTheme() {
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
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          {pokemonResponse ? (
            <section className="app__filters">
              <FilterByType />
              <FilterByName />
            </section>
          ) : null}
        </div>
        <button onClick={loadMorePokemons}>Load more Pokemons</button>
      </div>
      <ul>
        {error ? (
          <p>Error</p>
        ) : status === 'rejected' ? (
          <p>Status: rejected</p>
        ) : status === 'loading' ? (
          <LoadingIndicator />
        ) : (
          <PokemonList pokemons={pokemonResponse.results} />
        )}
      </ul>
      <Footer />
    </main>
  );
}

const mapStateToProps = (state: any) => {
  return {
    pokemonApp: state.pokemonApp,
    pokemonApiList: state.pokemonApiList,
  };
};

export default connect(mapStateToProps, { setCurrentListUrl, getPokemonList })(
  App
);
