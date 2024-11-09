export interface Pokemon{
    name:string;
    height:number;
    weight:number;
    types:PokemonTypes[];
    imgUrlMini:string;
    imgUrlLarge:string;
    favorite: boolean | null;
}

export interface PokemonType{
    name: string;
    url: string;
}

export interface PokemonTypes{
    type:PokemonType;
}

export interface PokemonList{
    name:string;
    favorite:boolean;
}

export interface ResultPokemon {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[]; // Aquí es donde se almacenan los Pokémon
  }

