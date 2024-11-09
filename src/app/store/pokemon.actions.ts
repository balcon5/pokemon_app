import { createAction, props } from '@ngrx/store';
import { ResultPokemon } from './../interfaces/pokemon.interface';

export const loadPokemons = createAction('[Pokemon] Load Pokemons');

export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ data: ResultPokemon }>() // Aquí especificamos que data es de tipo ResultPokemon
);

export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: any }>()
);