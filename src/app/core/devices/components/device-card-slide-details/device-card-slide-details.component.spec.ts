import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardSlideDetailsComponent } from './device-card-slide-details.component';

describe('DeviceCardSlideDetailsComponent', () => {
  let component: DeviceCardSlideDetailsComponent;
  let fixture: ComponentFixture<DeviceCardSlideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCardSlideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardSlideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
