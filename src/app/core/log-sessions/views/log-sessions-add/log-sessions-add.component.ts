import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LogSessionsService } from '../../log-sessions.service';


@Component({
  selector: 'ui-log-sessionadd',
  templateUrl: './log-sessionadd.component.html',
  styleUrls: ['./log-sessionadd.component.scss']
})
export class LogSessionAddComponent implements OnInit {

  public status = 'OFFLINE';
  public isCreatingLogSession = false;
  public DEVICE: ILogSession = {
    id: -1,
    animal_id: -1,
    experiment_id:  -1,
    ip: '-',
    uid:'-',
    name:'-',
    category: 'PROTOTYPE_2020',
    firmware: '0.0.0',
    status:'OFFLINE',
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
  }

  constructor(private store: Store, private $log-sessions: LogSessionsService) { }

  ngOnInit() {}

  addLogSession(name: string) {
    this.store.dispatch(new AddLogSession(name)).subscribe(() =>
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
  addNewLogSession(){
    this.isCreatingLogSession = true;
    const device = JSON.parse(JSON.stringify(this.DEVICE) + '')
    this.$log-sessions.deviceAdd(device).then(response => {
      this.isCreatingLogSession = false;
    }).catch(error => {
      console.error(error)
      this.isCreatingLogSession = false;
    })
  }
}
