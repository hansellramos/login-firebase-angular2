import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-common-go-back',
  templateUrl: './common-go-back.component.html',
  styleUrls: ['./common-go-back.component.css']
})
export class CommonGoBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
