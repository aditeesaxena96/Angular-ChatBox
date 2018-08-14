import { Injectable } from '@angular/core';
import {  } from '../../node_modules/@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { CanActivate, Router } from '../../node_modules/@angular/router';
@Injectable({
  providedIn: 'root'
})

export class APIserviceService implements CanActivate
{
  user:string="aditeesaxena96@gmail.com";
  channellist: any;
  username: string =  'AC77fb9fafce5e99e11a48c0505532eb3c';
  password: string = '427c6588895d3893285e432a35908d95';
  url = 'https://chat.twilio.com/v2/Services';
  channel : string="https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels"
  ServiceId: string="ISc2cd82178ec546ef98854a4f62cc8de7";

 
  constructor(private http:HttpClient, private route: Router) { }
  
  auth:boolean =false;
  canActivate()
  {
    if(JSON.parse(sessionStorage.getItem('Userdata'))!=undefined){
      return true;
    }
    else
    {
      return false;
    }
  }
  UserData : any;
  Allchannel :any;
  showmsg;
  channelid;
  
 
  getdata() : Observable<any>
  {
    const body = new HttpParams().set('FriendlyName','Adi')
    return this.http.post(this.url,body.toString(), httpOptions)
  }


  getchannel() : Observable<any>
  {
      return this.http.get(this.channel,httpOptions)
  }


  setData() : Observable<any>
  {
    return this.http.post(this.url,"FriendlyName =Adi", httpOptions);
  }

  createChannel(str_add) : Observable<any>
  {
    const body=new HttpParams().set('UniqueName', str_add);
    return this.http.post(this.channel,body.toString(), httpOptions);
  }

  displayChannel() : Observable<any>
  {
    return this.http.get(this.channel, httpOptions);
  }
  
  addChannel(str_add ) : Observable<any>
  {
    return this.http.post("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels",'FriendlyName=Adi&UniqueName='+str_add , httpOptions);
  }

  
  // addRole() : Observable<any>{
  //   return this.http.post("https://chat.twilio.com/v2/Services/ISee3ad4f4257240569a8af5351afab978/roles","FriendlyName =Aditee Saxena & Permission=createchannel & type=deployment", this.httpOptions);
  // }

  joinchannel_descript(channelid) : Observable<any>{
    
    const body =new HttpParams().set('ChannelSid', channelid.SetviceId).set("ServiceSid", channelid.sid).set("Identity",localStorage.getItem('id'));
    return this.http.post(channelid.links.members,body.toString(), httpOptions)
  }


  sendMessage(message,member) : Observable<any>{
    console.log(member,"member")
    const body=new HttpParams().set('ChannelSid',member.service_id).set('ServiceSid',member.sid).set('Body',message).set('From', localStorage.getItem('id'))
    return this.http.post(member.links.messages,body.toString(),httpOptions);
  }


 showMessage(channel) : Observable<any>{
   
    return this.http.get(channel.links.messages,httpOptions)
  }

  


}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUM3N2ZiOWZhZmNlNWU5OWUxMWE0OGMwNTA1NTMyZWIzYzo0MjdjNjU4ODg5NWQzODkzMjg1ZTQzMmEzNTkwOGQ5NQ=='
  })

}

 
