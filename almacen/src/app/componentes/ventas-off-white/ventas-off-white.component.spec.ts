import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasOffWhiteComponent } from './ventas-off-white.component';

describe('VentasOffWhiteComponent', () => {
  let component: VentasOffWhiteComponent;
  let fixture: ComponentFixture<VentasOffWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasOffWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasOffWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
