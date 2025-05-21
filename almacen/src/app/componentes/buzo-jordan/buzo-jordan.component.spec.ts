import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzoJordanComponent } from './buzo-jordan.component';

describe('BuzoJordanComponent', () => {
  let component: BuzoJordanComponent;
  let fixture: ComponentFixture<BuzoJordanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzoJordanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzoJordanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
