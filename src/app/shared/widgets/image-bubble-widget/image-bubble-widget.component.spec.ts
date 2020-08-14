import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBubbleWidgetComponent } from './image-bubble-widget.component';

describe('ImageBubbleWidgetComponent', () => {
  let component: ImageBubbleWidgetComponent;
  let fixture: ComponentFixture<ImageBubbleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBubbleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBubbleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
