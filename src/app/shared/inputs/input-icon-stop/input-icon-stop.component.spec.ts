import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIconStopComponent } from './input-icon-stop.component';

describe('InputIconStopComponent', () => {
  let component: InputIconStopComponent;
  let fixture: ComponentFixture<InputIconStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIconStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIconStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
