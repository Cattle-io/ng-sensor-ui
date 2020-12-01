import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextIconComponent } from './input-text-icon.component';

describe('InputTextIconComponent', () => {
  let component: InputTextIconComponent;
  let fixture: ComponentFixture<InputTextIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
