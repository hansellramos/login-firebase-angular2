import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

import { AuthGuard } from './guards/auth.guard';

import { Error404Component } from './components/errors/error404/error404.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] }
  , { path: 'register', component: RegisterComponent }
  , { path: 'login', component: LoginComponent }
  , { path: 'project/new', component: ProjectNewComponent }
  , { path: 'project/:id', component: ProjectDetailComponent }
  , { path: '', redirectTo: '/login', pathMatch: 'full' }
  , { path: '**', component: Error404Component }
];

export const Routing = RouterModule.forRoot(routes);
