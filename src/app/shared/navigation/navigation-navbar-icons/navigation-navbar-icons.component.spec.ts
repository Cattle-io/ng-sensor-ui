import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNavbarIconsComponent } from './navigation-navbar-icons.component';

describe('NavigationNavbarIconsComponent', () => {
  let component: NavigationNavbarIconsComponent;
  let fixture: ComponentFixture<NavigationNavbarIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationNavbarIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNavbarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
