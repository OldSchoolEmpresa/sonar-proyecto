import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzoMovementComponent } from './buzo-movement.component';

describe('BuzoMovementComponent', () => {
  let component: BuzoMovementComponent;
  let fixture: ComponentFixture<BuzoMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzoMovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzoMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
