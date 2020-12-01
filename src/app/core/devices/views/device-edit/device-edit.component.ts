import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../devices.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDevice } from '../../models/device.interface';

@Component({
  selector: 'ui-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {

  public deviceId = 0;
  public device: IDevice;
  public animals = null;
  public experiment = null;
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

  constructor(private $devices: DevicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceId = parseInt(this.route.snapshot.paramMap.get('deviceId'), 10);
    this.$devices.getAll().then(devices => {
      this.device = devices.find(device => device.id == this.deviceId);
      this.DEVICE = { ...JSON.parse(JSON.stringify(this.DEVICE) + ''), ...JSON.parse(JSON.stringify(this.device) + '')};
    });
  }

  getCategoryBackground(){
    return 'url(' + 'https://1001freedownloads.s3.amazonaws.com/icon/thumb/334566/Industry-Circuit-icon.png' + ')';
  }

  onNameChange($event){}


  setName($event) {
    this.DEVICE.name = $event;
  }
  setUID($event) {
    this.DEVICE.uid = $event;
  }
  setIP($event) {
    this.DEVICE.ip = $event;
  }
  setAnimal($event) {
    this.DEVICE.animal_id = $event;
  }
  setExperiment($event) {
    console.warn(' ');
    console.warn(' ');
    console.warn(' $event ');
    console.warn(' ');
    console.warn(' ');
    this.DEVICE.experiment_id = $event;
  }

  updateDevice() {

    this.isCreatingDevice = true;
    const device = JSON.parse(JSON.stringify(this.DEVICE) + '');
    this.$devices.deviceUpdate(device).then(response => {
      this.isCreatingDevice = false;
    }).catch(error => {
      console.error(error);
      this.isCreatingDevice = false;
    });
  }
}
