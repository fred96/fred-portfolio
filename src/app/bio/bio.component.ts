import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutCardData = [
    {name:'First Name',value:'Fred'},
    {name:'Last Name',value:'Musisi'},
    {name:'Year Of Birth',value:'1996'},
    {name:'Place of Birth',value:'Entebbe, Uganda'},
    {name:'Profession',value:'Software Engineer'},
    {name:'Current Adress',value:'Namulanda, Ebb rd.'},
    {name:'Website',value:'fred.ugtechguys.com'},
    {name:'Email Addresss',value:'fredmusisi96@gmail.com'},
   
    
  ];
}
