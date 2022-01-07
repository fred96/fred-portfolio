import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tgug-fredp';
  showMenu = false;
  
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();


  navItems = [
    {name:'HOME',link:'/home'},
    {name:'BIO',link:'/bio'},
    {name:'EDUCATION',link:'/education'},
    {name:'PORTFOLIO',link:'/experience'},
    {name:'CONTACT',link:'/contact'},
    
  ];

  
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
    
}
