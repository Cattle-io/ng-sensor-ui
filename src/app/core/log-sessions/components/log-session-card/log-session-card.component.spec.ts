import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionCardComponent } from './log-session-card.component';

describe('LogSessionCardComponent', () => {
  let component: LogSessionCardComponent;
  let fixture: ComponentFixture<LogSessionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
