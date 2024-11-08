import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetTableComponent } from './alphabet-table.component';



@NgModule({
  declarations: [AlphabetTableComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AlphabetTableComponent
  ]
})
export class AlphabetTableModule { }
