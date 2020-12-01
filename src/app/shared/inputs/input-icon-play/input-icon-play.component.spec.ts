import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIconPlayComponent } from './input-icon-play.component';

describe('InputIconPlayComponent', () => {
  let component: InputIconPlayComponent;
  let fixture: ComponentFixture<InputIconPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIconPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIconPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
