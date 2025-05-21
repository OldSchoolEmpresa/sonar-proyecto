import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBetsportComponent } from './ventas-betsport.component';

describe('VentasBetsportComponent', () => {
  let component: VentasBetsportComponent;
  let fixture: ComponentFixture<VentasBetsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasBetsportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBetsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
