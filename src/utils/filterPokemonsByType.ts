import { PokemonTypesNamesObject } from '../config/state';

export function filterPokemonsByType(
  pokemonsTypesNames: Array<PokemonTypesNamesObject>,
  filterByType: string
): Array<string> {
  const filteredPokemonsTypesNames = pokemonsTypesNames.filter(
    (pokemonTypesNamesObject) =>
      pokemonTypesNamesObject.pokemonTypesNames.includes(filterByType)
  );
  return filteredPokemonsTypesNames.map(
    (filteredPokemonTypesNames) => filteredPokemonTypesNames.pokemonName
  );
}
