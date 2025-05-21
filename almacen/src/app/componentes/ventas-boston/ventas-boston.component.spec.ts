import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBostonComponent } from './ventas-boston.component';

describe('VentasBostonComponent', () => {
  let component: VentasBostonComponent;
  let fixture: ComponentFixture<VentasBostonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasBostonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBostonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
