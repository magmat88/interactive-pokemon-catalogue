import React from 'react';
import useLocalStorage from 'use-local-storage';
import {
  PokemonList,
  Footer,
  LandingPage,
  FilterByName,
  FilterByType,
} from '../components';
import './App.scss';

const pokemons = [
  {
    name: '1abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
  {
    name: '2abc',
    types: 'aad ddfff dedff',
    url: 'https://pixabay.com/pl/vectors/pokemon-pikaczu-uroczy-posta%c4%87-5426712/',
    height: 34,
    weight: 12,
    description: 'wfaofoaf afioafa oiafohfg',
    sprite: 'gawga',
  },
];

export function App() {
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
      {/* <div data-theme={theme}> */}
        <div className="app__container" data-theme={theme}>
          <button
            className="app__btn app__btn--light"
            onClick={handleOnClickSwitchTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          <section className="app__filters">
            <FilterByType pokemons={pokemons} />
            <FilterByName pokemons={pokemons} />
          </section>
        </div>

        <PokemonList pokemons={pokemons} />
      {/* </div> */}
      <Footer />
    </main>
  );
}
