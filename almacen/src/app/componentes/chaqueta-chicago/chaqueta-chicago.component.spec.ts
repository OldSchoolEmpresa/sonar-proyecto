import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaChicagoComponent } from './chaqueta-chicago.component';

describe('ChaquetaChicagoComponent', () => {
  let component: ChaquetaChicagoComponent;
  let fixture: ComponentFixture<ChaquetaChicagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaChicagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
