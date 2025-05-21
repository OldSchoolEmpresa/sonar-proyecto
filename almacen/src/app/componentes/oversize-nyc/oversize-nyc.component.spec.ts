import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeNycComponent } from './oversize-nyc.component';

describe('OversizeNycComponent', () => {
  let component: OversizeNycComponent;
  let fixture: ComponentFixture<OversizeNycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeNycComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeNycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
