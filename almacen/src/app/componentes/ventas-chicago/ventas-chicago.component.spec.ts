import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasChicagoComponent } from './ventas-chicago.component';

describe('VentasChicagoComponent', () => {
  let component: VentasChicagoComponent;
  let fixture: ComponentFixture<VentasChicagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasChicagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
