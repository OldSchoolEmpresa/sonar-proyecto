import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeCaliforniaComponent } from './oversize-california.component';

describe('OversizeCaliforniaComponent', () => {
  let component: OversizeCaliforniaComponent;
  let fixture: ComponentFixture<OversizeCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeCaliforniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
