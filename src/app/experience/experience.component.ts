import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  software = false;
  graphics = true;
  showSoftware(){
    this.software = false
    this.graphics = true
    
  }
  showGraphics(){
    this.software = true
    this.graphics = false
  }

}
