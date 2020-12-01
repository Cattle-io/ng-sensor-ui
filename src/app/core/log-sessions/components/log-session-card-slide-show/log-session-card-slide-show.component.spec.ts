import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionCardSlideShowComponent } from './log-session-card-slide-show.component';

describe('LogSessionCardSlideShowComponent', () => {
  let component:LogSessionCardSlideShowComponent;
  let fixture: ComponentFixture<LogSessionCardSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionCardSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionCardSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
