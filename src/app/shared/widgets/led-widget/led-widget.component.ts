import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-led-widget',
  templateUrl: './led-widget.component.html',
  styleUrls: ['./led-widget.component.scss']
})
export class LedWidgetComponent implements OnInit {

  @Input()
  label = '';

  @Input()
  value = false;

  @Output()
  nClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.nClick.emit();
  }

}
