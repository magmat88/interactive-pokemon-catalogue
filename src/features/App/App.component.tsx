import React from 'react';
import useLocalStorage from 'use-local-storage';
import ScrollIntoView from 'react-scroll-into-view';
import {
  useGetPokemonListQuery,
  useAppDispatch,
  useAppSelector,
} from '../../hooks';
import {
  changeAppTheme,
  // selectAppTheme,
  // selectLimit,
  // selectOffset,
} from '../pokemonAppSlice';
import { selectPokemonNames } from '../../utils';
import { Footer } from '../../components/Footer/Footer';
import { LandingPage } from '../../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { PokemonListByNames } from '../../components/PokemonListByNames/PokemonListByNames';
import './App.scss';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { appTheme, limit, offset } = useAppSelector(
    (state) => state.pokemonApp
  );
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `limit=${limit}&offset=${offset}`
  );

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function toggleDarkLightTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    // const newTheme = selectCurrentAppTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
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
        </div>
      </div>

      {isError ? (
        <>Error occured</>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        <PokemonListByNames pokemons={selectPokemonNames(data.results)} />
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
