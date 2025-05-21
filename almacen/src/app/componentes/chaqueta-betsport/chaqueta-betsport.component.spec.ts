import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaBetsportComponent } from './chaqueta-betsport.component';

describe('ChaquetaBetsportComponent', () => {
  let component: ChaquetaBetsportComponent;
  let fixture: ComponentFixture<ChaquetaBetsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaBetsportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaBetsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
