import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeAzulMComponent } from './oversize-azul-m.component';

describe('OversizeAzulMComponent', () => {
  let component: OversizeAzulMComponent;
  let fixture: ComponentFixture<OversizeAzulMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeAzulMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeAzulMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
