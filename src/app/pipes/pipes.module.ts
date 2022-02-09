import { NgModule } from '@angular/core';
import { FiltroCpmpletadoPipe } from './filtro-cpmpletado.pipe';



@NgModule({
  declarations: [
    FiltroCpmpletadoPipe
  ],
  exports: [
    FiltroCpmpletadoPipe
  ]
})
export class PipesModule { }
