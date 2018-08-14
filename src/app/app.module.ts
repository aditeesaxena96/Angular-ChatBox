import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule,AuthServiceConfig,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule, } from '@angular/http';
import { APIserviceService } from './apiservice.service';
import { ChatdisplayComponent } from './chatdisplay/chatdisplay.component';
import {FormsModule } from '@angular/forms';

const routes: Routes= 
[ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path :'login',
  component: AccessComponent},
{ path: 'chatbox', component: ChatdisplayComponent, canActivate : [APIserviceService] },
{ path: '**', component: AccessComponent }
];

export function getAuthServiceConfigs()
{
  let config= new AuthServiceConfig(
    [
      {
        id : FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('292429774847463')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("777934196617-ol99qpt9cs9dujcme9sq8im9qlc9hbl6.apps.googleusercontent.com")
      }
    ]
  )
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    ChatdisplayComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [ APIserviceService,{ provide :AuthServiceConfig, 
    useFactory: getAuthServiceConfigs}],
    bootstrap: [AppComponent]
})
export class AppModule { }
