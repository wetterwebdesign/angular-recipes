import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server created';

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created';
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }

}
