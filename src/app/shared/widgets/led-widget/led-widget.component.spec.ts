import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedWidgetComponent } from './led-widget.component';

describe('LedWidgetComponent', () => {
  let component: LedWidgetComponent;
  let fixture: ComponentFixture<LedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
