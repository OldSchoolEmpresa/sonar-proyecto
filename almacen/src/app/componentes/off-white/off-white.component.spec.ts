import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffWhiteComponent } from './off-white.component';

describe('OffWhiteComponent', () => {
  let component: OffWhiteComponent;
  let fixture: ComponentFixture<OffWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
