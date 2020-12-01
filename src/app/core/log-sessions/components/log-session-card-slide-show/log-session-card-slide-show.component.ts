import { Component, OnInit, Input } from '@angular/core';
import { AnimalsService } from 'src/app/core/devices/animals.service';
import { DevicesService } from 'src/app/core/devices/devices.service';
import { ProjectsService } from 'src/app/core/projects/projects.service';

import { IAnimal } from 'src/app/core/devices/models/animal.interface';
import { IDevice } from 'src/app/core/devices/models/device.interface';
import { IProject } from 'src/app/core/projects/models/project.interface';

import { LogSessionsService } from '../../log-sessions.service';
import { ILogSession } from '../../models/ILogSession.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ui-log-session-card-slide-show',
  templateUrl: './log-session-card-slide-show.component.html',
  styleUrls: ['./log-session-card-slide-show.component.scss']
})
export class LogSessionCardSlideShowComponent implements OnInit {

  @Input()
  logSession: ILogSession | null = null;

  public animals: IAnimal[];
  public devices: IDevice[];

  public project: any = {
    name : 'FUCK'
  };

  constructor(
    private $logSessions: LogSessionsService, 
    private $projects: ProjectsService,
    private $devices: DevicesService, 
    private router: Router, private route: ActivatedRoute,
    private $animals: AnimalsService) { }


  async ngOnInit() {

    const project: IProject =  await this.$projects.getById(this.logSession.id + '');
    this.project = project;

    const devices: IDevice[] =  await this.$devices.getAll();
    this.devices = devices.filter(device => (device.experiment_id + '') === (this.logSession.id + ''))

    const animals: IAnimal[] =  await this.$animals.getAll();
    const devicesAnimalsIds = this.devices.map(device => (device.animal_id) + '');

    this.animals = animals.filter(animal => devicesAnimalsIds.includes(animal.id + ''))

  }

  public get devicesUIDs(): string {
    return (this.devices.map(device => device.uid + '') || []).join(',');
  }

  public get animalsNames(): string {
    return (this.animals.map(animal => animal.name) || []).join(',');
  }

  goToShowLogSession(id){
    this.router.navigate(['show/' + id], { relativeTo: this.route });
  }


}
