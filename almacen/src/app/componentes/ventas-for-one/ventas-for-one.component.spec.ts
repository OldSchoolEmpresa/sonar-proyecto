import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasForOneComponent } from './ventas-for-one.component';

describe('VentasForOneComponent', () => {
  let component: VentasForOneComponent;
  let fixture: ComponentFixture<VentasForOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasForOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasForOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
