export function PokemonTypeName(typeName: string): JSX.Element {
    return (
    <div className="pokemonListItem__figcaptionItem" key={typeName}>
      <p>{typeName}</p>
    </div>
  );
}
