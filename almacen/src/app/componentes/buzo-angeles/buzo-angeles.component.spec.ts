import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzoAngelesComponent } from './buzo-angeles.component';

describe('BuzoAngelesComponent', () => {
  let component: BuzoAngelesComponent;
  let fixture: ComponentFixture<BuzoAngelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzoAngelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzoAngelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
