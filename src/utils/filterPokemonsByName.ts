import { PokemonDataType } from '../config/state';

export function filterPokemonsByName(
  pokemons: Array<PokemonDataType>,
  filterByName: string
): Array<PokemonDataType> {
  return pokemons.filter((pokemon) => pokemon.name.includes(filterByName));
}
