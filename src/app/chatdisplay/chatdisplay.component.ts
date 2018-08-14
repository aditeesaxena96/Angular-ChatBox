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
    this.id = JSON.parse(sessionStorage.getItem('Userdata')).id
    this.image=JSON.parse(sessionStorage.getItem('Userdata')).image
    this.name=JSON.parse(sessionStorage.getItem('Userdata')).name
  }
  channels_name="";
  image;
  name :string;
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
  //name1 = localStorage.getItem('name');
  id;
  messageurl: string = "https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels";

  
  addCh() {
    if (this.str_add != "") {
      var channeldetail = this.api.createChannel(this.str_add);
      channeldetail.subscribe(Response => { });
      //this.channellist=this.api.Allchannel;
      this.showchannel();

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
    this.loading=true;
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
  public loading =false;
  channelsId;
  joinchannel(channelsId) {
    this.member = channelsId;
    this.channels_name=channelsId.unique_name
    var all_ch = this.api.joinchannel_descript(channelsId);
    all_ch.subscribe(data => { });
  }
  Send(id) {
  
    // console.log(this.member)
  }
  length;
  channelfound;
  channelsearch1
  channelsearch()
  {
    var flag=false; 
  //  console.log(this.channelarray,this.channelsearch1)
    this.channelarray.forEach(element => {
      if(element.unique_name===this.channelsearch1)
      {
        console.log(element);
        this.channelfound=element.unique_name;
      }
      
    });
  }

  logout()
  {
    sessionStorage.removeItem('Userdata');
    this.route.navigate(['/login']);
  }

  ngOnInit() {
    setInterval(() => { this.Show() }, 1000)
    this.showchannel();
    
  }

}
