import { PokemonTypesObject } from '../../config/state';

export function PokemonTypeName(
  pokemonTypesObject: PokemonTypesObject
): JSX.Element {
  return (
    <div className="pokemon__figcaptionItem" key={pokemonTypesObject.type.name}>
      <p>{pokemonTypesObject.type.name}</p>
    </div>
  );
}
