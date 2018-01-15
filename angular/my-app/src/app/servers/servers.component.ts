import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server ware created!';
  serverName = 'Test Server Here';

  userName = '';

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;

    //console.log(event);
  }

  onUpdateServerName(event:Event){
    //console.log(event);
    //this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
