import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasGenericoComponent } from './ventas-generico.component';

describe('VentasGenericoComponent', () => {
  let component: VentasGenericoComponent;
  let fixture: ComponentFixture<VentasGenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasGenericoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
