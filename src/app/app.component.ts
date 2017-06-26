import {Component, OnInit, Injectable} from '@angular/core';
import { AuthService } from './services/auth.service'
import { Login } from './models/login';
import { User } from './models/user';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService, UserService ]
})
export class AppComponent implements OnInit {

  public user: any = 'Loading Auth...';
  public isAuthenticated = false;

  constructor(
    private _auth: AuthService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._auth.afAuth.auth.onAuthStateChanged(user => {
        this.isAuthenticated = !!user,
        this.updateCurrentUserInfo();
      }
    );
  }
  public updateCurrentUserInfo() {
    if (this.isAuthenticated) {
      const user = this._auth.getCurrentUser();
      this._userService.one(user.uid).subscribe(remoteUser => {
        this.user = new User(remoteUser.email, remoteUser.fullname);
      });
    } else {
      this.user = null;
    }
  }

  public onLoginWithGoogle() {
    this._auth.loginWithGoogle();
  }

  public onLoginWithEmailAndPassword(login: Login) {
    this._auth.loginWithEmailAndPassword(login.email, login.password);
  }

  public logout() {
    this._auth.logout();
  }

}
