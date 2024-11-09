import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../services/pokemon.service';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from './pokemon.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ResultPokemon } from './../interfaces/pokemon.interface';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons),
      mergeMap(() =>
        this.pokemonService.getPokemons(0).pipe(
          map((data: ResultPokemon) => loadPokemonsSuccess({ data })),
          catchError(error => of(loadPokemonsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private pokemonService: PokemonService) {}
}
