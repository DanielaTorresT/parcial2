import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './cursos-list/cursos-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CursosListComponent],
  declarations: [CursosListComponent]
  
  
})
export class CursosModule { }
