import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraVisorComponent } from './gorra-visor.component';

describe('GorraVisorComponent', () => {
  let component: GorraVisorComponent;
  let fixture: ComponentFixture<GorraVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraVisorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
