import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeisboleraAComponent } from './beisbolera-a.component';

describe('BeisboleraAComponent', () => {
  let component: BeisboleraAComponent;
  let fixture: ComponentFixture<BeisboleraAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeisboleraAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeisboleraAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
