import {Component} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public imieBohaterow: string[] = ['Spiderman', 'Ironman', 'Batman', 'Horseman', 'Eggman'];
  public usunietyBohater?: string;

  usunBohatera(): void {
    this.usunietyBohater = this.imieBohaterow.pop();
  }
}
