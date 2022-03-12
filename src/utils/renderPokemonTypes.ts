export function renderPokemonTypes(pokemon: any): any {
  const types: Array<string> = [];
  pokemon.types.map((item: any) => {
    types.push(item.type.name);
    return types;
  });
}
