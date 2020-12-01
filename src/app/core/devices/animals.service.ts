import { Injectable } from '@angular/core';
import { IAnimal } from './models/animal.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }
  getAll(): Promise<IAnimal[]>{
    return this.$http.get<IAnimal[]>(`${this.base}/animals/${this.sufix}`).toPromise();
  }
}
