import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizeRojoComponent } from './oversize-rojo.component';

describe('OversizeRojoComponent', () => {
  let component: OversizeRojoComponent;
  let fixture: ComponentFixture<OversizeRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizeRojoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizeRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
