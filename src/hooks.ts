import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import {
  fetchPokemonByName,
  selectStatusByName,
  selectDataByName,
  selectStatusList,
  selectDataList,
  fetchPokemonList,
} from './features/pokemonApiSlice';

export function useGetPokemonByNameQuery(name: string) {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => selectStatusByName(state, name));
  const data = useSelector((state: RootState) => selectDataByName(state, name));

  useEffect(() => {
    if (status === undefined) {
      dispatch(fetchPokemonByName(name));
    }
  }, [status, name, dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess };
}

export function useGetPokemonListQuery(limitAndOffset: string) {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) =>
    selectStatusList(state, limitAndOffset)
  );
  const data = useSelector((state: RootState) =>
    selectDataList(state)
  );
  useEffect(() => {
    if (status === undefined) {
      dispatch(fetchPokemonList(limitAndOffset));
    }
  }, [status, limitAndOffset, dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  return { data, isUninitialized, isLoading, isError, isSuccess };
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;