import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasCaliforniaComponent } from './ventas-california.component';

describe('VentasCaliforniaComponent', () => {
  let component: VentasCaliforniaComponent;
  let fixture: ComponentFixture<VentasCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasCaliforniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
