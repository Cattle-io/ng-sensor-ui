import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-h-bar-level-widget',
  templateUrl: './h-bar-level-widget.component.html',
  styleUrls: ['./h-bar-level-widget.component.scss']
})
export class HBarLevelWidgetComponent implements OnInit {


  @Input()
  color = '';

  @Input()
  value = 0;

  @Input()
  iconType = '';

  @Input()
  iconImage = '';

  constructor() { }

  ngOnInit() {
  }

}
