export function setListItemVisibilityClass(
  pokemonsWithVisibleDetails: Array<string>,
  pokemonName: string
) {
  return pokemonsWithVisibleDetails.includes(pokemonName)
    ? 'pokemonList__listItem--visible'
    : 'pokemonList__listItem--hidden';
}
