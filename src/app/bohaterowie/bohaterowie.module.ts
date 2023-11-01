import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BohaterComponent} from "./bohater/bohater.component";
import {ListaComponent} from "./lista/lista.component";



@NgModule({
  declarations: [BohaterComponent, ListaComponent],
  exports: [BohaterComponent, ListaComponent],
  imports: [
    CommonModule
  ]
})
export class BohaterowieModule { }
