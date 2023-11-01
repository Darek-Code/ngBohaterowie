import {Component} from '@angular/core';

@Component({
  selector: 'app-bohater',
  templateUrl: './bohater.component.html',
  styleUrls: ['./bohater.component.css']
})
export class BohaterComponent {
  public imie: string = 'Ironman';
  public wiek: number = 54;

  zmienImie(): void {
    this.imie = 'Spiderman';
  }

  zmienWiek(): void {
    this.wiek = 45;
  }

  get wielkaLitera():string {
    return this.imie.toUpperCase();
  }

  bohaterInfo(): string {
    return `${this.imie} - ${this.wiek}`
  }

  resetForm():void {
    this.imie = 'Ironman';
    this.wiek = 54;
  }
}
