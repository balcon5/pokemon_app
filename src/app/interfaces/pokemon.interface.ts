export interface Pokemon{
    name:string;
    height:number;
    weight:number;
    types:PokemonTypes[];
    imgUrlMini:string;
    imgUrlLarge:string;
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