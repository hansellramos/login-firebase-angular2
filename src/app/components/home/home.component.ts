import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: FirebaseListObservable<User[]>;

  constructor(db: AngularFireDatabase) {
    this.users = db.list('/users');
  }

  ngOnInit() {
  }

}
