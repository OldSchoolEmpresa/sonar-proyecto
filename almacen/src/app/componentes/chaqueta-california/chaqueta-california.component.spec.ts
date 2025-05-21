import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaCaliforniaComponent } from './chaqueta-california.component';

describe('ChaquetaCaliforniaComponent', () => {
  let component: ChaquetaCaliforniaComponent;
  let fixture: ComponentFixture<ChaquetaCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaCaliforniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
