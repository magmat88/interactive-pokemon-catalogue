import React from 'react';
import useLocalStorage from 'use-local-storage';
import { Footer, LandingPage, ScrollToSection } from '../../components';
import { PokemonsWrapper } from '../../features';
import './App.scss';

export function App(): JSX.Element {
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
      <div className="app__mainContent" data-theme={theme}>
        <div className="app__container" id="app-container" data-theme={theme}>
          <button
            className="app__btn app__btn--light-no-border"
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
        <PokemonsWrapper />
      </div>
      <ScrollToSection selector={"#landing-page"} />
      <Footer />
    </main>
  );
}
