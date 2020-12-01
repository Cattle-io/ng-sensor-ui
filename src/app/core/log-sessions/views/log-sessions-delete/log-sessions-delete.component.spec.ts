import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSessionDeleteComponent } from './log-sessiondelete.component';

describe('LogSessionDeleteComponent', () => {
  let component: LogSessionDeleteComponent;
  let fixture: ComponentFixture<LogSessionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSessionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSessionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
