import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {ProjectService} from '../../services/project.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {Project} from '../../models/project';

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
    , private projectService: ProjectService
    , private router: Router
  ) { }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
        this.isAuthenticated = !!user;
        this.updateCurrentUserInfo();
      }
    );
  }

  public updateCurrentUserInfo() {
    if (this.isAuthenticated) {
      const user = this.authService.getCurrentUser();
      this.userService.one(user.uid).subscribe(remoteUser => {
        if (remoteUser) {
          this.user = new User(user.uid, remoteUser.email, remoteUser.fullname, remoteUser.projects);
          this.getUserProjects();
        }
      });
    } else {
      this.user = null;
    }
  }

  public getUserProjects() {
    if (this.user.projects && this.user.projects.length > 0) {
      for (const p of this.user.projects) {
        this.projectService.one(p.id)
          .subscribe((project: Project) => {
            this.replaceProject(project.id, project);
          });
      }
    }
  }

  private replaceProject(id: string, project: Project) {
    for (const index in this.user.projects) {
      if (this.user.projects[index].id === id) {
        this.user.projects[index] = project;
      }
    }
  }

  public logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
