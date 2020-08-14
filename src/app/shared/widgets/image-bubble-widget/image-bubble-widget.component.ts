import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-image-bubble-widget',
  templateUrl: './image-bubble-widget.component.html',
  styleUrls: ['./image-bubble-widget.component.scss']
})
export class ImageBubbleWidgetComponent implements OnInit {


  @Input()
  src = '';
  
  constructor() { }

  ngOnInit() {
  }

}
