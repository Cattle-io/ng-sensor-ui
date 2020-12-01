import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionListComponent } from './log-sessions-list.component';

describe('LogSessionListComponent', () => {
  let component: LogSessionListComponent;
  let fixture: ComponentFixture<LogSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
