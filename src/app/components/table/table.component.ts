import { Component, ElementRef, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon, PokemonList } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {


  private pokemonsSubscription: Subscription | undefined;
  public pokemons: any | undefined;
  public favoritePokemon: Pokemon | null= null;

  public actualPokemonsOffset: number = 0;
  public totalPokemons = 0;
  public initialPokemonOfPage = 1;
  public finalPokemonOfPage = 10;
  public finalPokemonOfPageInHtml = 10;
  public pokemonsPerPage = 10;
  public pokemonsInTable: any | undefined;
  public pokemonsSearchActive: boolean = false;
  private valueSearchPokemon: string = '';
  @ViewChild('inpuSearch')inputSearch!:ElementRef;


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
        this.totalPokemons = pokemon.count;
        this.pokemons = pokemon.results.map((poke: PokemonList, index: number) => {
          return {
            name: poke.name,
            favorite: index === 0 ? true : false
          }
        });

        this.getPokemonSingle(this.pokemons[0].name).then((pokemon: Pokemon) => {
            console.log('pokemon', pokemon);
            this.pokemonService.selectedPokemon.next(pokemon);
        });
        this.pokemonService.allPokemons.next(this.pokemons);
        this.setFavoritePokemon( this.pokemons[0].name);
        this.pokemonsToShow();
      });
  }

  pokemonsToShow(){
    
      const pokemonsFilter: PokemonList[] = this.pokemons.filter((poke:PokemonList) => poke.name.includes(this.valueSearchPokemon.toLowerCase()));
      this.pokemonsInTable = pokemonsFilter.filter((poke: PokemonList, index: number)=> index <= this.finalPokemonOfPage - 1 && index >= this.initialPokemonOfPage - 1 );
      this.totalPokemons = pokemonsFilter.length;
      
  }



  paginatorAction(direction: string){
    if(direction === 'next' ){
      if(this.totalPokemons > this.finalPokemonOfPage){
        this.actualPokemonsOffset += 10;
        this.initialPokemonOfPage += 10;
        this.finalPokemonOfPage += 10;

        this.totalPokemons > this.finalPokemonOfPage ? this.finalPokemonOfPage : this.finalPokemonOfPage = this.totalPokemons;
  
        this.pokemonsToShow();
      }
      
    }else{
      if(this.initialPokemonOfPage -10 >= 0){
        this.actualPokemonsOffset -= 10;
        this.initialPokemonOfPage -= 10;
        
        if(this.finalPokemonOfPage % 10 === 0){
          
          this.finalPokemonOfPage -= 10;
          }else{
            this.finalPokemonOfPage = Math.floor(this.finalPokemonOfPage / 10) * 10;
          }

        this.pokemonsToShow();
      }
    }
    
  }

  async getPokemonSingle(namePokemon:string):Promise<Pokemon>{
     
    const pokemonData = await this.pokemonService.getPokemon(namePokemon).toPromise();
    return {
    name: pokemonData.name,
    height: pokemonData.height,
    weight:pokemonData.weight,
    types:pokemonData.types,
    imgUrlMini: pokemonData.sprites.front_default,
    imgUrlLarge: pokemonData.sprites.other['official-artwork'].front_default
    }
  }

  setFavoritePokemon( name:string, evt?: any,){
    if(evt !== undefined){
      evt.stopPropagation();
    }
    
    this.getPokemonSingle(name).then((newFav:Pokemon)=>{
      this.pokemonService.favoritePokemon.next(newFav);
      this.favoritePokemon = this.pokemonService.favoritePokemon.value;
      this.pokemons.forEach((poke:PokemonList) => {
        poke.name === name ? poke.favorite = true : poke.favorite = false;
      });
    })
  }

  selectPokemon(name: string){
    this.getPokemonSingle(name).then((selPoke:Pokemon)=>{
      this.pokemonService.selectedPokemon.next(selPoke);
    })
  }

  searchPokemon(){
    this.valueSearchPokemon = this.inputSearch.nativeElement.value;
    this.initialPokemonOfPage = 1;
    this.finalPokemonOfPage = 10
    this.pokemonsToShow();
    this.totalPokemons > this.finalPokemonOfPage ? this.finalPokemonOfPage = 10 : this.finalPokemonOfPage = this.totalPokemons;


  }

}


