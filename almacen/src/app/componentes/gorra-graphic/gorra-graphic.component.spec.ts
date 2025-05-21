import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraGraphicComponent } from './gorra-graphic.component';

describe('GorraGraphicComponent', () => {
  let component: GorraGraphicComponent;
  let fixture: ComponentFixture<GorraGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
