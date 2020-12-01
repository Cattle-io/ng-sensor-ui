import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from '../../models/animal.interface';
import { IExperiment } from '../../models/experiment.interface';
import { IDevice } from '../../models/device.interface';

@Component({
  selector: 'ui-device-card-slide-edit',
  templateUrl: './device-card-slide-edit.component.html',
  styleUrls: ['./device-card-slide-edit.component.scss']
})
export class DeviceCardSlideEditComponent implements OnInit {

  @Input()
  device: IDevice | null = null;

  @Input()
  animal: IAnimal | null = null;

  @Input()
  animals: IAnimal[] | null = null;

  @Input()
  experiment: IExperiment | null = null;

  @Input()
  experiments: IExperiment[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange($event: any){}
  onAnimalChange($event: any){}
  onAnimalRemove($event: any){}
  onExperimentChange($event: any){}
  onExperimentRemove($event: any){}

}
