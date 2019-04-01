import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private items: any;
  constructor(public socket: Socket) {
    this.socket.on('Message', (data) => {
      data.forEach((x) => {
        if (x.setting) {
          x.setting = JSON.parse(x.setting);
        }
      });
      console.log(data[0].code);
      this.items = data;
    });
  }
  ngOnInit() {
    this.socket.emit('serveronline', 'RUFY2');
  }
}
