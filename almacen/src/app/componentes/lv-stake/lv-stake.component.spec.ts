import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvStakeComponent } from './lv-stake.component';

describe('LvStakeComponent', () => {
  let component: LvStakeComponent;
  let fixture: ComponentFixture<LvStakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LvStakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LvStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
