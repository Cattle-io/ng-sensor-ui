import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../devices.service';
import { IDevice } from '../../models/device.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ui-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  private devices: IDevice[] = [];
  private SEARCH_KEYWORD = '';

  constructor(private $devices: DevicesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.$devices.getAll().then(devices => this.devices = devices)
  }

  goToDeviceAdd(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  goToDeviceById(deviceId: string){
    this.router.navigate(['edit/' + deviceId], { relativeTo: this.route });
  }

  goToDeleteDeviceById(deviceId: string){
    this.router.navigate(['delete/' + deviceId], { relativeTo: this.route });
  }

}
