import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextBasicComponent } from './input-text-basic.component';

describe('InputTextBasicComponent', () => {
  let component: InputTextBasicComponent;
  let fixture: ComponentFixture<InputTextBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
