import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionAddComponent } from './log-sessionadd.component';

describe('LogSessionAddComponent', () => {
  let component: LogSessionAddComponent;
  let fixture: ComponentFixture<LogSessionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
