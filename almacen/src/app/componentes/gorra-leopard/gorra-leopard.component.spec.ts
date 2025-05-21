import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraLeopardComponent } from './gorra-leopard.component';

describe('GorraLeopardComponent', () => {
  let component: GorraLeopardComponent;
  let fixture: ComponentFixture<GorraLeopardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraLeopardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraLeopardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
