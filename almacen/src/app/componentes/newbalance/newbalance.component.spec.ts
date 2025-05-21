import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbalanceComponent } from './newbalance.component';

describe('NewbalanceComponent', () => {
  let component: NewbalanceComponent;
  let fixture: ComponentFixture<NewbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewbalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
