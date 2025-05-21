import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasJordan4Component } from './ventas-jordan4.component';

describe('VentasJordan4Component', () => {
  let component: VentasJordan4Component;
  let fixture: ComponentFixture<VentasJordan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasJordan4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasJordan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
