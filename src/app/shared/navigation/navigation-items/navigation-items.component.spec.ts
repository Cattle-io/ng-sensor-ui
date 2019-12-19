import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemsComponent } from './navigation-items.component';

describe('NavigationItemsComponent', () => {
  let component: NavigationItemsComponent;
  let fixture: ComponentFixture<NavigationItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
