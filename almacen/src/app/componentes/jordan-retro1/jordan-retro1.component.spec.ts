import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JordanRetro1Component } from './jordan-retro1.component';

describe('JordanRetro1Component', () => {
  let component: JordanRetro1Component;
  let fixture: ComponentFixture<JordanRetro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JordanRetro1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JordanRetro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
