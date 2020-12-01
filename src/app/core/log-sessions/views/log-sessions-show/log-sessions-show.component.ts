import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogSessionsService } from '../../log-sessions.service';
import { ILogSession } from '../../models/ILogSession.model';

import { PacketsService} from '../../../packets/packets.services';

import { Chart } from 'angular-highcharts';
import { ICH4Packet } from 'src/app/core/packets/models/IPacket.model';
import { DevicesService } from 'src/app/core/devices/devices.service';
import { IDevice } from 'src/app/core/devices/models/device.interface';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
@Component({
  selector: 'ui-log-sessions-show',
  templateUrl: './log-sessions-show.component.html',
  styleUrls: ['./log-sessions-show.component.scss']
})
export class LogSessionShowComponent implements OnInit {

  public logSession: ILogSession;
  public logSessions: ILogSession[] = [];
  
  public SEARCH_KEYWORD = '';
  public logSessionId: number;

  public ch4packets: ICH4Packet[] = [];
  public devices: IDevice[] = [];

  public chart = null;

  public isPause = false;


  constructor(
    private $logSessions: LogSessionsService,
    private $packets: PacketsService,
    private $devices: DevicesService,
    private router: Router, private route: ActivatedRoute) {

  }

  async ngOnInit() {

    this.logSessionId = parseInt(this.route.snapshot.paramMap.get('logSessionId'), 10)

    const devices = await this.$devices.getAll()
    this.devices = devices;

    const packets = await this.$packets.getCH4PacketsByExperimentId(this.logSessionId);
    this.ch4packets = packets;
        
    const logSessions = await this.$logSessions.getAll();
    this.logSession = logSessions.find(logSession => logSession.id == this.logSessionId) as any;
    

  }

  doPlay(){
    this.$logSessions.doPlayById(this.logSessionId + '').then(response => {
      this.isPause = false;
    })
  }
  doPause(){
    this.$logSessions.doPauseById(this.logSessionId + '').then(response => {
      this.isPause = true;
    })
  }
  doClear(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete all records for this experiment?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.$packets.deleteAllPacketsByExperimentId(this.logSessionId + '').then(response => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
       
      }
    })
  }


  downloadReport(){
    
    const filename = 'Report';
    const objArray = JSON.parse(JSON.stringify(this.ch4packets)+'').map( objItem => { 
      const _objItem = JSON.parse(JSON.stringify(objItem)+'');
      delete _objItem['raw'];
      return _objItem
    });
    const headerList = Object.keys(objArray[0]);

    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = (i+1)+'';
        for (let index in headerList) {
           let head = headerList[index];

            line += ',' + array[i][head];
        }
        str += line + '\r\n';
    }
    

    const data = str;
    let csvData = data;

    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);



  }


  goToLogSessionAdd() {
    this.router.navigate(['add/'], { relativeTo: this.route });
  }

  goToEditLogSessionById(deviceId: string) {
    this.router.navigate(['edit/' + deviceId], { relativeTo: this.route });
  }

  goToDeleteLogSessionById(deviceId: string) {
    this.router.navigate(['delete/' + deviceId], { relativeTo: this.route });
  }

  goToShowLogSessionById(deviceId: string) {
    this.router.navigate(['show/' + deviceId], { relativeTo: this.route });
  }

}
