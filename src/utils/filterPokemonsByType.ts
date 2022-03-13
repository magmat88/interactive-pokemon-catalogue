import { PokemonDataType } from '../config/state';

export function filterPokemonsByType(
  pokemons: Array<PokemonDataType>,
  filterByType: string
): Array<PokemonDataType> {
  return pokemons.filter((pokemon) =>
    pokemon.types.some((typeObject) => typeObject.type.name === filterByType)
  );
}
