import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionCardSlideDetailsComponent } from './log-session-card-slide-details.component';

describe('DeviceCardSlideDetailsComponent', () => {
  let component: LogSessionCardSlideDetailsComponent;
  let fixture: ComponentFixture<LogSessionCardSlideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionCardSlideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionCardSlideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
