import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BohaterowieModule} from "./bohaterowie/bohaterowie.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BohaterowieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
