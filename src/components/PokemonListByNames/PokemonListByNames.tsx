import { RenderPokemonItem } from '../../features/RenderPokemonItem/RenderPokemonItem.component';
import { FilterByName } from '../../features/Filter/FilterByName.component';
import { FilterByType } from '../../features/Filter/FilterByType.component';
import { LoadMorePokemons } from '../../features/LoadMorePokemons/LoadMorePokemons.component';

import './PokemonListByNames.scss';

interface PokemonListByNamesProps {
  pokemons: Array<string>;
}

export function PokemonListByNames({
  pokemons,
}: PokemonListByNamesProps): JSX.Element {
  // function EmptyListInfo(): JSX.Element {
  //   return <>There are no pokemons of selected type. Load more pokemons.</>;
  // }

  return (
    <>
      <section className="app__filters">
        <FilterByType />
        <FilterByName />
      </section>
      <ul className="pokemonList--unordered">
        {pokemons.map((name: string) => (
          <li className="pokemonList__listItem" key={name}>
            <RenderPokemonItem name={name} />
          </li>
        ))}
      </ul>
      <LoadMorePokemons />
    </>
  );
}
