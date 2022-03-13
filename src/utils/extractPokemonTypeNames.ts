import { PokemonDataType, PokemonTypesObject } from '../config/state';

export function extractPokemonTypeNames(
  pokemon: PokemonDataType
): Array<string> {
  return pokemon.types.map((typeObject: PokemonTypesObject) => {
    return typeObject.type.name;
  });
}
