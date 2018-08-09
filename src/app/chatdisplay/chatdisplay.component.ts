import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../apiservice.service';

import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-chatdisplay',
  templateUrl: './chatdisplay.component.html',
  styleUrls: ['./chatdisplay.component.css']
})
export class ChatdisplayComponent implements OnInit {

  constructor(private api: APIserviceService) { }
  str1: string;
  str_msg : string;
  str_add : string;
  str_user: string;
  str_show : string;
  getch()
  {
    this.api.getchannel().subscribe(Response=> (console.log(Response)));
  }
  addCh()
  {
  this.api.addChannel(this.str_add).subscribe(Response=> (console.log(Response)));
  }

  addmember(){
    this.api.addUser(this.str_user).subscribe(Response=> (console.log(Response)));
  }
  // (str){

  //   this.api.sendMessage(str).subscribe(Response=> (console.log(Response)));

  // }
  
  sendMsg() {
    this.api.sendMessage(this.str_msg).subscribe(res=>{
      console.log(res)
    }),
    err=>{
      console.log(err);
    }
 }

  showMsg(){
    this.api.showMessage(this.str_show).subscribe(res=>{
      console.log(res)
    },
    err=>{
      console.log(err);
    } )
  }

  messages=[];
  Show()
  {
   
   this.api.Show().subscribe(res1=>{
      console.log(res1); 
      let length =res1.messages.length;
      //var i;
      //var messages[]

      for(let index=0;index<length;index++)
      {
        this.messages.push(res1.messages[index].body);
      }
     }),
    err=>{
      console.log(err);
    } 

  }
  ngOnInit() {
    this.Show();
  }

}
