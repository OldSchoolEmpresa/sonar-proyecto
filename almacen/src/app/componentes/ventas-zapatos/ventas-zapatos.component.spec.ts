import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasZapatosComponent } from './ventas-zapatos.component';

describe('VentasZapatosComponent', () => {
  let component: VentasZapatosComponent;
  let fixture: ComponentFixture<VentasZapatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasZapatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
