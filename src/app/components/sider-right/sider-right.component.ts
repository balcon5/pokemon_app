import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-sider-right',
  templateUrl: './sider-right.component.html',
  styleUrls: ['./sider-right.component.scss']
})
export class SiderRightComponent {

  public selectedPokemon: Pokemon | null = null;

  constructor(private pokemonService:PokemonService){

  }

  ngOnInit(){
    this.pokemonService.selectedPokemon.asObservable()
    .subscribe((poke:Pokemon | null) =>{
      this.selectedPokemon = poke;
    });
  }

}
