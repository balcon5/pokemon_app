import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{


  public favPokemon!: Pokemon | null; 
  @Output()closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(){
    this.pokemonService.favoritePokemon.subscribe(poke => {
      this.favPokemon = poke;
    })
  }

  closeDialogInter(){
    this.closeDialog.emit(true);
  }

}
