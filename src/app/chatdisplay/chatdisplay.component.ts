import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../apiservice.service';

import { FormGroup} from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-chatdisplay',
  templateUrl: './chatdisplay.component.html',
  styleUrls: ['./chatdisplay.component.css']
})
export class ChatdisplayComponent implements OnInit {

  constructor(private api: APIserviceService, private route : Router) { }
  str1: string;
  str_msg : string;
  str_add : string;
  str_user: string;
  str_show : string;
  search :string="";
  check : boolean=false;
  messages=[];
  mychannels :string;
  channellist=[];
  name1=localStorage.getItem('name');
  getch()
  {
      this.api.getchannel(this.search).subscribe(Response=> (console.log(Response))); 
  }
  
  addCh()
  {
  this.api.addChannel(this.str_add).subscribe(Response=> 
    console.log(Response.unique_name)
    )
  }
  
 channelarray:any;
  showchannel()
  {
    this.api.displayChannel().subscribe(Response =>{
      this.channelarray= Response.channels
      console.log(this.channelarray)
    },
    err=>{
      console.log(err);
    }
  )
  }


   addmember(){
     this.api.addUser(this.str_user).subscribe(Response=> (console.log(Response)));
   }
  

  
//   sendMsg() {
//     this.api.sendMessage(this.str_msg).subscribe(res=>{
// console.log(res)
//     },
//     err=>{
//       console.log(err);
//     },
//     ()=>this.Show();
//   });
// }

sendMsg() {
  this.api.sendMessage(this.str_msg).subscribe(res => {   
  },
    err => {                                                         
      console.log(err);
    },
    () => {                                                         
      this.Show();
    });
}

 
 
  Show()
  {
   if(this.api.Show!= undefined)
   {
   this.api.Show().subscribe(res1=>{
      console.log(res1); 
      let length =res1.messages.length;
      
      for(let index=0;index<length;index++)
      {
        this.messages.push(res1.messages[index].body);
      }
     }),
    err=>{
      console.log(err);
    } 
  }
  }

  joinchannel(channels)
  {
    var all_ch=this.api.joinchannel_descript(channels);
    all_ch.subscribe(data=>(console.log(data)));
  }

  ngOnInit() 
  {
    this.Show();
    this.showchannel();
  }

}
