import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Error404Component } from './components/errors/error404/error404.component';

import { Routing } from './app.routing';

import { AuthService } from './services/auth.service';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
      AppComponent
    , HomeComponent
    , LoginComponent
    , RegisterComponent
    , Error404Component
  ],
  imports: [
      BrowserModule
    , FormsModule
    , Routing
    , AngularFireModule.initializeApp(environment.firebase)
    , AngularFireAuthModule
    , AngularFireDatabaseModule
  ],
  providers: [
      AuthService
    , UserService
    , AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
