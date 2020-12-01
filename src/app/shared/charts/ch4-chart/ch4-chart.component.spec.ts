import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch4ChartComponent } from './ch4-chart.component';

describe('Ch4ChartComponent', () => {
  let component: Ch4ChartComponent;
  let fixture: ComponentFixture<Ch4ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch4ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch4ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
