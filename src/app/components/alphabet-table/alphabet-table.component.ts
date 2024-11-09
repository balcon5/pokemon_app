import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from '../../interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-alphabet-table',
  templateUrl: './alphabet-table.component.html',
  styleUrls: ['./alphabet-table.component.scss']
})
export class AlphabetTableComponent implements OnInit {

  public pokemonsOrderByLetter: any | undefined;
  pokemonsAgrupados: { [key: string]: { name: string }[] } = {};

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(){
    this.pokemonService.allPokemons.subscribe((pokeList: PokemonList[])=>{
      this.pokemonsOrderByLetter = pokeList;
      this.pokemonsOrderByLetter.sort((a: PokemonList, b:PokemonList) => a.name.localeCompare(b.name));
      this.pokemonsAgrupados = this.agruparPorLetra(this.pokemonsOrderByLetter);
    });
  }

  agruparPorLetra(items: { name: string }[]) {
    return items.reduce((result, item) => {
      const letraInicial = item.name.charAt(0).toUpperCase();
      if (!result[letraInicial]) {
        result[letraInicial] = [];
      }
      result[letraInicial].push(item);
      return result;
    }, {} as Record<string, { name: string }[]>);
  }
  
  expandCollapse(numRow: number){
    const collapses: NodeListOf<HTMLDivElement> = document.querySelectorAll('.collapse');
    const collapseSelected: HTMLElement | null= document.getElementById('collapseAlphabet-' + numRow);

    collapses.forEach(row => {
      if(row.classList.contains('collapse-active') && row.id !== 'collapseAlphabet-' + numRow){
        row.classList.remove('collapse-active');
      }
    });
    collapseSelected?.classList.contains('collapse-active') ? 
    collapseSelected?.classList.remove('collapse-active') : collapseSelected?.classList.add('collapse-active')

  }
}
