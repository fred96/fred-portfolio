import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  showCourseUnits = false;

  constructor() { }

  ngOnInit(): void {

  }

  showAllCourseUnits(){
    this.showCourseUnits = !this.showCourseUnits;
  }

}
