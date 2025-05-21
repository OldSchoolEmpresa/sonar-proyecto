import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetaTpComponent } from './chaqueta-tp.component';

describe('ChaquetaTpComponent', () => {
  let component: ChaquetaTpComponent;
  let fixture: ComponentFixture<ChaquetaTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetaTpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetaTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
