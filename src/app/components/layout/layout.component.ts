import { Component } from '@angular/core';
import { PokemonList } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public activeDialog = false;
  public pokemons:PokemonList[] = [{name:'',favorite:false}];

  getPokemons(evt: PokemonList[]){
    console.log('evt', evt);
    this.pokemons = evt;
  }

  closeDialog(){
    this.activeDialog=false;
  }

  openDialog(){
    this.activeDialog=true;
  }


}
