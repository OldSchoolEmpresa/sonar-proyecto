import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBroklinComponent } from './ventas-broklin.component';

describe('VentasBroklinComponent', () => {
  let component: VentasBroklinComponent;
  let fixture: ComponentFixture<VentasBroklinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasBroklinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBroklinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
