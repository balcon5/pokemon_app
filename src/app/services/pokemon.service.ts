import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonList } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public allPokemons: BehaviorSubject<PokemonList[]> = new BehaviorSubject<PokemonList[]>([]);

  public favoritePokemon: BehaviorSubject<Pokemon | null> = new BehaviorSubject<Pokemon | null>(null);
  
  public selectedPokemon: BehaviorSubject<Pokemon | null> = new BehaviorSubject<Pokemon | null>(null);

  constructor(private http: HttpClient) { }

  getPokemons(offset:number): Observable<any> {
    return this.http.get<any>(`${environment.urlApiPokemon}pokemon?offset=${offset.toString()}&limit=2000`)
      .pipe(map(data => data));
  }

  getPokemon(name:string): Observable<any> {
    return this.http.get<any>(`${environment.urlApiPokemon}pokemon/${name}`)
      .pipe(map(data => data));
  }
}
