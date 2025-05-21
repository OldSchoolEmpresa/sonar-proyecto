import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzoBostonComponent } from './buzo-boston.component';

describe('BuzoBostonComponent', () => {
  let component: BuzoBostonComponent;
  let fixture: ComponentFixture<BuzoBostonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzoBostonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzoBostonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
