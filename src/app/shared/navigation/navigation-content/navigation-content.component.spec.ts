import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationContentComponent } from './navigation-content.component';

describe('NavigationContentComponent', () => {
  let component: NavigationContentComponent;
  let fixture: ComponentFixture<NavigationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
