import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderRightComponent } from './sider-right.component';



@NgModule({
  declarations: [SiderRightComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SiderRightComponent
  ]
})
export class SiderRightModule { }
