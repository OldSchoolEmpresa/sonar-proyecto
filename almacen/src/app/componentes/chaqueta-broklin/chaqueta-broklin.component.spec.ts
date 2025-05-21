import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaBroklinComponent } from './chaqueta-broklin.component';

describe('ChaquetaBroklinComponent', () => {
  let component: ChaquetaBroklinComponent;
  let fixture: ComponentFixture<ChaquetaBroklinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaBroklinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaBroklinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
