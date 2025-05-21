import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasJordan3Component } from './ventas-jordan3.component';

describe('VentasJordan3Component', () => {
  let component: VentasJordan3Component;
  let fixture: ComponentFixture<VentasJordan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasJordan3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasJordan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
