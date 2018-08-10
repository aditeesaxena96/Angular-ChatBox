import { Component, OnInit } from '@angular/core';
import { AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import {  HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIserviceService } from '../apiservice.service';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(private socialAuthService : AuthService, private api: APIserviceService, private router :Router) { }

  item;
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      var t =this.item =this.api.getdata();
      // this.router.navigate(['chatbox']);
      t.subscribe(data=>console.log(data))
    }
    else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
       var t =this.item =this.api.getdata();
       t.subscribe(data=>console.log(data))
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
       console.log(socialPlatform+" sign in data : " , userData);
       this.api.UserData=userData;
       this.router.navigate(['chatbox']);
       
       
      //  localStorage.setItem("id", userData.id);
      //  localStorage.setItem("name", userData.name);
      //  localStorage.setItem("imag", userData.image);
      }
    );
    

  }

  ngOnInit() {
  }

}
