import React from 'react';
import {
  PokemonList,
  NavBar,
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
];

export function App() {
  return (
    <main className="app">
      <NavBar />
      <LandingPage />
      <section className="app__filters">
        <FilterByType pokemons={pokemons} />
        <FilterByName pokemons={pokemons} />
      </section>
      <PokemonList pokemons={pokemons} />
      <Footer />
    </main>
  );
}
