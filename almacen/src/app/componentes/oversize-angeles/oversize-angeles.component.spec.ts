import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeAngelesComponent } from './oversize-angeles.component';

describe('OversizeAngelesComponent', () => {
  let component: OversizeAngelesComponent;
  let fixture: ComponentFixture<OversizeAngelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeAngelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeAngelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
