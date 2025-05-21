import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeisbolerasComponent } from './beisboleras.component';

describe('BeisbolerasComponent', () => {
  let component: BeisbolerasComponent;
  let fixture: ComponentFixture<BeisbolerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeisbolerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeisbolerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
