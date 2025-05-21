import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorrasAComponent } from './gorras-a.component';

describe('GorrasAComponent', () => {
  let component: GorrasAComponent;
  let fixture: ComponentFixture<GorrasAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorrasAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorrasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
