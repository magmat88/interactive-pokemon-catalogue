interface PokemonType {
  name: string;
  url: string;
}

interface PokemonTypesObject {
  slot: number;
  type: PokemonType;
}

export function extractPokemonTypeNames(pokemon: any): Array<string> {
  return pokemon.types.map((typeObject: PokemonTypesObject) => {
    return typeObject.type.name;
  });
}
