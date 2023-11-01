import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohaterComponent } from './bohater.component';

describe('BohaterComponent', () => {
  let component: BohaterComponent;
  let fixture: ComponentFixture<BohaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BohaterComponent]
    });
    fixture = TestBed.createComponent(BohaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
