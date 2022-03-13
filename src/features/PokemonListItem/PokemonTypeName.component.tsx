interface PokemonTypeNameProps {
  typeName: string;
}

export function PokemonTypeName({typeName}: PokemonTypeNameProps): JSX.Element {
    return (
    <div className="pokemonListItem__figcaptionItem" key={typeName}>
      <p>{typeName}</p>
    </div>
  );
}
