import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraOfficialComponent } from './gorra-official.component';

describe('GorraOfficialComponent', () => {
  let component: GorraOfficialComponent;
  let fixture: ComponentFixture<GorraOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraOfficialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
