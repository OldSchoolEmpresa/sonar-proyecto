import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jordan3RetroComponent } from './jordan3-retro.component';

describe('Jordan3RetroComponent', () => {
  let component: Jordan3RetroComponent;
  let fixture: ComponentFixture<Jordan3RetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jordan3RetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jordan3RetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
