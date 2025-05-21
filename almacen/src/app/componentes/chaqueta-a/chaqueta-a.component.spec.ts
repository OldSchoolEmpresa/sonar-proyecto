import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaAComponent } from './chaqueta-a.component';

describe('ChaquetaAComponent', () => {
  let component: ChaquetaAComponent;
  let fixture: ComponentFixture<ChaquetaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
