import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWidgetComponent } from './show-widget.component';

describe('ShowWidgetComponent', () => {
  let component: ShowWidgetComponent;
  let fixture: ComponentFixture<ShowWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
