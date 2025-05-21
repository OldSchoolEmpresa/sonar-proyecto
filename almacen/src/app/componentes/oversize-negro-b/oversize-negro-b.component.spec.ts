import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeNegroBComponent } from './oversize-negro-b.component';

describe('OversizeNegroBComponent', () => {
  let component: OversizeNegroBComponent;
  let fixture: ComponentFixture<OversizeNegroBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeNegroBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeNegroBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
