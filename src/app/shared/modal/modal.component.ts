import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('isOpen') isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
