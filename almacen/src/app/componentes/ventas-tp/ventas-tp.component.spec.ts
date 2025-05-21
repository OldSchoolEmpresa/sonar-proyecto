import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasTpComponent } from './ventas-tp.component';

describe('VentasTpComponent', () => {
  let component: VentasTpComponent;
  let fixture: ComponentFixture<VentasTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasTpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
