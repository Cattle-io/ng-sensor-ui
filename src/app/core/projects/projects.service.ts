import { Injectable } from '@angular/core';
import { IProject } from './models/project.interface';
import { HttpClient } from '@angular/common/http';
const MOCK_PROJECTS = (id) => { 
  return {
    id: parseFloat(id),
    title: 'Testing Project',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '',
    department: 'Bogota',
    city: 'Bogota',
    place_name: 'Bogota',
    place_category: 'Bogota',
    place_lat: '4.60971',
    place_lng: '4.60971 -74.08175',

    created_at: new Date(),
    updated_at: new Date(),
  }
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }

  
  getAll(): Promise<IProject[]>{
    //return this.$http.get<IProject[]>(`${this.base}/projects/${this.sufix}`).toPromise();
    return new Promise((resolve) => {
      resolve([MOCK_PROJECTS(0)])
    })
  }
  getById(id: string): Promise<IProject>{
        //return this.$http.get<IProject>(`${this.base}/projects/${id}/${this.sufix}`).toPromise();
        return new Promise((resolve) => {
            resolve(MOCK_PROJECTS(id))
        })
  }
}
