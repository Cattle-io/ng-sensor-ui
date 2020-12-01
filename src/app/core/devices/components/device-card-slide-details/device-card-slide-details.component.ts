import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../../devices.service';
import { IDevice } from '../../models/device.interface';
import { IExperiment } from '../../models/experiment.interface';
import { IAnimal } from '../../models/animal.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ui-device-card-slide-details',
  templateUrl: './device-card-slide-details.component.html',
  styleUrls: ['./device-card-slide-details.component.scss']
})
export class DeviceCardSlideDetailsComponent implements OnInit {


  @Input()
  device: IDevice | null = null;

  @Input()
  experiment: IExperiment | null = null;

  @Input()
  animal: IAnimal | null = null;


  constructor(private $devices: DevicesService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToEditDeviceById(deviceId: number){
    this.router.navigate(['edit/' + deviceId], { relativeTo: this.route });
  }
  goToDeleteDeviceById(deviceId: number){
    const result = window.confirm('Are you sure you want to delete this device?');
    if (result){
      this.$devices.deviceRemove(deviceId + '').then(response => {

      }).catch(error => {
        console.error(error);
      });
    }
  }
}
