import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jordan4NegrasBComponent } from './jordan4-negras-b.component';

describe('Jordan4NegrasBComponent', () => {
  let component: Jordan4NegrasBComponent;
  let fixture: ComponentFixture<Jordan4NegrasBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jordan4NegrasBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jordan4NegrasBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
