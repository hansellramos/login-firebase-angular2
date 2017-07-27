import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Project} from '../../models/project';

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(
    private projectService: ProjectService
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((id) => {
      this.projectService.one(id)
        .subscribe((result: Project) => { this.project = result })
    });
  }

}
