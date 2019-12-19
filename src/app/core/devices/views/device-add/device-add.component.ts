import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddDevice } from '../../store/device.actions';

@Component({
  selector: 'ui-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {}

  addDevice(name: string) {
    this.store.dispatch(new AddDevice(name)).subscribe(() =>
      console.warn('')
    );
  }

}
