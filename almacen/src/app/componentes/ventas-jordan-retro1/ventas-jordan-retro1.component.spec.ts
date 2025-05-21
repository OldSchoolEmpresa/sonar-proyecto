import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasJordanRetro1Component } from './ventas-jordan-retro1.component';

describe('VentasJordanRetro1Component', () => {
  let component: VentasJordanRetro1Component;
  let fixture: ComponentFixture<VentasJordanRetro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasJordanRetro1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasJordanRetro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
