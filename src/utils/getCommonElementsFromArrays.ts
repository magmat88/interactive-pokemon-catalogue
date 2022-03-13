import { PokemonDataType } from '../config/state';

export function getCommonElementsFromArrays(
  a: Array<PokemonDataType>,
  b: Array<PokemonDataType>
): Array<PokemonDataType> {
  return a.filter((item) => b.indexOf(item) !== -1);
}
