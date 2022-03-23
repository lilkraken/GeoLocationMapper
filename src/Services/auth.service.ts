import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Login() {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return this.http.post<any>('https://connect.paj-gps.de/api/login?email=testkunde%40paj-gps.de&password=app123%23.', options).pipe(map(res => res));
  }

  // GetToken() {
  //   return JSON.parse(localStorage.getItem('UserDetails')).success.token
  // }
}
