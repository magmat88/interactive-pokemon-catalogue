export interface PokemonDataType {
  abilities: Array<any>;
  base_experience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: Boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: any;
    versions: any;
  };
  stats: Array<any>;
  types: Array<PokemonTypesObject>;
  weight: number;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypesObject {
  slot: number;
  type: PokemonType;
}

export interface PokemonTypesNamesObject {
  pokemonName: string;
  pokemonTypesNames: Array<string>;
}
