import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  public favoritePokemon: Pokemon | null = null;
  @Output()openDialog:EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(){
    
    this.pokemonService.favoritePokemon.subscribe( (poke: Pokemon | null) => {
      this.favoritePokemon = poke;
    });
    

  }

  openDialogInter(){
    this.openDialog.emit(true);
  }
  

}
