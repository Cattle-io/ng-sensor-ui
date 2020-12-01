import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIconPauseComponent } from './input-icon-pause.component';

describe('InputIconPauseComponent', () => {
  let component: InputIconPauseComponent;
  let fixture: ComponentFixture<InputIconPauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIconPauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIconPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
