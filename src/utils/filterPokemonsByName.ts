export function filterPokemonsByName(
  pokemons: Array<string>,
  filterByName: string
): Array<string> {
  return pokemons.filter((pokemonName: string) =>
    pokemonName.includes(filterByName)
  );
}
