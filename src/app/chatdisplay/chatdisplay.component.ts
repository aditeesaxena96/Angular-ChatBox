import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../apiservice.service';

import { FormGroup } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-chatdisplay',
  templateUrl: './chatdisplay.component.html',
  styleUrls: ['./chatdisplay.component.css']
})
export class ChatdisplayComponent implements OnInit {

  constructor(private api: APIserviceService, private route: Router) {
    this.id = localStorage.getItem('id');
  }
  str1: string;
  str_msg: string;
  str_add: string;
  str_user: string;
  str_show: string;
  search: string = "";
  check: boolean = false;
  messages;
  mychannels: string;
  channellist = [];
  name1 = localStorage.getItem('name');
  id;
  messageurl: string = "https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels";


  addCh() {
    if (this.str_add != "") {
      var channeldetail = this.api.createChannel(this.str_add);
      channeldetail.subscribe(Response => { });
      //this.channellist=this.api.Allchannel;
    }

  }

  channelarray: any;
  showchannel() {
    this.api.displayChannel().subscribe(Response => {
      this.channelarray = Response.channels
      console.log(this.channelarray)
    },
      err => {
        console.log(err);
      }
    )
  }


  sendMsg() {

    this.api.sendMessage(this.str_msg, this.member).subscribe(data => console.log(data))

    var display_msg = this.api.showMessage(this.member).subscribe(data => { console.log(data.messages) })
  }

  member;

  Show() {
    if (this.member != undefined) {
      this.api.showMessage(this.member).subscribe(data => { 
       this.messages=data.messages;
       
      });
    
    }
  }

  channelsId;
  joinchannel(channelsId) {
    this.member = channelsId;

    var all_ch = this.api.joinchannel_descript(channelsId);
    all_ch.subscribe(data => { });
  }
  Send(id) {
    this.member = id;
    // console.log(this.member)
  }

  ngOnInit() {
    setInterval(() => { this.Show() }, 1000)
    this.showchannel();
  }

}
