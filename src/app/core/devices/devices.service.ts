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
    return this.$http.get<IDevice[]>(`${this.base}/devices/${this.sufix}`).toPromise();
  }
}
