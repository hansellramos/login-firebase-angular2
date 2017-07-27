import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  private ref: string;

  constructor(private db: AngularFireDatabase) {
    this.ref = '/projects';
  }

  public all(): FirebaseListObservable<Project[]> {
    return this.db.list(this.ref);
  }

  public one(uid: any): FirebaseObjectObservable<Project> {
    console.log(this.ref + '/' + uid);
    return this.db.object(this.ref + '/' + uid);
  }

}
