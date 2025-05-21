import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzoLakersComponent } from './buzo-lakers.component';

describe('BuzoLakersComponent', () => {
  let component: BuzoLakersComponent;
  let fixture: ComponentFixture<BuzoLakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzoLakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzoLakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
