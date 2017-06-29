import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ]
})

export class HomeComponent implements OnInit {

  public user: User;
  public isAuthenticated = false;

  constructor(
    private authService: AuthService
    , private userService: UserService
    , private router: Router
  ) { }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
        this.isAuthenticated = !!user,
          this.updateCurrentUserInfo();
      }
    );
  }

  public updateCurrentUserInfo() {
    if (this.isAuthenticated) {
      const user = this.authService.getCurrentUser();
      this.userService.one(user.uid).subscribe(remoteUser => {
        this.user = new User(remoteUser.email, remoteUser.fullname);
      });
    } else {
      this.user = null;
    }
  }

  public logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
