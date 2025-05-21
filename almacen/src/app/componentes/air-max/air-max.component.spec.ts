import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirMaxComponent } from './air-max.component';

describe('AirMaxComponent', () => {
  let component: AirMaxComponent;
  let fixture: ComponentFixture<AirMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
