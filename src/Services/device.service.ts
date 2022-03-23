import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
  
  
export class DeviceService {

  constructor(private http:HttpClient) { }

  getAllDevices() {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return this.http.get<any>('https://connect.paj-gps.de/api/device', options).pipe(map(res => res)) ;
  }

  GetCoordsOfDevice(deviceId) {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return this.http.get<any>('https://connect.paj-gps.de/api/logbook/getAllRoutes/'+deviceId, options).pipe(map(res => res));
  }
}
