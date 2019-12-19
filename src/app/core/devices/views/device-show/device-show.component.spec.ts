import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceShowComponent } from './device-show.component';

describe('DeviceShowComponent', () => {
  let component: DeviceShowComponent;
  let fixture: ComponentFixture<DeviceShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
