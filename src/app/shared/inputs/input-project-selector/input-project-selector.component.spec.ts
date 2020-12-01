import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProjectSelectorComponent } from './input-project-selector.component';

describe('InputProjectSelectorComponent', () => {
  let component: InputProjectSelectorComponent;
  let fixture: ComponentFixture<InputProjectSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputProjectSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProjectSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
