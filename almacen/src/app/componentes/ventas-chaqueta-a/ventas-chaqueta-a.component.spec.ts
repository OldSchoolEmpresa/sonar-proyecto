import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasChaquetaAComponent } from './ventas-chaqueta-a.component';

describe('VentasChaquetaAComponent', () => {
  let component: VentasChaquetaAComponent;
  let fixture: ComponentFixture<VentasChaquetaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasChaquetaAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasChaquetaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
