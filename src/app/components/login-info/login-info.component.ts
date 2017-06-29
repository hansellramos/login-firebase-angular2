import { Component, Input } from '@angular/core';

import { User } from '../../models/index'

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent {

  @Input() user: User;

  constructor() { }

}
