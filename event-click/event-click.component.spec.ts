import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventClickComponent } from './event-click.component';

describe('EventClickComponent', () => {
  let component: EventClickComponent;
  let fixture: ComponentFixture<EventClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
