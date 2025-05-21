import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraCoopsComponent } from './gorra-coops.component';

describe('GorraCoopsComponent', () => {
  let component: GorraCoopsComponent;
  let fixture: ComponentFixture<GorraCoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraCoopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraCoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
