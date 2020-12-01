import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICH4Packet } from './models/IPacket.model';


@Injectable({
  providedIn: 'root'
})
export class PacketsService {

  private base = 'http://localhost:8000';
  private sufix = '?format=json';
  constructor(private $http: HttpClient) { }

  
  getCH4PacketsByExperimentId(experimentId: number): Promise<ICH4Packet[]>{
    return this.$http.get<ICH4Packet[]>(`${this.base}/packets/by/experimentId/${experimentId}${this.sufix}`).toPromise();
  }

  
  deleteAllPacketsByExperimentId(experimentId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.$http.delete(`${this.base}/packets/delete/by/experimentId/${experimentId}${this.sufix}`).toPromise()
      .then(response => {
          resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }

}
