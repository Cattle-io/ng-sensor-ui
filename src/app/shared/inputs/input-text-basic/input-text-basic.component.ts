import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'ui-input-text-basic',
  templateUrl: './input-text-basic.component.html',
  styleUrls: ['./input-text-basic.component.scss']
})
export class InputTextBasicComponent implements OnInit {

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Output()
  nChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange($event){
    this.nChange.emit($event.target.value);
  }
}
