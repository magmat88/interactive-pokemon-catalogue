export function checkIfPokemonDetailsVisible(
  pokemonsWithVisibleDetails: Array<string>,
  pokemonName: string
) {
  return pokemonsWithVisibleDetails.includes(pokemonName);
}
