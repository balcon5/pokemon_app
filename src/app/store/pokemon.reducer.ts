import { createReducer, on } from '@ngrx/store';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from './pokemon.actions';
import { PokemonState, initialState } from './pokemon.state';

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, state => ({ ...state, loading: true })),
  on(loadPokemonsSuccess, (state, { data }) => ({
    ...state,
    data, // Ahora `data` es el objeto completo de tipo ResultPokemon
    loading: false
  })),
  on(loadPokemonsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
