import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraLosAngelesComponent } from './gorra-los-angeles.component';

describe('GorraLosAngelesComponent', () => {
  let component: GorraLosAngelesComponent;
  let fixture: ComponentFixture<GorraLosAngelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraLosAngelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraLosAngelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
