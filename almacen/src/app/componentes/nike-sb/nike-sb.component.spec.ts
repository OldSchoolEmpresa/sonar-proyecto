import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeSbComponent } from './nike-sb.component';

describe('NikeSbComponent', () => {
  let component: NikeSbComponent;
  let fixture: ComponentFixture<NikeSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikeSbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikeSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
