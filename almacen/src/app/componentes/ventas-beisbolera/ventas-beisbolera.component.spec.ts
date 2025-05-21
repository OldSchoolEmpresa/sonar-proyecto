import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBeisboleraComponent } from './ventas-beisbolera.component';

describe('VentasBeisboleraComponent', () => {
  let component: VentasBeisboleraComponent;
  let fixture: ComponentFixture<VentasBeisboleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasBeisboleraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBeisboleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
