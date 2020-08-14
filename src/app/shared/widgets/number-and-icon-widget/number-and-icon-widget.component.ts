import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-number-and-icon-widget',
  templateUrl: './number-and-icon-widget.component.html',
  styleUrls: ['./number-and-icon-widget.component.scss']
})
export class NumberAndIconWidgetComponent implements OnInit {

  @Input()
  color = '';

  @Input()
  value = 0;

  @Input()
  units = '';

  @Input()
  iconType = '';

  @Input()
  iconImage = '';

  constructor() { }

  ngOnInit() {
  }

}
