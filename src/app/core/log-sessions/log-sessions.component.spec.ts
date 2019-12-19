import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionsComponent } from './log-sessions.component';

describe('LogSessionsComponent', () => {
  let component: LogSessionsComponent;
  let fixture: ComponentFixture<LogSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
