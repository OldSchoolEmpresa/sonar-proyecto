import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasJordanComponent } from './ventas-jordan.component';

describe('VentasJordanComponent', () => {
  let component: VentasJordanComponent;
  let fixture: ComponentFixture<VentasJordanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasJordanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasJordanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
