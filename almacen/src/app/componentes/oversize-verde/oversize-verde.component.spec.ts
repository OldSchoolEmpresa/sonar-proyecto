import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeVerdeComponent } from './oversize-verde.component';

describe('OversizeVerdeComponent', () => {
  let component: OversizeVerdeComponent;
  let fixture: ComponentFixture<OversizeVerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeVerdeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
