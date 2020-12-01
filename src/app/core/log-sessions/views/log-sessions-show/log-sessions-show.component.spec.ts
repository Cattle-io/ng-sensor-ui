import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionShowComponent } from './log-sessionshow.component';

describe('LogSessionShowComponent', () => {
  let component: LogSessionShowComponent;
  let fixture: ComponentFixture<LogSessionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
