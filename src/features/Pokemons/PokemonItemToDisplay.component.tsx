// import { RenderPokemonItem } from '../';

export function PokemonItemToDisplay(name: string): JSX.Element {
  return (
    <li className="pokemons__listItem" key={name}>
      {/* <RenderPokemonItem name={name} /> */}
    </li>
  );
}
