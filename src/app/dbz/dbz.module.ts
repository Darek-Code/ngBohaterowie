import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./pages/main-page.component";
import { ListaComponent } from './components/lista/lista.component';
import { ProfilComponent } from './components/profil/profil.component';



@NgModule({
  declarations: [MainPageComponent, ListaComponent, ProfilComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, MainPageComponent]
})
export class DbzModule { }
