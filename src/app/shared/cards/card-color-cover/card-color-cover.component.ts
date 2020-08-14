import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-card-color-cover',
  templateUrl: './card-color-cover.component.html',
  styleUrls: ['./card-color-cover.component.scss']
})
export class CardColorCoverComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  subtitle: string = '';

  @Input()
  image: string = '';

  @Input()
  cover: string = '';

  @Input()
  color: string = '';

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
