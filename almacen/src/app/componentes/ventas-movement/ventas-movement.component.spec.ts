import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMovementComponent } from './ventas-movement.component';

describe('VentasMovementComponent', () => {
  let component: VentasMovementComponent;
  let fixture: ComponentFixture<VentasMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasMovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
