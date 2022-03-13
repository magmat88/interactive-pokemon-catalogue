import { PokemonDataType } from '../../config/state';
import { Pokemon } from '..';

export function PokemonItemToDisplay(pokemon: PokemonDataType): JSX.Element {
  return (
    <li className="pokemons__listItem" key={pokemon.name}>
      <Pokemon pokemon={pokemon} />
    </li>
  );
}
