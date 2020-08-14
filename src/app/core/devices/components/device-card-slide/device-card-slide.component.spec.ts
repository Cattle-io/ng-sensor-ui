import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardSlideComponent } from './device-card-slide.component';

describe('DeviceCardSlideComponent', () => {
  let component: DeviceCardSlideComponent;
  let fixture: ComponentFixture<DeviceCardSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCardSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
