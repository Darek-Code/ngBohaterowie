import {Component} from '@angular/core';
import {Profile} from "../../interfaces/profil.interface";

@Component({
  selector: 'dbz-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  public profil: Profile = {
    imie: 'Son Gohan',
    moc: 9900
  };

  emitProfil(): void {
    console.log(this.profil);
  }
}
