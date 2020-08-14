import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectBasicComponent } from './input-select-basic.component';

describe('InputSelectBasicComponent', () => {
  let component: InputSelectBasicComponent;
  let fixture: ComponentFixture<InputSelectBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
