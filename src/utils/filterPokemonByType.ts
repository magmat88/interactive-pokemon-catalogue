export function filterPokemonByType(
  filterByType: string,
  types: Array<string>
): Boolean {
  return !filterByType ? true : types.includes(filterByType);
}
