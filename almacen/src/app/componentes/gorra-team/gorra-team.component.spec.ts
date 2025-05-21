import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraTeamComponent } from './gorra-team.component';

describe('GorraTeamComponent', () => {
  let component: GorraTeamComponent;
  let fixture: ComponentFixture<GorraTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
