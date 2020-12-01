import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DevicesService } from '../../devices.service';
import { IDevice } from '../../models/device.interface';

import { AddDevice } from '../../store/device.actions';

@Component({
  selector: 'ui-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  public status = 'OFFLINE';
  public isCreatingDevice = false;
  public DEVICE: IDevice = {
    id: -1,
    animal_id: -1,
    experiment_id:  -1,
    ip: '-',
    uid: '-',
    name: '-',
    category: 'PROTOTYPE_2020',
    firmware: '0.0.0',
    status: 'OFFLINE',
    picture_url: '',
    last_signal_level: -1,
    last_battery_level: -1,
    temperature_value: -1,
    temperature_units: '',
    humidity_value: -1,
    humidity_units: '',
    ch4_value: -1,
    ch4_units: '',
    created_at: new Date(),
    updated_at: new Date(),
  };

  constructor(private store: Store, private $devices: DevicesService) { }

  ngOnInit() {}

  addDevice(name: string) {
    this.store.dispatch(new AddDevice(name)).subscribe(() =>
      console.warn('')
    );
  }

  setName($event){
    this.DEVICE.name = $event;
  }
  setUID($event){
    this.DEVICE.uid = $event;
  }
  setIP($event){
    this.DEVICE.ip = $event;
  }
  setAnimal($event){
    this.DEVICE.animal_id = $event;
  }
  setExperiment($event){
    this.DEVICE.experiment_id = $event;
  }
  addNewDevice(){
    this.isCreatingDevice = true;
    const device = JSON.parse(JSON.stringify(this.DEVICE) + '');
    this.$devices.deviceAdd(device).then(response => {
      this.isCreatingDevice = false;
    }).catch(error => {
      console.error(error);
      this.isCreatingDevice = false;
    });
  }
}
