import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IExperiment } from '../devices/models/experiment.interface';

@Injectable({
  providedIn: 'root'
})
export class LogSessionsService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }


  getAll(): Promise<IExperiment[]>{
    return this.$http.get<IExperiment[]>(`${this.base}/experiments/${this.sufix}`).toPromise();
  }

  experimentAdd(experiment: IExperiment): Promise<IExperiment> {
    return new Promise((resolve, reject) => {
      this.$http.post(`${this.base}/experiments/`, experiment).toPromise()
      .then(response => {
          resolve(experiment);
      }).catch(error => {
        reject(error);
      });
    });
  }

  experimentUpdate(experiment: IExperiment): Promise<IExperiment> {
    return new Promise((resolve, reject) => {
      const _experiment = experiment;
      const id = JSON.parse(JSON.stringify(experiment.id) + '');
      _experiment.updated_at = new Date();
      delete _experiment.id;
      this.$http.patch(`${this.base}/experiments/${id}`, experiment).toPromise()
      .then(response => {
          resolve(experiment);
      }).catch(error => {
        reject(error);
      });
    });
  }

  experimentRemove(experimentId: string): Promise<IExperiment| any> {
    return new Promise((resolve, reject) => {
      this.$http.delete(`${this.base}/experiments/${experimentId}`).toPromise()
      .then(response => {
          resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }


  
  doPlayById(experimentId: string): Promise<IExperiment| any> {
    return new Promise((resolve, reject) => {
      this.$http.delete(`${this.base}/experiments/do/play/by/id/${experimentId}`).toPromise()
      .then(response => {
          resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  
  doPauseById(experimentId: string): Promise<IExperiment| any> {
    return new Promise((resolve, reject) => {
      this.$http.delete(`${this.base}/experiments/do/pause/by/id/${experimentId}`).toPromise()
      .then(response => {
          resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

}
