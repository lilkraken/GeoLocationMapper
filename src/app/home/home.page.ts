import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { DeviceService } from 'src/Services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  DeviceList: any[] = [];
  UserDetails: any[] = [];
  DevicesCoordsList: any;
  CoordinatesList: any;
  datepipe = new DatePipe('En-us')

  constructor(public deviceService: DeviceService, public authservice: AuthService) {
  }

  ngOnInit() {
    this.GetAllDevices();
  }
  ionViewWillEnter() {
    if (localStorage.getItem('UserDetails')) {
      // console.log(JSON.parse(localStorage.getItem('UserDetails')).success.token);
    } else {
      this.login();
    }
  }

  login() {
    this.authservice.Login().subscribe(data => {
      if (data) {
        this.UserDetails = data;
        localStorage.setItem('UserDetails', JSON.stringify(data))
        // console.log(this.UserDetails);
      }
    })
  }


  GetAllDevices() {
    this.deviceService.getAllDevices().subscribe(data => {
      if (data) {
        this.DeviceList = data.success;
        // console.log(this.DeviceList);

      }
    })
  }


  GetDeviceCoordinates(deviceId) {
    this.deviceService.GetCoordsOfDevice(deviceId).subscribe(data => {
      if (data) {
        this.DevicesCoordsList = data;
        this.CoordinatesList = data.data

        console.log(this.DevicesCoordsList);
        console.log(Object.keys(this.CoordinatesList)[0]);
        console.log(Object.values(this.CoordinatesList)[0]?.[0]?.end_lat);
        console.log(Object.values(this.CoordinatesList)[0]?.[0]?.end_lng);

      }
    })
  }
}
