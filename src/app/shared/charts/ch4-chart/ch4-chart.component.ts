import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import * as HighchartsBoosting from 'highcharts/modules/boost.src';
import * as moment from 'moment';

import { HighChartOptions } from './ch4-chart.highchart.options';

import { IDevice } from 'src/app/core/devices/models/device.interface';
import { ILogSession } from 'src/app/core/log-sessions/models/ILogSession.model';
import { ICH4Packet, IPacket } from 'src/app/core/packets/models/IPacket.model';

import { filter } from 'rxjs/operators';

import { WebSocketService } from '../../websocket.service';

@Component({
  selector: 'ui-ch4-chart',
  templateUrl: './ch4-chart.component.html',
  styleUrls: ['./ch4-chart.component.scss']
})
export class Ch4ChartComponent implements OnInit {


  // propieties ::Inputs and Outputs
    @Input()
    logSession: ILogSession;

    @Input()
    packets: ICH4Packet[];

    @Input()
    devices: IDevice[];

    @Input()
    isPause: boolean = false;



  // propieties :: HighCharts
    public ch4Chart: Highcharts.Chart;
    @ViewChild('chartTag') chartTag: ElementRef;



  public chart = null;
  public messages: Array<any>;
  public chatBox: string;

  constructor(private socket: WebSocketService) {
    this.messages = [];
    this.chatBox = "";
  }

  ngOnInit(): void {
    this.initRenderChart();
    this.initWebSocketConnection();
  }

  public ngOnDestroy() {
    this.socket.close();
  }

  async initRenderChart() {
    const ch4ChartOptions = new HighChartOptions();
    ch4ChartOptions.setTitle(this.logSession.title);
    ch4ChartOptions.setXAxisTitle('Time');
    ch4ChartOptions.setYAxisTitle('CH4 [ppm]');
    await ch4ChartOptions.setInitData(this.getSeriesFromPackets());
    this.ch4Chart = Highcharts.stockChart(this.chartTag.nativeElement, ch4ChartOptions.getOptions() as any);
  }

  initWebSocketConnection() {
    this.socket.getEventListener().pipe(filter(event => event.data.type === 'CH4')).subscribe(event => {
        const ch4_ppm = parseFloat(event.data.ch4_ppm + '');
        const ch4_epoch = new Date().getTime();
        console.log('')
        console.log(' ch4_ppm ')
        console.log({ch4_ppm, event, data:event.data})
        console.log('')
        if(!this.isPause){
          const serie = this.ch4Chart.series.find( serie => serie.name === event.data.uid);
          if(serie) serie.addPoint([ch4_epoch, ch4_ppm], true, false, true);
        }
      });
  }

  getSeriesFromPackets() {
    //const devices_ids = this.packets.map(packet => packet.device_id);
    const devices_ids = this.devices
    .filter(device => (device.experiment_id + '') == (this.logSession.id + ''))
    .map(device => device.id);
    const devices = this.devices.filter(device => devices_ids.includes(device.id))
    const series = [];

    for (let k = 0; k < devices.length; k++) {
      const packets = this.packets.filter(packet => (packet.device_id === devices[k].id) && (packet.ch4_ppm));
      const data = packets.map(packet => [new Date(packet.timestamp).getTime(), parseFloat(packet.ch4_ppm + '')])
      series.push({
        label: devices[k].uid,
        title: devices[k].uid,
        name: devices[k].uid,
        data: data,
        visible: true
      })
    }
    return series
  }




}
