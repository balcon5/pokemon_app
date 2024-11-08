import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SiderRightModule } from '../sider-right/sider-right.module';
import { TableModule } from '../table/table.module';
import { HeaderModule } from '../header/header.module';
import { DialogModule } from '../dialog/dialog.module';
import { AlphabetTableModule } from '../alphabet-table/alphabet-table.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TableModule,
    SiderRightModule,
    DialogModule,
    AlphabetTableModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
