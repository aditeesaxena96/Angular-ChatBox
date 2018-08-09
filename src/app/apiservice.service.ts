import { Injectable } from '@angular/core';
import {  } from '../../node_modules/@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
 channelId="CH64356419d49c4347bda81ff819d59492";
 user:string="aditeesaxena96@gmail.com";
 channellist: any;
  username: string =  'AC77fb9fafce5e99e11a48c0505532eb3c';
  password: string = '427c6588895d3893285e432a35908d95';
  url = 'https://chat.twilio.com/v2/Services';
 channel : string="https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels"
 ServiceId: string="ISc2cd82178ec546ef98854a4f62cc8de7";

 

  constructor(private http:HttpClient) { }
  
 
  getdata() : Observable<any>
  {
    const body = new HttpParams().set('FriendlyName','Adi')
    return this.http.post(this.url,body.toString(), httpOptions)
  }

  getchannel() : Observable<any>
  {
    const body=new HttpParams().set('UniqueName','chatting-box1');
      return this.http.post(this.channel,body.toString(), httpOptions)
  }

  setData() : Observable<any>{
    return this.http.post(this.url,"FriendlyName =Adi", httpOptions);
  }

  // createChannel() : Observable<any>{
  //   return this.http.post(this.channel,"UniqueName =Angular Chatbox", this.httpOptions);
  // }

  displayChannel() : Observable<any>{
    return this.http.get(this.channel, httpOptions);
  }
  // chnl : string;
  addChannel(str_add ) : Observable<any>{
   // const body=new HttpParams().set('UniqueName', 'chatting');
    return this.http.post("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/Channels",'FriendlyName=Adi&UniqueName='+str_add , httpOptions);
  }

  
  // addRole() : Observable<any>{
  //   return this.http.post("https://chat.twilio.com/v2/Services/ISee3ad4f4257240569a8af5351afab978/roles","FriendlyName =Aditee Saxena & Permission=createchannel & type=deployment", this.httpOptions);
  // }

  
  addUser(str_user) : Observable<any>{
    return this.http.get("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/users"+str_user, httpOptions);
  }

  sendMessage(user) : Observable<any>{
    // return this.http.post("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/channels/CH0631f7fa19a84fbbb2b0045e8af85516/messages","FriendlyName =Aditee Saxena", httpOptions);
    return this.http.post("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages","ChannelSid="+this.channelId+"&ServicesSid="+this.ServiceId+"&Body="+user+"&From="+this.user,httpOptions);
  }

 showMessage(user) : Observable<any>{
   // return this.http.get("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/channels/CH0631f7fa19a84fbbb2b0045e8af85516/messages", httpOptions);
    return this.http.get('',httpOptions)
  }

  
  Show():Observable<any>{
    return this.http.get("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages",httpOptions).pipe(map(data=>data));
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUM3N2ZiOWZhZmNlNWU5OWUxMWE0OGMwNTA1NTMyZWIzYzo0MjdjNjU4ODg5NWQzODkzMjg1ZTQzMmEzNTkwOGQ5NQ=='
  })

}

 
