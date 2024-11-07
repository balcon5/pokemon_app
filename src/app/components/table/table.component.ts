import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {


  private pokemonsSubscription: Subscription | undefined;
  public pokemons: any | undefined;
  public favoritePokemon: Pokemon | undefined;

  public actualPokemonsOffset: number = 0;
  public totalPokemons = 0;
  public initialPokemonOfPage = 1;
  public finalPokemonOfPage = 10;  

  constructor(private pokemonService:PokemonService){

  }

  ngOnInit(){

    this.getPokemonSingle('charizard').then((pokemon: Pokemon) =>{
      this.pokemonService.favoritePokemon.next(pokemon);
      this.favoritePokemon = this.pokemonService.favoritePokemon.value;
      this.getPokemonsByService(this.actualPokemonsOffset);
    });
    
    

  }

  ngOnDestroy(){
    
    this.pokemonsSubscription?.unsubscribe();

  }

  getPokemonsByService(offset: number):any{
    this.pokemonsSubscription = this.pokemonService.getPokemons(offset)
      .subscribe((pokemon: any) => {
        console.log('pokemons', pokemon);
        this.totalPokemons = pokemon.count;
        this.pokemons = pokemon.results.map((poke: any) => {
          return {
            name: poke.name,
            favorite: poke.name === this.favoritePokemon?.name ? true : false
          }
        });
      });
  }

  paginatorAction(direction: string){
    if(direction === 'next'){
      
      this.actualPokemonsOffset += 10;
      this.initialPokemonOfPage += 10;
      this.finalPokemonOfPage += 10;
      this.getPokemonsByService(this.actualPokemonsOffset);
      
    }else{
      if(this.actualPokemonsOffset > 0){
        this.actualPokemonsOffset -= 10;
        this.initialPokemonOfPage -= 10;
        this.finalPokemonOfPage -= 10;
        this.getPokemonsByService(this.actualPokemonsOffset);
      }
    }
    
  }

  async getPokemonSingle(namePokemon:string):Promise<Pokemon>{
     
    const pokemonData = await this.pokemonService.getPokemon(namePokemon).toPromise();
  
    return {
    name: pokemonData.name,
    imgUrlMini: pokemonData.sprites.front_default,
    imgUrlLarge: pokemonData.sprites.other['official-artwork'].front_default
    }
  }

  setFavoritePokemon(name:string){
    this.getPokemonSingle(name).then((newFav:Pokemon)=>{
      this.pokemonService.favoritePokemon.next(newFav);
      this.favoritePokemon = this.pokemonService.favoritePokemon.value;
      this.getPokemonsByService(this.actualPokemonsOffset);
    })
      
    
    
  }

}


