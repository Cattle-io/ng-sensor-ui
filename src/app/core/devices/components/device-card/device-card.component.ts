import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDevice } from '../../models/device.interface';
import { IAnimal } from '../../models/animal.interface';
import { IExperiment } from '../../models/experiment.interface';

@Component({
  selector: 'ui-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {

  @Input()
  device: IDevice | null;

  @Input()
  animal: IAnimal | null;

  @Input()
  experiment: IExperiment | null;

  @Output()
  edit = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  public isActive = true;

  public color  = 'blue';
  public signal = 0;
  public battery = 0;
  public animal_photo = 'https://thumbs.dreamstime.com/z/electronic-monitoring-device-dairy-cow-close-profile-view-dairy-cow-wearing-electronic-monitor-helps-farmer-151791575.jpg';

  public temperature_value = 30;
  public temperature_units = '°C';

  public humidity_value = 80;
  public humidity_units = '%';

  public ch4_value = 120;
  public ch4_units = 'ppm';

  public config = {
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  public index = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      // this.isActive = Math.random() > 0.5;
      this.signal = 80 + 20 * (Math.random() - Math.random());
      this.battery = 30 + 20 * (Math.random() - Math.random());
    }, 1000);
  }

  getCardTitle(): string {
    return this.device.name + ' ' + this.device.uid;
  }
  getCardSubtitle(): string{
    return 'Exp ' + this.device.experiment_id + ' Animal ' + this.device.animal_id;
  }

  doEdit(){
    this.edit.emit(this.device.id);
  }
  doDelete(){
    this.delete.emit(this.device.id);
  }

}
