import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExperimentSelectorComponent } from './input-experiment-selector.component';

describe('InputExperimentSelectorComponent', () => {
  let component: InputExperimentSelectorComponent;
  let fixture: ComponentFixture<InputExperimentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputExperimentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExperimentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
