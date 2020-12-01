import { Component, OnInit, Input } from '@angular/core';
import { IDevice } from '../../models/device.interface';
import { IExperiment } from '../../models/experiment.interface';
import { IAnimal } from '../../models/animal.interface';
import { DevicesService } from '../../devices.service';

@Component({
  selector: 'ui-device-card-slide-show',
  templateUrl: './device-card-slide-show.component.html',
  styleUrls: ['./device-card-slide-show.component.scss']
})
export class DeviceCardSlideShowComponent implements OnInit {

  @Input()
  device: IDevice | null = null;

  @Input()
  experiment: IExperiment | null = null;

  @Input()
  animal: IAnimal | null = null;


  constructor(private $devices: DevicesService) { }

  ngOnInit(): void {
  }

  sendStartStopCommand(uid: string){
    const state = !(this.device.status === 'ONLINE');
    this.$devices.sendCommand(uid, state);
  }

}
