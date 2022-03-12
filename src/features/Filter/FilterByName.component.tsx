import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeUserInput, changePokemonNameFilter } from '../pokemonAppSlice';
import './FilterByName.scss';

export function FilterByName(props: any): JSX.Element {
  const dispatch = useAppDispatch();
  const { filterByName, userInput } = useAppSelector(
    (state) => state.pokemonApp
  );
  // useEffect(() => {}, [changePokemonNameFilter, filterByName, userInput, changeUserInput]);
  // const inputRef = useRef<HTMLInputElement | null>(null);

  function onChangeUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
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
          // value={userInput}
        />
      </div>
    </section>
  );
}
