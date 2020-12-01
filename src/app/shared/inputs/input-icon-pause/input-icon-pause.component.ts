import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-input-icon-pause',
  templateUrl: './input-icon-pause.component.html',
  styleUrls: ['./input-icon-pause.component.scss']
})
export class InputIconPauseComponent implements OnInit {

  @Input()
  value = '';
  
  @Output()
  nChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
