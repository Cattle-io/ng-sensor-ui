import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-input-text-icon',
  templateUrl: './input-text-icon.component.html',
  styleUrls: ['./input-text-icon.component.scss']
})
export class InputTextIconComponent implements OnInit {

  @Input()
  icon = '';

  @Input()
  error = '';

  @Input()
  value = '';

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Output()
  nChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setText($event) {
    this.nChange.emit($event.target.value);
  }

}
