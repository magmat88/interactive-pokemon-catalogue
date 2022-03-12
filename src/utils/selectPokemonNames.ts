export function selectPokemonNames(dataResults: any): Array<string> {
  const pokemonNames = [];
  for (let key in dataResults) {
    pokemonNames.push(dataResults[key].name);
  }
  return pokemonNames;
}
