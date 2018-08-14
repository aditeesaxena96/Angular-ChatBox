import { Component, OnInit } from '@angular/core';
import { AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIserviceService } from '../apiservice.service';
import { Jsonp } from '../../../node_modules/@angular/http';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(private socialAuthService : AuthService, private api: APIserviceService, private router :Router) { 
    api.UserData=JSON.parse(sessionStorage.getItem('Userdata'));
    if(JSON.parse(sessionStorage.getItem('Userdata'))!=undefined)
    {
      router.navigate(['/chatbox']);
      alert('Already Log in');
    }
  }

  item;
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
   
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        sessionStorage.setItem('Userdata',JSON.stringify(userData))
       //console.log(socialPlatform+" sign in data : " , userData);
       this.api.UserData=userData;
       this.api.auth=true;
       var result = this.api.getchannel();
       result.subscribe(data=>{this.api.Allchannel=data.channels;
        this.router.navigate(['chatbox']);
      })
       
       
       
       localStorage.setItem("id", userData.id);
      //  localStorage.setItem("name", userData.name);
      //  localStorage.setItem("imag", userData.image);
      }
    );
    

  }

  ngOnInit() {
  }

}
