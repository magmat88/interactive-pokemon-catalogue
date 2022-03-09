import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { useDispatch, useSelector } from 'react-redux';
import { FilterByName } from './FilterByName.component';
import { FilterByType } from './FilterByType.component';
import { Footer } from '../components/Footer/Footer';
import { LandingPage } from '../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator';
import { PokemonList } from './PokemonList.component';
import {
  removePokemonWithVisibleDetails,
  addPokemonWithVisibleDetails,
  addPokemonDetails,
  changePokemonTypeFilter,
  changePokemonNameFilter,
  setCurrentListUrl,
} from './pokemonAppSlice';
import { getpokemonApiList } from './pokemonApiListSlice';
import { getPokemonItem } from './pokemonApiItemSlice';
import './App.scss';

export function App({
  setCurrentListUrl,
  getPokemonList,
  pokemonApp,
  pokemonApiList,
}: any): JSX.Element {
  const pokemons = useSelector((state: any) => state.pokemon.pokemonList);
  const dispatch = useDispatch();
  // const { pokemonResponse, status, error } = pokemonApiList;
  // const { listUrl } = pokemonApp;

  // useEffect(() => {
  //   setCurrentListUrl('https://pokeapi.co/api/v2/pokemon?limit=20');
  //   getPokemonList(listUrl);
  // }, [listUrl, getPokemonList, setCurrentListUrl, pokemonResponse]);

  // function loadMorePokemons() {
  //   setCurrentListUrl(pokemonResponse.next);
  // }

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

  useEffect(() => {
    dispatch(getPokemonList('https://pokeapi.co/api/v2/pokemon?limit=20'));
  }, [dispatch]);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

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
          {/* {pokemonResponse && (
            <section className="app__filters">
              <FilterByType />
              <FilterByName />
            </section>
          )} */}
        </div>
        {/* <button onClick={loadMorePokemons}>Load more Pokemons</button> */}
      </div>
      {pokemons?.data?.data?.results.length ? (
        <PokemonList pokemons={pokemons.data.data.results} />
      ) : null}

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

// function mapStateToProps(state: any) {
//   console.log(state);
//   return {
//     pokemonApp: 'state.pokemonApp',
//     pokemonApiList: 'state.pokemonApiList',
//   };
// };

// export default connect(mapStateToProps, { setCurrentListUrl, getPokemonList })(
//   App
// );
// export default connect(mapStateToProps)(App);
