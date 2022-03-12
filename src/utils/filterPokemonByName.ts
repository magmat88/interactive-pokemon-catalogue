export function filterPokemonByName(
  filterByName: string,
  name: string
): Boolean {
  return !filterByName ? true : name.includes(filterByName.toLowerCase());
}
