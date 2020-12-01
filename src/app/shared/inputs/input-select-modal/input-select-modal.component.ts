import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-input-select-modal',
  templateUrl: './input-select-modal.component.html',
  styleUrls: ['./input-select-modal.component.scss']
})
export class InputSelectModalComponent implements OnInit {

  @Input()
  label = '';

  @Input()
  placeholder: any = '';

  @Input()
  options: any[];

  @Output()
  nChange = new EventEmitter();

  @Output()
  nRemove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
