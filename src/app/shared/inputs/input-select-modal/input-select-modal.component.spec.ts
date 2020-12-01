import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectModalComponent } from './input-select-modal.component';

describe('InputSelectModalComponent', () => {
  let component: InputSelectModalComponent;
  let fixture: ComponentFixture<InputSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
