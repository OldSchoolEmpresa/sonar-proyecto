import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeComponent } from './oversize.component';

describe('OversizeComponent', () => {
  let component: OversizeComponent;
  let fixture: ComponentFixture<OversizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
