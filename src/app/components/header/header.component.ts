import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  public favoritePokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(){
    
    this.pokemonService.favoritePokemon.subscribe( (poke: Pokemon) => {
      this.favoritePokemon = poke;
    });
    

  }

}