import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILogSession } from '../../models/ILogSession.model';

@Component({
  selector: 'ui-log-session-card',
  templateUrl: './log-session-card.component.html',
  styleUrls: ['./log-session-card.component.scss']
})
export class LogSessionCardComponent implements OnInit {

  @Input()
  logSession: ILogSession | null;

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
    return this.logSession.title + '';
  }
  getCardSubtitle(): string{
    return 'Started at ' + this.logSession.started_at + ' Finished  at ' + this.logSession.finished_at;
  }

  doEdit(){
    this.edit.emit(this.logSession.id);
  }
  doDelete(){
    this.delete.emit(this.logSession.id);
  }

}
