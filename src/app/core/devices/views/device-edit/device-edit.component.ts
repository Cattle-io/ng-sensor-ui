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

  private deviceId: number = 0;
  private device: IDevice

  constructor(private $devices: DevicesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceId = parseInt(this.route.snapshot.paramMap.get('deviceId'), 10);
    this.$devices.getAll().then(devices => this.device = devices.find(device => device.id == this.deviceId))
  }

  getCategoryBackground(){
    return 'url(' + 'https://1001freedownloads.s3.amazonaws.com/icon/thumb/334566/Industry-Circuit-icon.png' + ')'
  }

}
