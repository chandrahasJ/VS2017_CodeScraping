import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventsExpComponent } from './browser-events-exp.component';

describe('BrowserEventsExpComponent', () => {
  let component: BrowserEventsExpComponent;
  let fixture: ComponentFixture<BrowserEventsExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventsExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
