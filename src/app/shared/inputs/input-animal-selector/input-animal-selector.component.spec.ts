import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAnimalSelectorComponent } from './input-animal-selector.component';

describe('InputAnimalSelectorComponent', () => {
  let component: InputAnimalSelectorComponent;
  let fixture: ComponentFixture<InputAnimalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAnimalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAnimalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
