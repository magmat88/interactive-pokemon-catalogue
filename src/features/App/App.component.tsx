import React from 'react';
import useLocalStorage from 'use-local-storage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeAppTheme } from '../pokemonAppSlice';
import { Footer, LandingPage, ScrollToTop } from '../../components';
import { RenderPokemons } from '../../features';
import './App.scss';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { appTheme } = useAppSelector((state) => state.pokemonApp);

  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage(
  //   'theme',
  //   defaultDark ? 'dark' : 'light'
  // );

  // function toggleDarkLightTheme() {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   // const newTheme = selectCurrentAppTheme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // }

  return (
    <main
      className="app app--dark-light"
      // data-theme={theme}
    >
      <LandingPage />
      <div
      // data-theme={theme}
      >
        {/* =========toggle data theme: ============== */}
        {/* <div className="app__container" id="app-container" data-theme={theme}>
          <button
            className="app__btn app_btn--light-no-border"
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div> */}
        <RenderPokemons />
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
