import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAndIconWidgetComponent } from './number-and-icon-widget.component';

describe('NumberAndIconWidgetComponent', () => {
  let component: NumberAndIconWidgetComponent;
  let fixture: ComponentFixture<NumberAndIconWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberAndIconWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberAndIconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
