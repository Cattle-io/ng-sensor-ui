import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardSlideShowComponent } from './device-card-slide-show.component';

describe('DeviceCardSlideShowComponent', () => {
  let component: DeviceCardSlideShowComponent;
  let fixture: ComponentFixture<DeviceCardSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCardSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
