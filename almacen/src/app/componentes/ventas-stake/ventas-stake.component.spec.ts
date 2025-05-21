import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasStakeComponent } from './ventas-stake.component';

describe('VentasStakeComponent', () => {
  let component: VentasStakeComponent;
  let fixture: ComponentFixture<VentasStakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasStakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
