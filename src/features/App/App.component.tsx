import React, { useRef, useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import ScrollIntoView from 'react-scroll-into-view';
import { POKEMON_SELECT_TYPES } from '../../config/constants';
import {
  useGetPokemonListQuery,
  useAppDispatch,
  useAppSelector,
} from '../../hooks';
import {
  addPokemonWithVisibleDetails,
  changeAppTheme,
  changeOffset,
  changeUserInput,
  changeLimit,
  changePokemonNameFilter,
  changePokemonTypeFilter,
  removePokemonWithVisibleDetails,
  selectAppTheme,
  selectUserInput,
  selectLimit,
  selectOffset,
  selectFilterByName,
  selectFilterByType,
  selectPokemonsWithVisibleDetails,
} from '../pokemonAppSlice';
import {
  COUNT_PER_SINGLE_REQUEST,
  EVENT_CODE_ENTER_KEY,
} from '../../config/constants';
// import { FilterByName } from '../Filter/FilterByName.component';
// import { FilterByType } from '../Filter/FilterByType.component';
import { Footer } from '../../components/Footer/Footer';
import { LandingPage } from '../../components/LandingPage/LandingPage';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { PokemonList } from '../PokemonList/PokemonList.component';
import './App.scss';
import '../Filter/FilterByType.scss';
import '../Filter/FilterByName.scss';

function RenderPokemonsList({ pokemons }: any): JSX.Element {
  return (
    <>
      {pokemons.map((name: string) => (
        <PokemonList name={name} key={name} />
      ))}
    </>
  );
}

export function App(props: any): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    appTheme,
    filterByName,
    filterByType,
    limit,
    offset,
    userInput,
    pokemonsWithVisibleDetails,
  } = useAppSelector((state) => state.pokemonApp);
  const { data, isError, isLoading } = useGetPokemonListQuery(
    `limit=${limit}&offset=${offset}`
  );

  function FilterByName(props: any): JSX.Element {

    // useEffect(() => {}, [changePokemonNameFilter, filterByName, userInput, changeUserInput]);
    // const inputRef = useRef<HTMLInputElement | null>(null);

    function onChangeUserInput(
      event: React.ChangeEvent<HTMLInputElement>
    ): void {
      dispatch(changeUserInput(event.target.value));
      dispatch(changePokemonNameFilter(userInput));
      // inputRef.current?.focus();
    }

    return (
      <section className="filterByName">
        <div className="filterByName__container">
          <input
            placeholder="Filter by name"
            className="filterByName__input filterByName__input--standard"
            onChange={onChangeUserInput}
            type="text"
            // ref={(element) => (inputRef.current = element)}
            value={userInput}
          />
        </div>
      </section>
    );
  }

  function FilterByType(props: any): JSX.Element {
    function changeTypeFilter(event: any): void {
      dispatch(changePokemonTypeFilter(event.target.value as string));
    }

    return (
      <section className="filterByType">
        <div className="filterByType___container">
          <select
            onChange={changeTypeFilter}
            className="filterByType__input filterByType__input--standard"
            value={filterByType}
          >
            <option value="">ALL TYPES</option>

            {(
              Object.keys(POKEMON_SELECT_TYPES) as Array<
                keyof typeof POKEMON_SELECT_TYPES
              >
            ).map((key) => {
              return (
                <option value={[POKEMON_SELECT_TYPES[key]]}>
                  {POKEMON_SELECT_TYPES[key]}
                </option>
              );
            })}
          </select>
        </div>
      </section>
    );
  }

  //TODO: dark-light mode in redux
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

  function loadMorePokemons() {
    const increasedLimit = limit + COUNT_PER_SINGLE_REQUEST;
    const increasedOffset = offset + COUNT_PER_SINGLE_REQUEST;
    dispatch(changeLimit(increasedLimit));
    dispatch(changeOffset(increasedOffset));
  }

  function selectPokemonNames() {
    const pokemonNames = [];
    for (let key in data.results) {
      pokemonNames.push(data.results[key].name);
    }
    return pokemonNames;
  }

  return (
    <main
      className="app app--dark-light"
      // data-theme={theme}
    >
      <LandingPage />
      <div
      // data-theme={theme}
      >
        <div
          className="app__container"
          id="app-container"
          // data-theme={theme}
        >
          {/* <button
            className="app__btn app_btn--light-no-border"
            onClick={toggleDarkLightTheme}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button> */}
          <section className="app__filters">
            <FilterByType />
            <FilterByName />
          </section>
        </div>
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
      <div className="app__btn--container">
        <button
          className="app__btn app_btn--light-no-border"
          onClick={loadMorePokemons}
        >
          Load more Pokemons
        </button>
      </div>
      <ScrollIntoView selector="#landing-page">
        <button className="app__btn app_btn--light-no-border">
          Scroll to top
        </button>
      </ScrollIntoView>
      <Footer />
    </main>
  );
}
