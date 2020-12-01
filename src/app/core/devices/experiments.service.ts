import { Injectable } from '@angular/core';
import { IDevice } from './models/device.interface';
import { IExperiment } from './models/experiment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }
  getAll(): Promise<IExperiment[]>{
    return this.$http.get<IExperiment[]>(`${this.base}/experiments/${this.sufix}`).toPromise();
  }
}
