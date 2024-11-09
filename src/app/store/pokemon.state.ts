import { ResultPokemon } from "../interfaces/pokemon.interface";

export interface PokemonState {
  data: ResultPokemon | null;
  loading: boolean;
  error: string | null;
}

export const initialState: PokemonState = {
  data: null,
  loading: false,
  error: null,
};