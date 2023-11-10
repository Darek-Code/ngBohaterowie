import {Component, Input} from '@angular/core';
import {Profile} from "../../interfaces/profil.interface";

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input()
  public listaProfile: Profile[] = [{
    imie: 'Trunks',
    moc: 10
  }]
}
