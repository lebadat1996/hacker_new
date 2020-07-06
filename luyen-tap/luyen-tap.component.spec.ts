import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyenTapComponent } from './luyen-tap.component';

describe('LuyenTapComponent', () => {
  let component: LuyenTapComponent;
  let fixture: ComponentFixture<LuyenTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuyenTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuyenTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
