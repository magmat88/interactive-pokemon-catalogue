import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './store'
import {
  fetchPokemonByName,
  selectStatusByName,
  selectDataByName,
  fetchPokemonsWithLimitAndOffset,
  selectStatusPokemons,
  selectDataPokemons,
} from './features/pokemonApiItemSlice';

export function useGetPokemonByNameQuery(name: string) {
  const dispatch = useDispatch();
  //   const status = useSelector((state: RootState) =>
  const status = useSelector((state: any) => selectStatusByName(state, name));
  const data = useSelector((state: any) => selectDataByName(state, name));
  useEffect(() => {
    // upon mount or name change, if status is uninitialized, send a request
    // for the pokemon name
    if (status === undefined) {
      dispatch(fetchPokemonByName(name));
    }
  }, [status, name, dispatch]);

  // derive status booleans for ease of use
  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess };
}

export function useGetPokemonsWithLimitAndOffset(limitAndOffset: string) {
  const dispatch = useDispatch();
  const status = useSelector((state: any) =>
    selectStatusPokemons(state, limitAndOffset)
  );
  const data = useSelector((state: any) =>
    selectDataPokemons(state, limitAndOffset)
  );
  useEffect(() => {
    if (status === undefined) {
      dispatch(fetchPokemonsWithLimitAndOffset(limitAndOffset));
    }
  }, [status, limitAndOffset, dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  return { data, isUninitialized, isLoading, isError, isSuccess };
}
