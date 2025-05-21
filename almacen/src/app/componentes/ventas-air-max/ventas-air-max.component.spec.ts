import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAirMaxComponent } from './ventas-air-max.component';

describe('VentasAirMaxComponent', () => {
  let component: VentasAirMaxComponent;
  let fixture: ComponentFixture<VentasAirMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasAirMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasAirMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
