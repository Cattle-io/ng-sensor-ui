import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDevice } from '../../models/device.interface';

@Component({
  selector: 'ui-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {

  @Input()
  device: IDevice;

  @Output()
  edit = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  private isActive = true;

  private color  = 'blue';
  private signal = 0;
  private battery = 0;
  private animal_photo = 'https://thumbs.dreamstime.com/z/electronic-monitoring-device-dairy-cow-close-profile-view-dairy-cow-wearing-electronic-monitor-helps-farmer-151791575.jpg'

  private temperature_value = 30;
  private temperature_units = '°C';

  private humidity_value = 80;
  private humidity_units = '%';

  private ch4_value = 120;
  private ch4_units = 'ppm';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      //this.isActive = Math.random() > 0.5;
      this.signal = 80 + 20*(Math.random()-Math.random())
      this.battery = 30 + 20*(Math.random()-Math.random())
    },1000)
  }

  getCardTitle(): string {
    return this.device.name + ' ' + this.device.uid 
  }
  getCardSubtitle(): string{
    return 'Exp ' + this.device.experiment_id + ' Animal ' + this.device.animal_id
  }

  doEdit(){
    this.edit.emit(this.device.id)
  }
  doDelete(){
    this.delete.emit(this.device.id)
  }

}
