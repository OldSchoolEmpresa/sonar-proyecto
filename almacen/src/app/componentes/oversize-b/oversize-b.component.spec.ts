import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeBComponent } from './oversize-b.component';

describe('OversizeBComponent', () => {
  let component: OversizeBComponent;
  let fixture: ComponentFixture<OversizeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
