import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColorCoverComponent } from './card-color-cover.component';

describe('CardColorCoverComponent', () => {
  let component: CardColorCoverComponent;
  let fixture: ComponentFixture<CardColorCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColorCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
