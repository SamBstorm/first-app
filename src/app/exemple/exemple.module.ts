import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoucouComponent } from './components/coucou/coucou.component';



@NgModule({
  declarations: [
    CoucouComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [CoucouComponent]
})
export class ExempleModule { }
