import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBarLevelWidgetComponent } from './h-bar-level-widget.component';

describe('HBarLevelWidgetComponent', () => {
  let component: HBarLevelWidgetComponent;
  let fixture: ComponentFixture<HBarLevelWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBarLevelWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBarLevelWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
