import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardSlideEditComponent } from './device-card-slide-edit.component';

describe('DeviceCardSlideEditComponent', () => {
  let component: DeviceCardSlideEditComponent;
  let fixture: ComponentFixture<DeviceCardSlideEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCardSlideEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardSlideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
