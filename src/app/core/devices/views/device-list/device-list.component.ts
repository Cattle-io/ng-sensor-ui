import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DevicesService } from '../../devices.service';
import { AnimalsService } from '../../animals.service';
import { ExperimentsService } from '../../experiments.service';

import { IDevice } from '../../models/device.interface';
import { IExperiment } from '../../models/experiment.interface';
import { IAnimal } from '../../models/animal.interface';

@Component({
  selector: 'ui-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  public devices: IDevice[] = [];
  public animals: IAnimal[] = [];
  public experiments: IExperiment[] = [];
  public SEARCH_KEYWORD = '';

  constructor(
    private $devices: DevicesService,
    private $animals: AnimalsService,
    private $experiments: ExperimentsService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.$devices.getAll().then(devices => this.devices = devices);
    this.$animals.getAll().then(animals => this.animals = animals);
    this.$experiments.getAll().then(experiments => this.experiments = experiments);

    this.devices.forEach(device => {
      device.temperature_value  = 32.334;
      device.temperature_units = '°C';
    });

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
