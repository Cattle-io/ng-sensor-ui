import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-input-icon-play',
  templateUrl: './input-icon-play.component.html',
  styleUrls: ['./input-icon-play.component.scss']
})
export class InputIconPlayComponent implements OnInit {
  @Input()
  value = '';
  
  @Output()
  nChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
