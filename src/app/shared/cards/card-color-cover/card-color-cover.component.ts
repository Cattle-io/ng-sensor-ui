import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-card-color-cover',
  templateUrl: './card-color-cover.component.html',
  styleUrls: ['./card-color-cover.component.scss']
})
export class CardColorCoverComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  image = '';

  @Input()
  cover = '';

  @Input()
  color = '';

  @Input()
  buttons: any[] = [];

  @Output()
  navigateChange = new EventEmitter();

  @Output()
  colorChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
