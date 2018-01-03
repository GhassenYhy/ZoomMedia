import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../_services/authentication.service';
import { VideoService } from '../_services/video.service';
import { MyPlayerService } from '../_services/myPlayer.service';
import { MediaComponent } from '../Media/media.component';
import { DetailComponent } from '../detail/detail.component';
import {HomeComponent} from '../home/home.component';
import {ProgressHttpModule} from 'angular-progress-http';
import {AuthGuardService} from '../_services/auth-guard.service'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'custom1', component: Custom1Component },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
  children: [
    {path: 'media', component: MediaComponent},
    {path: 'media/:id', component: DetailComponent}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MediaComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressHttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, VideoService, MyPlayerService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
