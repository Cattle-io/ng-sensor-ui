import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-show-widget',
  templateUrl: './show-widget.component.html',
  styleUrls: ['./show-widget.component.scss']
})
export class ShowWidgetComponent implements OnInit {


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
