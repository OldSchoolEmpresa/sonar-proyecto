import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasNikeSbComponent } from './ventas-nike-sb.component';

describe('VentasNikeSbComponent', () => {
  let component: VentasNikeSbComponent;
  let fixture: ComponentFixture<VentasNikeSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasNikeSbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasNikeSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
