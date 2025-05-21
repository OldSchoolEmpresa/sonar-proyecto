import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasNewbalanceComponent } from './ventas-newbalance.component';

describe('VentasNewbalanceComponent', () => {
  let component: VentasNewbalanceComponent;
  let fixture: ComponentFixture<VentasNewbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasNewbalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasNewbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
