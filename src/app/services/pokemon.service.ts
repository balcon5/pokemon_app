import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public favoritePokemon: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>({
    name:'charizard',
    imgUrlMini:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    imgUrlLarge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
  }); 

  constructor(private http: HttpClient) { }

  getPokemons(offset:number): Observable<any> {
    return this.http.get<any>(`${environment.urlApiPokemon}pokemon?offset=${offset.toString()}&limit=10`)
      .pipe(map(data => data));
  }

  getPokemon(name:string): Observable<any> {
    return this.http.get<any>(`${environment.urlApiPokemon}pokemon/${name}`)
      .pipe(map(data => data));
  }
}
