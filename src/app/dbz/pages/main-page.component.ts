import {Component} from '@angular/core';
import {Profile} from "../interfaces/profil.interface";

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public profile: Profile[] = [{
    imie: 'Krillin',
    moc: 1000
  },
    {
      imie: 'Goku',
      moc: 9500
    },
    {
      imie: 'Vegeta',
      moc: 9500
    },
    {
      imie: 'Freezer',
      moc: 1550
    }
  ]
}
