import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasLakersComponent } from './ventas-lakers.component';

describe('VentasLakersComponent', () => {
  let component: VentasLakersComponent;
  let fixture: ComponentFixture<VentasLakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasLakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasLakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
