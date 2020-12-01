import { Injectable } from '@angular/core';
import { IDevice } from './models/device.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }


  getAll(): Promise<IDevice[]>{
    return this.$http.get<IDevice[]>(`${this.base}/devices${this.sufix}`).toPromise();
  }

  sendCommand(uid: string, state: boolean){
    this.$http.post<IDevice[]>(`${this.base}/devices/send/uid/${uid}/command/${(state ? 'START' : 'STOP')}${this.sufix}`, { }).toPromise()
    .then(response => {
       console.log(' ');
       console.log(' ');
       console.log(' TODO UPDATE DEVICES STORE OBSERSAVBLE');
       console.log(response);
       console.log(' ');
       console.log(' ');
    }).catch(error => {
      console.error(' ');
      console.error(' ');
      console.error(' ERROR ');
      console.error(error);
      console.error(' ');
      console.error(' ');
    });
  }

  deviceAdd(device: IDevice): Promise<IDevice> {
    return new Promise((resolve, reject) => {
      this.$http.post(`${this.base}/devices/`, device).toPromise()
      .then(response => {
          resolve(device);
      }).catch(error => {
        reject(error);
      });
    });
  }

  deviceUpdate(device: IDevice): Promise<IDevice> {
    return new Promise((resolve, reject) => {

      const _device = device;
      const id = JSON.parse(JSON.stringify(device.id) + '');
      _device.updated_at = new Date();

      delete _device.id;

      console.clear();
      console.warn('');
      console.warn('_device');
      console.warn(_device);
      console.warn('');
 

      this.$http.patch(`${this.base}/devices/${id}`, device).toPromise()
      .then(response => {
          resolve(device);
      }).catch(error => {
        reject(error);
      });
    });
  }

  deviceRemove(deviceId: string): Promise<IDevice | any> {
    return new Promise((resolve, reject) => {
      this.$http.delete(`${this.base}/devices/${deviceId}`).toPromise()
      .then(response => {
          resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

}
