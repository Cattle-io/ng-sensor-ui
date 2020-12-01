import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionEditComponent } from './log-sessions-edit.component';

describe('LogSessionEditComponent', () => {
  let component: LogSessionEditComponent;
  let fixture: ComponentFixture<LogSessionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
